import './info.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';

const Info = props => {
  const context = useContext(AppContext);

  const icons = [
    './resources/comunication.png',
    './resources/favourite.png',
    './resources/games.png',
    './resources/users.png',
  ];

  const images = [
    './resources/info-image-2.png',
    './resources/info-image-1.png',
    './resources/info-image-3.png',
    './resources/info-image-4.png',
    './resources/info-image-6.png',
    './resources/info-image-5.png',
    './resources/info-image-7.png',
  ];

  return (
    <>
      <section className="info">
        <div className="content">
          <h2 id="how-does-it-works">{context.language.HOW_WORKS_TITLE}</h2>
          <ul className="info-list">
            {context.language.HOW_WORKS_INFO.map((information, index) => (
              <li key={information.title}>
                <div className="div-info">
                  <picture>
                    <img src={icons[index]} alt={information.title} />
                  </picture>
                  <h3>{information.title}</h3>
                  <p>{information.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-users content">
        <h2 id="users">{context.language.USERS_TITLE}</h2>
        <ul className="users-list">
          {context.language.USERS.map((information, index) => (
            <li li key={information.title}>
              {index % 2 === 0 ? (
                <picture>
                  <img src={images[index]} alt={information.title} />
                </picture>
              ) : (
                <></>
              )}
              <div className="div-users">
                <h3>{information.title}</h3>
                <p>{information.description}</p>
              </div>
              {index % 2 !== 0 ? (
                <picture>
                  <img src={images[index]} alt={information.title} />
                </picture>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
        <Link className="link top-link" to={'/#header'}>
          {context.language.TOP_PAGE}
        </Link>
      </section>
    </>
  );
};

export default Info;
