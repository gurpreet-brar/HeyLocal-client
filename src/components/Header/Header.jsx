import "./Header.scss";
import { Link } from "react-router-dom";
import search from "../../assets/icons/search-24px.svg";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__logo">HeyLocal</h1>
      </Link>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/event/add">Add Event</Link>
      </nav>
      <div className="header__search">
        <Link to="/events">
          <img src={search} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
