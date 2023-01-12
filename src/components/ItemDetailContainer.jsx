import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import arrayProductos from "./json/arrayProductos.json";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

/*     useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            });
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, [id]) */

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id)
        getDoc(documento).then((snapShot) => {
            if(snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()})
            }
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <img src={item.imagen} className={"img-fluid"} alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <Link to={"/"} className={"btn btn-warning"}>Volver atrás</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;