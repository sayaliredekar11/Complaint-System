import "./App.css";

export default function Navbar({ setview }) {
  return (
    <nav className="navbar">
      <div className="logo">HostelCare</div>
      <ul>
       
        <li onClick={() => setview("form")}>Home</li>
        
       
        <li onClick={() => setview("view")}>View Complaints</li>
        
        <li><button className="nav-btn">Login</button></li>
        <li><button className="nav-btn">SignUp</button></li>
      </ul>
    </nav>
  );
}