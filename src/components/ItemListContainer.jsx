import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import arrayProductos from "./json/arrayProductos.json";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, query, where, snapshotEqual } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const {allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal} = useContext(CartContext);

    const onAddProduct = (product) => {

        if(allProducts.find(item => item.id === product.id)){
            const products = allProducts.map(item => item.id === product.id ?{...item, cantidad: item.cantidad + 1}:item)
            setTotal(total + product.precio * product.cantidad)
            setCountProducts(countProducts + product.cantidad)
            return(setAllProducts([...products]))
            
        };
        setTotal(total + product.precio * product.cantidad)
        setCountProducts(countProducts + product.cantidad)
        setAllProducts([...allProducts, product]);
    }

    console.log(allProducts);

  /*   useEffect(() => {
        const promesa = new Promise((resolve) => {
                resolve(categoryId ? arrayProductos.filter(item => item.categoria === categoryId) : arrayProductos);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [categoryId]); */


    //no usarlo mas consume el documento de arratyJSON para pasarlo a firebase
/*     useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        arrayProductos.forEach((documento) => {
            addDoc(itemsCollection, documento)
        })
    }, []) */

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        const q = categoryId ? query(itemsCollection, where("categoria", "==", categoryId)) : itemsCollection;

        getDocs(q).then((snapShot)=> {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
        });
    }, [categoryId])

    return (
        <div className="container">
            <div className="row">
                {
                    items.map(item => 
                        <div className="col-md-3 mb-3" key={item.id}>
                            <div className="card text-center">
                                <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                    <div className="card-body">
                                        <p className="card-text">{item.nombre}</p> 
                                    </div>
                                </Link>
                                <div>
                                    <p className="card-text"><b>${item.precio}</b></p>
                                    <div className="d-flex justify-content-around" style={{paddingBottom:"7px"}}>
                                        <Link to={"/item/" + item.id}><button type="button" class="btn btn-outline-dark">Vista Previa</button></Link>
                                        <button type="button" class="btn btn-outline-dark" onClick={()=> onAddProduct(item)}>Agregar Al Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ItemListContainer;