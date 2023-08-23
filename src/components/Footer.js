
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          const { id, text, href } = link
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="footer-link">{link.text}</a>
            </li>
          );
        })}
      </ul>

      <ul class="footer-icons">
        {socialLinks.map((link) => {
          const { id, icon, href } = link
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" class="footer-icon" rel="noreferrer">
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })};

      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date" >{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer