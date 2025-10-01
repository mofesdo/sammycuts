import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sammy Cuts</h1>
      <ul className="nav_links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#booking">Booking</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
