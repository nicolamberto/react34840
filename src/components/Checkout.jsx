import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = ()=> {

    const {allProducts, total} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            

        };

        const db = getFirestore();
        const ordersCollection = collection(db, "order");
        addDoc(ordersCollection, order).then((data) => {
            setOrderId(data.id);
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Ingrese su email" onInput={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="telefono" className="form-label">Telefono</label>
                                <input type="text" className="form-control" id="telefono" placeholder="Ingrese su telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            </div>
            
                            <button type="submit" className="btn btn-primary" onClick={generarOrden} >Generar orden</button>
                        </form>
                </div>
                <div className="col">
                            {
                            allProducts.map(product=> (
                                <tr key={product.id}>
                                    <td><img src={product.imagen} alt={product.nombre} width={64} /></td>
                                    <td className="align-middle">{product.nombre} </td>
                                    <td className="text-center align-middle" >{product.cantidad}</td>
                                    <td className="text-center align-middle">{product.cantidad * product.precio} </td>
                                </tr>
                    ))}
                            
                          
                        
                </div>
            </div>

            <div className="row my-5">
                <div className="col">
                    {orderId ? <div className="alert alert-success"role="alert">
                        <h1>Felicitaciones!</h1>
                        <p>Tu numero de orden es: {orderId} </p>
                        </div> : ""}                  
                </div>
            </div>
        </div>
        
    )
}

export default Checkout;