const Complaint = require('../models/listing'); // Adjust path as needed

// 1. Create a new complaint
exports.createComplaint = async (req, res) => {
    try {
        const newComplaint = new Complaint(req.body);
        const saved = await newComplaint.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// 2. Get Pending complaints
exports.getPendingComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find({ status: "pending" });
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. Get Non-Pending (Resolved) complaints
exports.getResolvedComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find({ status: { $ne: "pending" } });
        res.json(complaints);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. Delete a complaint
exports.deleteComplaint = async (req, res) => {
    try {
        await Complaint.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};