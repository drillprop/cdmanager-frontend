import React, { Component } from "react";
import Button from "../elements/Button";
class RegisterForm extends Component {
  state = { name: "", email: "", password: "" };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <h1>Sign up for new account</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <p>Name:</p>
            <input
              placeholder="your name"
              required
              name="name"
              id="name"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="email">
            <p>Email:</p>
            <input
              required
              placeholder="your email"
              name="email"
              id="email"
              type="email"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              required
              placeholder="your password"
              name="password"
              id="password"
              type="password"
              aria-autocomplete={"list"}
              autoComplete="new-password"
              onChange={this.handleChange}
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
