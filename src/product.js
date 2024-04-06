import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Myproduct = () => {
    let[pname, pickName] = useState(" ");
    let[pprice, pickPrice] = useState(" ");
    let[pqty, pickQTY] = useState(" ");
    
    let allproduct = useSelector(state => state.ProductList);
    let dispatch = useDispatch();

    const save = () => {
        // alert("hi");
        let newProduct = {name : pname, price : pprice, qty : pqty};
        let dispatchData = {type : "saveproduct", pinfo : newProduct};
        dispatch(dispatchData);
        pickName("");
        pickPrice("");
        pickQTY("");
    }

    const delpro = (index) => {
        let dispatchData = {type: "deleteproduct" , pindex : index};
        dispatch(dispatchData);
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage product : {allproduct.length} </h3>
                    <p>
                        <input type="text" className="form-control m-3" placeholder="Item name" onChange={obj => pickName(obj.target.value)} value={pname}/>
                        <input type="text" className="form-control m-3" placeholder="Item price" onChange={obj => pickPrice(obj.target.value)} value={pprice}/>
                        <input type="text" className="form-control m-3" placeholder="Item quantity" onChange={obj => pickQTY(obj.target.value)} value={pqty}/>
                        <button className="btn btn-primary" onClick={save}>save product</button>
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                {
                    allproduct.map((product, index) => {
                        return(
                            <div className="col-lg-2 mb-4" key={index}>
                                <h4> {product.name} </h4>
                                <p> RS. : {product.price} </p>
                                <p> in stock : {product.qty} </p>
                                <button onClick={delpro}> Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myproduct;