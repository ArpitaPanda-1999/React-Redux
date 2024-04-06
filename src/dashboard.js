import { useState } from "react";
import { useSelector } from "react-redux";

const MyDashboard = () => {
    let alluser = useSelector(state => state.Userlist);
    let allproduct = useSelector(state => state.ProductList);
    let bloglist = useSelector(state => state.ApiList);
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>React and Redux Dashboard</h1>
                </div>
                <div className="col-lg-4">
                    <h5>Total user in redux : {alluser.length} </h5>
                </div>
                <div className="col-lg-4">
                    <h5>Total product in redux : {allproduct.length} </h5>
                </div>
                <div className="col-lg-4">
                    <h5>Total Api record in redux : {bloglist.length} </h5>
                </div>
            </div>
        </div>
    )
}

export default MyDashboard;