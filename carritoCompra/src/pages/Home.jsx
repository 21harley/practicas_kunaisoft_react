import {useEffect} from 'react';
import Nav from './../componet/Nav/Nav';
import ListaProductos from './../componet/ListaProductos/ListaProductos';
import Footer from './../componet/Footer/Footer';

const Home=()=>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav/>
      <ListaProductos/>
      <Footer/>
    </>
  );
};

export default Home;
