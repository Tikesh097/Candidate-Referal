const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["https://candidatereferal.netlify.app/"],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded resumes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const candidateRoutes = require("./routes/candidate.routes");
app.use("/candidates", candidateRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL || "mongodb+srv://aswaletinku:6KrUsx4ZtUQWlSqF@cluster0.bmyh9.mongodb.net/CandidateReferal_Data")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
