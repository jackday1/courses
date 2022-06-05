const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/index");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/api", routes);

app.listen(8888, () => console.log("Server is running on port 8888"));