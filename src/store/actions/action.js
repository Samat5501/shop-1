export const ADD_PRODUCT = "ADD_PRODUCT";


export const add_product = (id) => {
    return {
        type: ADD_PRODUCT,
        payload: id,
    }
}