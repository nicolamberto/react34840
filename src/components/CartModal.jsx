import React from "react";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <CartWidget/>
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"  style={{fontSize:"25px"}}>Carrito</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=> eliminarProducto()}></button>
                </div>
                <div class="modal-body">
                    {allProducts.map(product=> (
                    <div class="card mb-3" style={{maxWidth : "540px"}}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={product.imagen} class="img-fluid rounded-start" alt={product.nombre}/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{product.nombre} </h5>
                          <div className="d-flex justify-content-between">
                            <p class="card-text"><small class="text-muted">{product.categoria} </small></p>
                            <p className="fw-semibold" style={{fontSize: "1.1rem"}}>${product.precio}</p>
                            <button type="button" class="btn-close" aria-label="Close" onClick={()=> eliminarProducto(product)}></button>
                          </div>
                          <p class="card-text"><small class="text-muted">CANTIDAD: {product.cantidad} </small></p>
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                    ))}
                </div>
                <hr />
                <h5 className="text-end pe-5">TOTAL: ${total} </h5>
                <div class="modal-footer text-center d-flex justify-content-around">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  style={{fontSize:"20px"}} onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button type="button" class="btn btn-primary"  style={{fontSize:"20px"}}>Continuar con la compra</button>
                </div>
                </div>
            </div>
            </div>
        </div>
             
    )

}

export default CartModal;
