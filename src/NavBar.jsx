
import { Link } from "react-router-dom";


function NavBar() {
  
  return (
      <nav className="nav">
        <Link to="/horror-books" className="link">Home</Link>
        <Link to="/horror-books/catalog" className="link">Catalog</Link>
      </nav>
    )
  
}

export default NavBar;
