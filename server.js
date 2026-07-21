const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());
app.use("/students", require("./routes/student"));
app.use("/courses", require("./routes/course"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});