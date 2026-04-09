import "./App.css";

export default function Navbar({ setview }) {
  return (
    <nav className="navbar">
      <div className="logo">HostelCare</div>
      <ul>
        {/* Clicking Home sets the view back to the form */}
        <li onClick={() => setview("form")}>Home</li>
        
        {/* Clicking View Complaints switches the display to the list */}
        <li onClick={() => setview("view")}>View Complaints</li>
        
        <li><button className="nav-btn">Login</button></li>
        <li><button className="nav-btn">SignUp</button></li>
      </ul>
    </nav>
  );
}