import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/RegisterForm.module.css";

function RegisterForm({ onSubmit }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    console.log("register data: ", formData);
    await onSubmit(formData);
    //route to login
    //router.push("/events/");
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.form_inputs}>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            required
            onChange={onChangeHandler}
          />

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            required
            onChange={onChangeHandler}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            required
            onChange={onChangeHandler}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            required
            onChange={onChangeHandler}
          />

          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
