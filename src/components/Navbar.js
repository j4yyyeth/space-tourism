import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div id="navbar">
      <img src="shared/logo.svg" alt="logo" />
      <div className="line"></div>
      <div className="links">
        <Link className={location.pathname === "/" ? 'active-link' : 'link'} to="/">00 Home</Link>
        <Link className={location.pathname === "/destination" ? 'active-link' : 'link'} to="/destination">01 Destination</Link>
        <Link className={location.pathname === "/crew" ? 'active-link' : 'link'} to="/crew">02 Crew</Link>
        <Link className={location.pathname === "/technology" ? 'active-link' : 'link'} to="/technology">03 Technology</Link>
      </div>
    </div>
  );
};

export default Navbar;