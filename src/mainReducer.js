import { combineReducers } from "redux";
import Userlist from "./userReducer";
import ProductList from "./productReducer";
import ApiList from "./ApiReducer";

const MainReducer = combineReducers({
    Userlist, ProductList, ApiList
})

export default MainReducer;