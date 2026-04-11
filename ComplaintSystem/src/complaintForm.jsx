import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ComplaintForm({ addComplaint }) {
  
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    complaint: "",
    description: "",
    date: "",
    type: "",
    id: uuidv4(),
  });

  const handleInputChange = (event) => {
    setForm((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addComplaint(form); 
   
    setForm({ complaint: "", description: "", date: "", type: "", id: uuidv4() });
  };

  return (
    <div className="ComplaintForm">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="complaint">Complaint Title</label>
        <textarea id="complaint" name="complaint" value={form.complaint} onChange={handleInputChange} placeholder="Add a title" required />

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={form.description} onChange={handleInputChange} placeholder="Details..." required />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={form.date} onChange={handleInputChange} required min={today} />

        <label htmlFor="type">Type</label>
        <select name="type" value={form.type} onChange={handleInputChange} required>
          <option value="">Select Type</option>
          <option value="Electrical">Electrical</option>
          <option value="Water">Water</option>
          <option value="Cleaning">Cleaning</option>
        </select>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}
// new Date().toISOString(): This creates a string like 2026-04-11T14:30:00.000Z.

// .split("T")[0]: This cuts the string at the "T" and takes the first part, leaving you with exactly 2026-04-11.

// min={today}: This tells the browser that any date before "today" should be greyed out and unselectable in the calendar popup.