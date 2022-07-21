

const Favorites = props => {
  const context = useContext(AppContext);
  const [favorites, setFavorites] = useState([]);



  const mostrarFavoritos = () => {
    console.log(favorites);
  };

  const updateFavorites = () => {
    // Si hay algo en local storage de favoritos, actualizamos favoritos
    if (JSON.parse(localStorage.getItem('favorites'))) {
      const favoritesArray = JSON.parse(localStorage.getItem('favorites'));
      setFavorites(favoritesArray);
    } else {
      setFavorites(null);
    }
  };


  return (
    <>
      <MostrarFavoritos>

      </MostrarFavoritos>
    </>
  );
};

export default Favorites;

// estilo de favoritos
const MostrarFavoritos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const H2 = styled.h2`
  /* font-size: 1.5rem; */
  width: 100%;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContenedorFavoritos = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: none;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #db4444;
  background-color: #e9a7a7;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;
