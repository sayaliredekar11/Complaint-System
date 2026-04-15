import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import ComplaintForm from "./complaintForm";
import ComplaintList from "./complaintList";
import "./App.css";
function App() {
  const API_BASE = "http://127.0.0.1:5000/api/complaints";
  const [complaints, setComplaints] = useState([]);
  const [view, setView] = useState("form");
  const fetchComplaints = async (filter = "") => {
    // If filter is "pending", URL becomes .../api/complaints/pending
    // If filter is empty, you might want a route for "all"
    const url = filter ? `${API_BASE}/${filter}` : API_BASE;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        setComplaints(data);
    } catch (err) {
        console.error("Failed to fetch:", err);
    }
};

// Use this to load data when the app starts
useEffect(() => {
    fetchComplaints(); // Loads all complaints initially
}, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/complaints")
  //     .then(res => res.json())
  //     .then(data =>{
  //       console.log("Data from Databse:",data);
  //        setComplaints(data)});
  // }, []);
 const deleteComplaint = async (id) => {
    const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        // Remove it from the UI state so it disappears instantly
        setComplaints((prev) => prev.filter(c => c._id !== id));
    }
};
  const addComplaint = async (formData) => {
    const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (res.ok) {
        const newDoc = await res.json();
        setComplaints((prev) => [newDoc, ...prev]); // Add new complaint to top of list
        setView("view"); // Switch to list view
    }
};
  return (
    <>
      <Navbar setview={setView} showPending={() => fetchComplaints('pending')} 
  showResolved={() => fetchComplaints('resolved')} />
      <div className="container">
        {view === "form" && <ComplaintForm addComplaint={addComplaint} />}
        {view === "view" && <ComplaintList complaints={complaints} deleteComplaint={deleteComplaint}/>}
      </div>
    </>
  );
}

export default App;