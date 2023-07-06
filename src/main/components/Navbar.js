import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);




  return (
    <nav className="navbar">
      <h1>Anotnio Ray Lu</h1>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen? "open":""}>
          <NavLink exact to="/aboutme" activeClassName="active">About Me</NavLink>
          <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink exact to="/contactme" activeClassName="active">Contact</NavLink>
          <NavLink exact to="/resume" activeClassName="active">Resume</NavLink>
      </ul>
    </nav>
  );
}
 
export default Navbar;