export const cartReducer = (state,action)=>{
const{type,payload} = action;
switch(type){
    case "Add_to_cart":
    return {...state, cartlist: payload.products}

    case "Remove_from_cart":
        return{...state, cartlist:payload.products}


        case "update_total":
            return {...state, total:payload.total}
        default:
            throw new Error("no case found in cart reducer")
}
}