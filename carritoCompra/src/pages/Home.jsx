import {useEffect} from 'react';
import Nav from '../componet/Nav';
import ListaProductos from '../componet/listaProductos';
import Footer from '../componet/Footer';

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
