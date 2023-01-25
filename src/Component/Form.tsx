import React, { useState } from "react";
import { useJwt } from "react-jwt";
import Dashboard from "./Dashboard";
import { data_with_jwt } from "./data";
import { dataType, MyState, responeType } from "./Type";

const Form = () => {
  const [token, setToken] = useState<React.SetStateAction<MyState>>("");

  const { decodedToken, isExpired, reEvaluateToken } = useJwt<responeType | any>("");

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email: string = e.currentTarget.email.value;
    let password: string = e.currentTarget.password.value;
    let jwt: string = "";
    data_with_jwt.map((x: dataType, i: number) => {
      if (email === x.email && password === x.password) jwt = x.token;
    });
    if (jwt === "") setToken("false");
    else {
      reEvaluateToken(jwt);
      setToken(jwt);
    }
  };

  
  if (token !== "" && token !== "false") {
    if (isExpired)
      return (
        <div className="bg-danger p-4 rounded col-6">
          <p className="text-white fw-bold fs-3">User jwt Token is Expired.</p>
          {/* <p>This token is valid upto: {Date().toString()} for {decodedToken.email}</p> */}
          <button
            className="btn btn-dark"
            onClick={() => {
              reEvaluateToken("");
              setToken("");
            }}
          >
            Go to login
          </button>
        </div>
      );
    return (
      <div className="bg-danger p-2 rounded col-6">
        <Dashboard data={decodedToken} />
      </div>
    );
  }

  return (
    <>
      <p className="mt-5"></p>
      <div className="card mt-5">
        <form onSubmit={formHandler} className="card-body">
          <h5
            className={`card-title ${token === "false" ? "text-danger" : ""}`}
          >
            {token === "false" ? "JWT token not matched!" : "Sign In"}
          </h5>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
              Email
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                name="email"
                className="form-control"
                id="inputEmail"
                defaultValue="jai@gmail.com"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
              Password
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                name="password"
                defaultValue="jai123"
                className="form-control"
                id="inputPassword"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
      <span className="col-6 mt-5 pt-5">
        <pre>{JSON.stringify(data_with_jwt, null, 4)}</pre>
      </span>
    </>
  );
};

export default Form;
