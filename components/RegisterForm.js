import React, { Component, useState } from "react";
import Button from "../elements/Button";

const RegisterForm = () => {
  const [user, setUser] = useState({ name: "", password: "", email: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Sign up for new account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name:</p>
          <input
            placeholder="your name"
            required
            name="name"
            id="name"
            type="text"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
        <br />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterForm;
