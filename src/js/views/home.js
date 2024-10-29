import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
    <div className="d-flex justify-content-center">
        <h1>Contacts</h1>
        <Link to="/add">
            <button className="btn btn-success">Add Contact</button>
        </Link>
        <div className="card " style={{ width: "18rem" }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={rigoImage} className="card-img" alt="Imagen" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name</li>
                            <li className="list-group-item">Address</li>
                            <li className="list-group-item">Phone</li>
                            <li className="list-group-item">Email</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Link to="/edit">
            <button className="btn btn-success">Edit Contact</button>
        </Link>
    </div>
);