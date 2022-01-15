import React, { createContext, useReducer } from 'react'
import { Reducer } from './Reducer'


export const Context = createContext()

const cart = {
    product: [], //{id, name, desrc, image, price}
    cart: []  // {"" + qty}

}

function CartContext(props) {

    const [state, dispatch] = useReducer(Reducer, cart)

    function addToCart(id) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: id
            }
        })

    }
    function removeFromCart(id) {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                id: id
            }
        })

    }

    return (
        <Context.Provider value={{ cart: state.cart, addToCart, removeFromCart }}>
            {props.children}
        </Context.Provider >

    )
}

export default CartContext
