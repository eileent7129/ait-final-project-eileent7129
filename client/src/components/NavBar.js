import "../styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-event">Create an Event</Link>
          </li>
		  <li>
            <Link to="/find-events">Find Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
