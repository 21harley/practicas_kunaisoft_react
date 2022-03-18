import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './../pages/Home';
import ListaTran from './../pages/ListaTran';
import Checkout from './../pages/checkout';
import '../index.css';

function RoutesProyecto() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/comprar" element={<Checkout />} />
      <Route path="/lista_de_compras" element={<ListaTran/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default RoutesProyecto;
