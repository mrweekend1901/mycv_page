// server.js
const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes/index");
const db = require("./config/db/index");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Cấu hình CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // Cho phép truy cập từ domain của Angular
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Cho phép các phương thức HTTP
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Cho phép các tiêu đề yêu cầu
  next();
});

// Connect to DB
db.connect();

// Routes init
route(app);

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
