import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Myuser = () => {
    let alluser = useSelector(state => state.Userlist);
    let dispatch = useDispatch();

    let [newuser, setnewuser] = useState('');

    const save = () => {
        let userinfo = ({type:'ADD_USER', fullname : newuser});
        dispatch(userinfo)
        setnewuser('');
    }

    const deluser = (index) => {
        let userinfo = ({type:'DELETE_USER', userindex : index});
        dispatch(userinfo);
    }
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>Manage user : {alluser.length} </h3>
                    <p>
                        Enter User Name : <input type="text" className=" col-lg-4 text-center form-control m-3" onChange={obj => setnewuser(obj.target.value)} value={newuser}/>
                        <button className="btn btn-primary" onClick={save}>Save user</button>
                    </p>
                </div>
            </div>

            <div className="row mt-5">
                {
                    alluser.map((name, index) => {
                        return(
                            <div>
                                <div className="col-lg-3 mb-4" key={index}>
                                    <p>{name}</p>
                                    <button className="btn btn-danger" onClick={deluser.bind(this, index)}> Delete user </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Myuser;