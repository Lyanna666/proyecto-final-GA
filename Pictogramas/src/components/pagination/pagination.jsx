import './pagination.css';
import React, { useState, useEffect } from 'react';
import { usePaginationRange, DOTS } from './usePaginateRange';

const Pagination = ({
  data,
  numberPages,
  RenderComponent,
  title,
  buttonConst,
  contentPerPage,
  siblingCount,
}) => {
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePaginationRange({
    totalPageCount,
    contentPerPage,
    buttonConst,
    siblingCount,
    currentPage,
  });

  useEffect(
    () => {
      setTotalPageCount(Math.ceil(numberPages / contentPerPage));

      // window.scrollTo({
      //   behavior: 'smooth',
      //   top: '0px',
      // });

      // Cuando cambias de pág hace scroll hacia arriba
      setTimeout(() => {
        const element = document.getElementById('form-search-pictograms');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    },
    [currentPage, contentPerPage, numberPages],
  );

  // Avanza una página
  function goToNextPage() {
    setCurrentPage(page => page + 1);
  }

  // Va a la pág anterior
  function gotToPreviousPage() {
    setCurrentPage(page => page - 1);
  }

  // cambia el estado CurrentPage con la página actual
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // Coge la data correspondiente a la página
  const getPaginatedData = () => {
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      {/* show the post 10 post at a time*/}
      <div className="dataContainer">
        {getPaginatedData().map((dataItem, index) => (
          <RenderComponent key={index} data={dataItem} />
        ))}
      </div>
      {/* show the pagiantion
                it consists of next and previous buttons
                along with page numbers, in our case, 5 page
                numbers at a time */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={gotToPreviousPage}
          className={` prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
          ◀
        </button>
        {/* show paginated button group */}
        {paginationRange.map((item, index) => {
          if (item === DOTS) {
            return (
              <button key={index} className={`paginationItem`}>
                &#8230;
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? 'active' : null
              }`}
            >
              <span>{item}</span>
            </button>
          );
        })}
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === totalPageCount ? 'disabled' : ''}`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Pagination;
