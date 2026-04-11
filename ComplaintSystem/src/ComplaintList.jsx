import ComplaintCard from "./ComplaintCard";

export default function ComplaintList({ complaints, deleteComplaint }) {
  return (
    <div>
      <h2>All Complaints</h2>
      {complaints.length === 0 ? (
        <p>No complaints filed yet.</p>
      ) : (
        <div className="list-container">
          {complaints.map((c) => (
            <ComplaintCard key={c.id} complaintData={c} deleteComplaint={deleteComplaint}/>
          ))}
        </div>
      )}
    </div>
  );
}