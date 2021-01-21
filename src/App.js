import React, { Component } from "react";
// import { LoginForm } from "./LoginFormFormik";
import { LoginForm } from "./LoginFormReactHookForm";
import "./mvp.css";

class App extends Component {
  render() {
    return (
      <main>
        <section>
          <LoginForm />
        </section>
      </main>
    );
  }
}

export default App;
