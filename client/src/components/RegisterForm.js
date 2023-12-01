// import React, { useState } from "react";

// function RegisterForm() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log("username: ", username);
//     console.log("password: ", password);
//   };

//   return (
//     <div>
//       <h2>Welcome to the Event Ticketing System!</h2>
//       <h3>Register Here</h3>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={(evt) => setUsername(evt.target.value)}
//           ></input>
//         </label>
//         <label>
//           Password:
//           <input
//             type="text"
//             name="password"
//             value={password}
//             c
//             onChange={(evt) => setPassword(evt.target.value)}
//           ></input>
//         </label>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
