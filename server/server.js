const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
require("dotenv").config();

const emailRoutes = require("./routes/emailRoutes");

const app = express();

// Security Headers
app.use(helmet());

// Rate Limiting (max 100 requests per 15 minutes per IP)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
});
app.use("/api/", limiter);

// CORS (Restrict to frontend URL if in production)
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? ["https://www.burnrs.site"] : "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/emails", emailRoutes);

// Health check
app.get("/", (req, res) => res.send("✅ Backend is running!"));

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
