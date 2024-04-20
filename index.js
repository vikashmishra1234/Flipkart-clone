const express = require("express");
const routes = require("./routes/route.js");
const cookieParser = require('cookie-parser')
const cors = require('cors');
const authenticateUser = require('./verifytoken.js');


const mongoose = require("mongoose");


const path = require("path");

const app = express();

const Port = 5000;

app.use(cors());
app.use(cookieParser());
app.use(authenticateUser);

// app.use(cors({
//     origin:["http://localhost:5173"],
//     methods:["POST","GET","PUT"],
//     credentials:true
// }));
app.use(express.json());

app.use(
  "/images",
  express.static(path.join(__dirname, "../insta-frontend/src/images"))
);
app.use(express.static(path.join(__dirname,'public')))
app.use(
  "/profiles",
  express.static(path.join(__dirname, "../insta-frontend/src/userProfiles"))
);
app.use("/api", routes);

const Connection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vikashmishra:xclZU6qRRZVJAMdT@cluster0.y2r2pc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connected to databasse");
    })
    .catch((err) => console.log(err.message));
};
Connection();

app.listen(Port, () => {
  console.log(`Server is Running on port http://localhost:${Port}`);
});
