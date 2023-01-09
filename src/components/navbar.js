import { Link } from "react-router-dom";

export default function NavBar() {
  

  return (
    <div className="navbarstyle">
        <img src='./kruger.png' alt='none' width="45px" />

      <Link to="/" className="linkstyle">
        Home
      </Link>

      <Link to="/create" className="linkstyle">
        Create
      </Link>
    </div>
  );
}