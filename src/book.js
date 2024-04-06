import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Mybook = () => {
    let[booklist,updateBook] = useState([]);
    let[bookname,pickBookname] = useState();

    const save = () => {
        updateBook( [...booklist,bookname]);
        pickBookname("");
        alert("Book saved successfully")
    }

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage Book : {booklist.length} </h3>
                    <p>
                        Enter Book Name : <input type="text" className="form-control m-3" onChange={obj => pickBookname(obj.target.value)} value={bookname}/>
                        <button className="btn btn-primary" onClick={save}>Save Book</button>
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                {
                    booklist.map((mybookname,index) => {
                        return(
                            <div className="col-lg-3" key={index}>
                                <p className="text-center p-4 border rounded"> {mybookname} </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Mybook;