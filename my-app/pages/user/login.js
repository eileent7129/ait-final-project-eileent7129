import LoginForm from "../../components/LoginForm";
import styles from "../../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Login() {
  const [submittedData, setSubmittedData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("fetchUsers working");
      try {
		console.log("try working");
        const response = await fetch("/api/usersApi/");
		console.log("response: ", response);

        console.log("Response status:", response.status);

        if (response.ok) {
          const registeredUsers = await response.json();
          setSubmittedData(registeredUsers);
          console.log("Retrieved registered users: ", registeredUsers);
        } else {
          console.log("There was an error retrieving the users.");
        }
      } catch (error) {
        console.log("An error occured: ", error);
      }
    };
    fetchUsers();
  }, []);

  const onSubmitHandler = async (loginData) => {

    if (submittedData.length > 0) {
      const foundUser = submittedData.find(
        (user) =>
          user.email === loginData.email && user.password === loginData.password
      );

      console.log("foundUser: ", foundUser);
      if (foundUser) {
        console.log("user found, login successful!");
        router.push("/events/");
      } else {
        console.log("email or password is incorrect");
        router.push("/user/login/");
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Login Here: </h2>
        <LoginForm onSubmit={onSubmitHandler} />
        <Link href="/user/register">Register here.</Link>
      </div>
    </>
  );
}

export default Login;
