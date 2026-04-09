import { useState } from "react";
import Navbar from "./Navbar";
import ComplaintForm from "./complaintForm";
import ComplaintList from "./complaintList";
import "./App.css";
function App() {
  const [complaints, setComplaints] = useState([]);
  const [view, setView] = useState("form");

  const addComplaint = (newComplaint) => {
    
    setComplaints([...complaints, { ...newComplaint, status: "pending" }]);
    setView("view"); 
  };

  return (
    <>
      <Navbar setview={setView} />
      <div className="container">
        {view === "form" && <ComplaintForm addComplaint={addComplaint} />}
        {view === "view" && <ComplaintList complaints={complaints} />}
      </div>
    </>
  );
}

export default App;