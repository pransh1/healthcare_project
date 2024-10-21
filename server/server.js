const express = require("express");
const connectDB = require("./config/dbConnections");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.get('/', (req,res) => {
  res.send("working");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})