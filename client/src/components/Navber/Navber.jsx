import "./Navber.css";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <nav>
      <div className="logo" >
        <Link className="nav-link" to={`/home`}>PERFUMEmania</Link>
      </div>

      <ul className="nav-list">
        <li>
          <Link className="nav-link" to={`/home`}>
            Home
          </Link>
        </li>
        <li className="vanish">
          <Link className="nav-link " to={`#`}>
            Royal
          </Link>
        </li>
        <li className="vanish">
          <Link className="nav-link " to={`#`}>
            Casual
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={`#`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
