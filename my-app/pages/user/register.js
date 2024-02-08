import RegisterForm from "../../components/RegisterForm";
import styles from "../../styles/Register.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link"


function Register() {
  const [submittedData, setSubmittedData] = useState([]);
  const router = useRouter()

  const onSubmitHandler = async (formData) => {
	console.log("on submit handler working in register.js")
    try {
      const response = await fetch("/api/usersApi/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
		console.log("response is ok!")
        setSubmittedData((prevData) => [...prevData, formData]);
        console.log("User registered successfully! ", submittedData);
		router.push('/user/login/')

      } else {
        console.log("Failed to register user.");
		// console.log(response)
      }
    } catch (error) {
      console.log("There was an error: ", error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Register Here: </h2>
        <RegisterForm onSubmit={onSubmitHandler} />
		<Link href="/user/login">Login here.</Link>
      </div>
    </>
  );
}

export default Register;
