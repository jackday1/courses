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

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server is running on port ${port}`));
