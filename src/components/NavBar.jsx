import "../styles/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-items">
        <li>
          <Link to ='/resources'
          >
            Resources
          </Link>
        </li>
        <li>
          <Link to ='/'
          >
            Home
          </Link>
          </li>
        <li>
          <Link to ='/advice'
          >
            Advice
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;