import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <div>
          <h1>
            <Link to="/">Demo Logo</Link>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
