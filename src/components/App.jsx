import React from "react";
import Form from "./Form";

var UserIsRegistered = false;

function App() {
  return (
    <div className="container">{<Form isRegistered={UserIsRegistered} />}</div>
  );
}

export default App;
