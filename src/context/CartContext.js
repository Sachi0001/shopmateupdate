import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialstate = {
    cartlist: [],
    total: 0
}

const CartContext = createContext(initialstate);


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialstate);

    const addToCart = (product) => {
        const updatedCartList = state.cartlist.concat(product)
        updateTotal(updatedCartList);
        dispatch({
            type: "Add_to_cart",
            payload: {
                products: updatedCartList
            }
        })
    }

    const removeCartList = (product) => {
        const updatedCartList = state.cartlist.filter(current => current.id !== product.id);
        updateTotal(updatedCartList)
        dispatch({
            type: "Remove_from_cart",
            payload: {
                products: updatedCartList
            }
        })
    }

    const updateTotal = (products)=>{
        let total = 0;
        products.forEach((product) => (total = total + product.price
            
        ));
dispatch({
    type:"update_total",
    payload:{
        total:total
    }
})
    }

    const value = {
        total: state.total,
        cartlist: state.cartlist,
        addToCart,
        removeCartList
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context
}