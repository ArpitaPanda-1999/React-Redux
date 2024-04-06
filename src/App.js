import { HashRouter, Link, Routes, Route } from "react-router-dom";
import MyDashboard from "./dashboard";
import Myuser from "./user";
import Myproduct from "./product";
import Myapi from "./api";
import Mybook from "./book";
function App() {
    return (
        <HashRouter>
           <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="text-primary text-center">React and Redux</h1>
                    </div>
                    <div className="col-lg-8 text-end">
                        <div className="btn-group">
                            <Link to="/" className="btn btn-primary">Dashboard</Link>
                            <Link to="/user" className="btn btn-success">Manage user</Link>
                            <Link to="/product" className="btn btn-info">Manage product</Link>
                            <Link to="/api" className="btn btn-warning">Manage API</Link>
                            <Link to="/book" className="btn btn-secondary">Manage Book</Link>
                        </div>
                    </div>
                </div>
           </div>
           <Routes>
                <Route path="/" element={<MyDashboard />} />
                <Route path="/user" element={<Myuser />} />
                <Route path="/product" element={<Myproduct />} />
                <Route path="/api" element={<Myapi />} />
                <Route path="/book" element={<Mybook />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
