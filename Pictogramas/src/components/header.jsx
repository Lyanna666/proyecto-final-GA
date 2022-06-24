const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <picture>
        <img src="./Resources/Logo-black.png" alt={props.title} />
      </picture>
      <nav />
    </header>
  );
};

export default Header;
