// App.js
import {useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FindEvents from "./pages/FindEvents";
import MyEvents from './pages/MyEvents';
import CreateEvent from './pages/CreateEvent';
import RootLayout from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
	  { path: "/my-events", element: <MyEvents /> },
	  { path: "/find-events", element: <FindEvents/> },
	  { path: "/create-event", element: <CreateEvent/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
