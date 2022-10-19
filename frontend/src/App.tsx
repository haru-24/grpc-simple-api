import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GreeterPromiseClient } from "./helloworld/proto/helloworld_grpc_web_pb";
import { HelloRequest } from "./helloworld/proto/helloworld_pb";

function App() {
  const [msg, setMsg] = useState("")

  const client = new GreeterPromiseClient("http://localhost:8080", null, null)


  const onClickRequest = () => {
    const request = new HelloRequest()
    request.setName("gRPC!!!!")
    client.sayHello(request).then((reply) => {
      console.log(reply.getMessage())
      setMsg(reply.getMessage())
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={onClickRequest}>gRPC</button>
        <p>{msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
