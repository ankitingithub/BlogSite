import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
        <Link to="/" className="logo">MYBLOG</Link>
        <nav>
          <Link to="/login">LogIn</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    );
}

export default Header;
