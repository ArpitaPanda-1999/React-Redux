const ProductList = (state = [], action) => {

    let data = Object.assign([], state);

    if(action.type === "saveproduct"){
        data.push(action.pinfo)
    }

    if(action.type === "deleteproduct"){
        data.splice(action.pindex, 1)
    }

    return data;
} 

export default ProductList;