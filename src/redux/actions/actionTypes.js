
// for ADD item to cart 
export const addCart = (product) => {
    return{
        type: "ADD_CART",
        payload: product
    }
}                                                             



// for DELETE item from cart 
export const delCart = (product) => {
    return{
        type: "DEL_CART",
        payload: product
    }
}