import { configureStore } from "@reduxjs/toolkit";
import carrito from "./../slices/carrito";
import compras from "../slices/compras";

export default configureStore({
    reducer:{
        carrito,
        compras
    },
});