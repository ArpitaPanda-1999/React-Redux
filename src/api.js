import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ApiList from "./ApiReducer";

const Myapi = () => {
    let[bloglist, updateBlog] = useState([]);

    const getBlog = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((blogArray) => {
            updateBlog(blogArray);
        })
    }

    useEffect(() => {
        getBlog();
    },[])
    
    let dispatch = useDispatch();
    const save = () => {
        let dispatchdata = {type : "saveBlog" , bloginfo : ApiList}
        dispatch(dispatchdata)
        alert("hi");
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage API data : { bloglist.length} </h3>
                    <button className="btn btn-primary" onClick={save}> send data to redux</button>
                </div>
                {
                    bloglist.map((blog, index) => {
                        return(
                            <div className="col-lg-3 mb-3" key={index}>
                                    <p> {blog.body} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myapi;