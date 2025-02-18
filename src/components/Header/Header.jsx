import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">HeyLocal</h1>
      <nav className="header__nav">
        <a>Home</a>
        <a>Events</a>
        <a>About</a>
      </nav>
    </header>
  );
}

export default Header;
