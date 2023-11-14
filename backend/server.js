// load .env data into process.env
// require("dotenv").config();
//const tasksQueries = require("./db/queries/tasks");
// Web server config
// const sassMiddleware = require("./lib/sass-middleware");
const cookieSession = require("cookie-session");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));
// The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

//const taskRoutes = require("./routes/taskRoutes");


// /api/items endpoint
//app.use("/api/tasks", taskRoutes);

// /api/users endpoint
//app.use("/users", userRoutes);



app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});