import React from 'react';
import './App.css';
import Form from './Component/Form';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100" style={{ minHeight: "100vh" }}>
       <div className="col-11 col-md-5">
       <Form />
       </div>
    </div>

  );
}

export default App;
