
import { Link } from "react-router-dom";


function NavBar() {
  
  return (
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/catalog" className="link">Catalog</Link>
      </nav>
    )
  
}

export default NavBar;
