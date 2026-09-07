const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Mitti & Bean API is running.",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Mitti & Bean API running on http://localhost:${PORT}`);
});