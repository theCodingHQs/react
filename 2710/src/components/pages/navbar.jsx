import "./navbar.css";

const Navbar = (props) => {
  return (
    <nav className={props.className}>
      <span className="logo">Logo</span>

      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Applications</li>
        <li>About Us</li>
        <li>Help</li>
      </ul>

      <div>
        <div>User</div>
      </div>
    </nav>
  );
};

export default Navbar;
