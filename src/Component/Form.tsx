import React, { useState } from "react";
import { useJwt } from "react-jwt";
type MyState={
        error?:string
        token?:string
    }
const Form = () => {
  const [resp, setResp] = useState<React.SetStateAction<MyState>>({});
  const jwt='eyJ0b2siOiJEZWNyaXB0ZWQiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJldmUuaG9sdEByZXFyZXMuaW4iLCJuYW1lIjoiamFpIGtyaXNobmEgdmVybWEifQ.VkZ2flC2gi6BpXVX41abNOeipTEBtkBrx1qtLsGUnIE'
  const { decodedToken, isExpired } = useJwt(jwt);
  const formHandler = (e: any) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((res) =>setResp(res));
  };

if('token' in resp && resp.token == 'QpwL5tke4Pnpja7X4') 
return (
    <>
          <div className="card">
        <div className="card-body">
        <h5 className="card-title">Authenticated with JWT react-jwt package</h5>
                <pre>{JSON.stringify(decodedToken, null, 4)}</pre>
        </div>
        </div>
    </>
)

if('error' in resp) 
return (
    <>
          <div className="card">
        <div className="card-body">
        <h5 className="card-title">Authentication failed with JWT react-jwt package</h5>
                <pre>{JSON.stringify(resp, null, 4)}</pre>
        </div>
        </div>
    </>
)


return (
    <>
      <div className="card">
        <form onSubmit={formHandler} className="card-body">
          <h5 className="card-title">Card title</h5>
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
                defaultValue="eve.holt@reqres.in"
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
                defaultValue="cityslicka"
                className="form-control"
                id="inputPassword"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
