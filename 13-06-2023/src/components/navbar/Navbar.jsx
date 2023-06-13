import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">User Icon</div>
      <div className="cart-icon">Cart Icon</div>
    </nav>
  );
};

export default Navbar;
