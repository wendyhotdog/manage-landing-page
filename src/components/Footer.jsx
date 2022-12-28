import { footerLinks_left, footerLinks_right } from '../constants';
import logo from '../assets/static/logo.svg';
import {
  icon_fb,
  icon_ig,
  icon_tw,
  icon_pt,
  icon_yt,
} from '../assets/static/icons';
const Footer = () => {
  return (
    <section className="primary-footer">
      <div className="container | section-max-w">
        <div className="container-media">
          <div>
            <a href="#home">
              <img src={logo} alt="Manage" className="logo" />
            </a>
          </div>
          <div className="sm-links">
            <a href="#facebook">
              <img src={icon_fb} alt="Facebook" />
            </a>
            <a href="#youtube">
              <img src={icon_yt} alt="Youtube" />
            </a>
            <a href="#twitter">
              <img src={icon_tw} alt="Twitter" />
            </a>
            <a href="#pinterest">
              <img src={icon_pt} alt="Pinterest" />
            </a>
            <a href="#instagram">
              <img src={icon_ig} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="container-links">
          <ul className="links">
            {footerLinks_left.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="links">
            {footerLinks_right.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="link">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-mailbox">
          <form className="form">
            <input
              type="email"
              aria-label="Mail box"
              placeholder="Updates in your inbox..."
              className="input mail"
            />
            <input
              type="submit"
              aria-label="submit"
              className="cta"
              value="Go!"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
