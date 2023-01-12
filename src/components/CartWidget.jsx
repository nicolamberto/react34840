import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";


const CartWidget = ()=> {

    const {countProducts} = useContext(CartContext)

    return (
        <div className="d-flex flex-row align-items-center" style={{cursor:"pointer"}}>
            <FontAwesomeIcon icon={faCartShopping} style={{width: "33px", height: "33px", paddingRight:"2px"}} />
            <h4>{countProducts} </h4>
        </div>
    )
}

export default CartWidget;