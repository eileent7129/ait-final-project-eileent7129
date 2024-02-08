import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/LoginForm.module.css";

function LoginForm({ onSubmit }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
	password: ""
  });

  const onChangeHandler = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler}>
		<div className={styles.form_inputs}>
		<label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          onChange={onChangeHandler}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={onChangeHandler}
        />
		<button type="submit">Login</button>
		</div>
        
      </form>
    </div>
  );
}

export default LoginForm;
