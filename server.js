require('dotenv').config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profiles");
const qualificationRoutes = require("./routes/qualifications");
const jobRequestRoutes = require("./routes/jobRequests");

const app = express();

//Middleware bodyparser
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/job-requests", jobRequestRoutes);

app.use((req,res)=>{
  res.send("API is running...")
})

//Connect our DB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
