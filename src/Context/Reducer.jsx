import { products } from "../Components/Constants/data";


export const Reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        const Item = products.find((prod) => prod.id === action.payload.id);
        const ItemInCart = state.cart.find((prod) => prod.id === action.payload.id ? true : false);
        console.log(Item)
        return {
            ...state,
            cart: ItemInCart ? state.cart.map((prod) => action.payload.id ? { ...prod, qty: prod.qty + 1 } : prod) : [...state.cart, { ...Item, qty: 1 }]
        }
    }


}

