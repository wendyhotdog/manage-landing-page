import { useState } from 'react';
import { close, menu } from '../assets/static/icons';
import logo from '../assets/static/logo.svg';
import { navLinks } from '../constants';
function Nav() {
  const [Open, setOpen] = useState(false);
  return (
    <nav className="nav | section-max-w">
      <div>
        <a href="#home" className="nav-logo">
          <img src={logo} alt="Manage" />
        </a>
      </div>
      <div>
        <img
          src={Open ? close : menu}
          alt="Menu"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className={`nav-menu ${Open ? 'expanded' : ''}`}
        />
        <ul className="nav-links-container">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.id} className="nav-links | transition-all">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-cta-container">
        <a href="#get_started" className="nav-cta cta | transition-all">
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Nav;
