import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">JaredBook</Link>
      </h1>
      <ul>
        <li>
          <Link to="/create">Create a post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

