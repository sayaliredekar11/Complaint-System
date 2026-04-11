import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import ComplaintForm from "./complaintForm";
import ComplaintList from "./complaintList";
import "./App.css";
function App() {
  const [complaints, setComplaints] = useState(() =>{
    const savedComplaints = localStorage.getItem("complaintsData");
    return savedComplaints ? JSON.parse(savedComplaints) : [];
  });
//   const [complaints, setComplaints] = useState(() => {
//   try {
//     const savedComplaints = localStorage.getItem("complaintsData");
//     // Only parse if savedComplaints actually exists and isn't empty
//     if (savedComplaints) {
//       return JSON.parse(savedComplaints);
//     }
//   } catch (error) {
//     console.error("Error loading complaints from localStorage:", error);
//   }
//   return []; // Default to empty list if anything goes wrong
// });
  const [view, setView] = useState("form");
  useEffect(() => {
    localStorage.setItem("complaintsData", JSON.stringify(complaints));
  }, [complaints]);
  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((c)=> c.id !== id))
  }
  const addComplaint = (newComplaint) => {
    
    setComplaints([...complaints, { ...newComplaint, status: "pending" }]);
    setView("view"); 
  };

  return (
    <>
      <Navbar setview={setView} />
      <div className="container">
        {view === "form" && <ComplaintForm addComplaint={addComplaint} />}
        {view === "view" && <ComplaintList complaints={complaints} deleteComplaint={deleteComplaint}/>}
      </div>
    </>
  );
}

export default App;