import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <h1 className="logo">
          <i className="fa-solid fa-globe"></i>
          <Link to="/">World Class Dive</Link>
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/divePlan"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Dive Plan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logIn"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
