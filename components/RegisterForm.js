import React, { Component } from "react";
import Button from "../elements/Button";
class RegisterForm extends Component {
  state = { name: "", email: "", password: "" };

  render() {
    return (
      <>
        <h1>Sign up for new account</h1>
        <form>
          <label htmlFor="name">
            <p>Name:</p>
            <input name="name" id="name" type="text" />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input name="email" id="email" type="email" />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              name="password"
              id="password"
              type="password"
              autocomplete="new-password"
            />
          </label>
          <br />
          <Button>Register</Button>
        </form>
      </>
    );
  }
}

export default RegisterForm;
