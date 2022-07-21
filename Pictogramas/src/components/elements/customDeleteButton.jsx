import './deleteButton.css';

const CustomDeleteButton = ({ color = '', name = 'name', onClick }) => {
  const onButtonClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  const onDragOver = e => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const onDragLeave = e => {
    e.preventDefault();
    e.target.classList.remove('drag-over');
  };

  return (
    <div
      className="trash-div"
      onClick={onButtonClick}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <svg
        width="4rem"
        height="100%"
        viewBox="0 0 20 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc />
        <defs />
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="0.5"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Free-Pack-/-bin-2"
            transform="translate(-2.000000, 0.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <g id="Group" transform="translate(2.000000, 0.000000)">
              <g className="trash">
                <path
                  className={`trash-body ${color}`}
                  fill="gray"
                  d="M17.5,8.99 L2.5,8.99 C2.22385763,8.99 2,9.21385763 2,9.49 L2,21.99 C2,23.0945695 2.8954305,23.99 4,23.99 L16,23.99 C17.1045695,23.99 18,23.0945695 18,21.99 L18,9.49 C18,9.21385763 17.7761424,8.99 17.5,8.99 Z M8.25,20.49 C8.25,20.9042136 7.91421356,21.24 7.5,21.24 C7.08578644,21.24 6.75,20.9042136 6.75,20.49 L6.75,11.865 C6.75,11.4507864 7.08578644,11.115 7.5,11.115 C7.91421356,11.115 8.25,11.4507864 8.25,11.865 L8.25,20.49 Z M13.25,20.49 C13.25,20.9042136 12.9142136,21.24 12.5,21.24 C12.0857864,21.24 11.75,20.9042136 11.75,20.49 L11.75,11.865 C11.75,11.4507864 12.0857864,11.115 12.5,11.115 C12.9142136,11.115 13.25,11.4507864 13.25,11.865 L13.25,20.49 Z"
                  id="Shape"
                />
                <path
                  className={`trash-cover ${color}`}
                  fill="var(--red)"
                  d="M18.922,4.851 C17.6248394,4.24765531 16.2288196,3.88509677 14.802,3.781 C14.2607992,1.5675531 12.2771499,0.0104840357 9.9985,0.0104840357 C7.71985007,0.0104840357 5.7362008,1.5675531 5.195,3.781 C3.80792969,3.8900629 2.44987496,4.23642605 1.18,4.805 C0.501559377,5.09309624 0.0445476221,5.74027136 -1.02018817e-14,6.476 C-0.00374724218,6.74363383 0.099953011,7.0015992 0.287897076,7.19217448 C0.475841141,7.38274976 0.732339938,7.49002623 1,7.49 L19,7.49 C19.5464795,7.49006148 19.9918028,7.05141805 20,6.505 C19.9837618,5.79373755 19.5661649,5.15300913 18.922,4.851 Z M9.976,2.01 C11.0786013,1.9886979 12.0969497,2.59761125 12.6,3.579 C10.8681368,3.47804 9.1318632,3.47804 7.4,3.579 C7.8859372,2.60454856 8.88721348,1.99468735 9.976,2.01 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default CustomDeleteButton;
