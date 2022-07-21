import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Hero from '../components/Home/hero';
import Info from '../components/Home/info';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default Home;
