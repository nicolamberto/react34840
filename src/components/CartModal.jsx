import React from "react";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";


const CartModal = ()=> {

    const {allProducts, setAllProducts, total, setTotal, setCountProducts, countProducts} = useContext(CartContext);

    const eliminarProducto = (product) => {
        const results = allProducts.filter(
            item => item.id !== product.id
        )

        setTotal(total - product.precio * product.cantidad)
        setCountProducts(countProducts - product.cantidad)
        setAllProducts(results)
    }

    const vaciarCarrito = ()=> {
        setAllProducts([])
        setCountProducts(0)
        setTotal(0)
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <CartWidget/>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel"  style={{fontSize:"25px"}}>Carrito</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> eliminarProducto()}></button>
                </div>
                <div className="modal-body">
                    {allProducts.map(product=> (
                    <div className="card mb-3" style={{maxWidth : "540px"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={product.imagen} className="img-fluid rounded-start" alt={product.nombre}/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{product.nombre} </h5>
                          <div className="d-flex justify-content-between">
                            <p className="card-text"><small className="text-muted">{product.categoria} </small></p>
                            <p className="fw-semibold" style={{fontSize: "1.1rem"}}>${product.precio}</p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={()=> eliminarProducto(product)}></button>
                          </div>
                          <p className="card-text"><small className="text-muted">CANTIDAD: {product.cantidad} </small></p>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                    ))}
                </div>
                <hr />
                <h5 className="text-end pe-5">TOTAL: ${total} </h5>
                <div className="modal-footer text-center d-flex justify-content-around">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  style={{fontSize:"20px"}} onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  style={{fontSize:"20px"}}><Link style={{color:"white"}} to={"/checkout"}>Finalizar compra</Link></button>
                </div>
                </div>
            </div>
            </div>
        </div>
             
    )

}

export default CartModal;
