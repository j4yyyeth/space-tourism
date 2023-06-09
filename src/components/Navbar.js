import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
        <img src="shared/logo.svg" alt="logo" />
        <div className="line"></div>
        <div className="links">
          <Link to={'/'}>00 Home</Link>
          <Link to={'/destination'}>01 Destination</Link>
          <Link to={'/crew'}>02 Crew</Link>
          <Link to={'/technology'}>03 Technology</Link>
        </div>
    </div>
  );
};

export default Navbar;