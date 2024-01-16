

const HamburgerMenu = ({ isOpen, onClose, links }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="close-button" onClick={onClose}>
        &times;
      </div>
      <ul className="hamburger-ul">
        {links.map((link, index) => (
          <li key={index} onClick={onClose} className="hamburger-item">
            <a className="hamburger-link" href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
