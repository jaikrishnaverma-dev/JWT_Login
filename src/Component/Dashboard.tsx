import React from "react";
import { responeType } from "./Type";

const Dashboard = ({ data }: { data: responeType }) => {
  const valid = new Date(data.exp);

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {data.role} Panel
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-100 mt-2">
        <div className="card mb-2">
          <div className="row g-0">
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary">
                  Make Status primary{" "}
                </li>
                <li className="list-group-item list-group-item-secondary">
                  Make Status secondary{" "}
                </li>
                <li className="list-group-item list-group-item-success">
                  Make Status success{" "}
                </li>
                <li className="list-group-item list-group-item-danger">
                  Make Status danger{" "}
                </li>
                <li className="list-group-item list-group-item-warning">
                  Make Status warning{" "}
                </li>
                <li className="list-group-item list-group-item-info">
                  Make Status info{" "}
                </li>
                <li className="list-group-item list-group-item-light">
                  Make Status light{" "}
                </li>
                <li className="list-group-item list-group-item-dark">
                  Make Status dark{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: {data.name}</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis blanditiis sapiente, inventore eum voluptate ullam,
                  voluptatum quasi illum deserunt a facilis magnam.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    This token is valid upto: {valid.toString()} for{" "}
                    {data.email}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
