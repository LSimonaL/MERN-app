const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database/connection");
const passport = require("passport");
const users = require("./api/routes/userRoutes");
const posts = require("./api/routes/postRoutes");
const path = require("path");

var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(express.static(path.join(__dirname, "client/build")));


//connection database
connectDB();

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my app." });
});



// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});