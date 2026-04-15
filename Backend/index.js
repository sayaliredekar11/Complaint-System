const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const complaintController = require('./controllers/controllers');
const app = express();
app.use(cors());
app.use(express.json());
const MONGO_URL ="mongodb+srv://sayaliredekar11_db_user:Amey%402008@cluster0.afqtkhr.mongodb.net/?appName=Cluster0";

const Complaint = require("./models/listing.js");

main().then(() =>{
    console.log("connected to DB");
})
.catch((err)=>{
   console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}
app.post('/api/complaints', complaintController.createComplaint);

// Get filtered
app.get('/api/complaints/pending', complaintController.getPendingComplaints);
app.get('/api/complaints/resolved', complaintController.getResolvedComplaints);

// Delete
app.delete('/api/complaints/:id', complaintController.deleteComplaint);
// //to get all the complaints
// app.get('/api/complaints',async (req,res)=>{
//     const complaints = await Complaint.find();
//     res.json(complaints);
// });
// //post new complaint
// app.post('/api/complaints',async (req,res) =>{
//     const newComplaint = new Complaint(req.body);
//     await newComplaint.save();
//     res.json(newComplaint);
// });
// //Delete a Complaint
// app.delete('/api/complaints/:id',async (req,res)=>{
//     await Complaint.findByIdAndDelete(req.params.id);
//     res.json({message:"Deleted"});
// });
app.listen(5000,()=>{
    console.log("server lsitening on port 8080");
});


