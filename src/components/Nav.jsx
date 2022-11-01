import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}
    </nav>
  );
}
export default Nav;
