import { legacy_createStore as createStore } from "redux";
import MainReducer from "./mainReducer";


const MyStore = createStore(MainReducer);

export default MyStore;