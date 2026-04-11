export default function ComplaintCard({ complaintData, deleteComplaint }) {
   
  return (
    <div className="card">
      <h3>{complaintData.complaint}</h3>
      <p>Type: {complaintData.type}</p>
      <p>{complaintData.description}</p>
      <p>Date: {complaintData.date}</p>
      <div className={`status-badge ${complaintData.status}`}>
        Status: {complaintData.status}
      </div><br></br>
      <button onClick={() => deleteComplaint(complaintData.id)}>Delete Complaint</button> 
    </div>
  );
}