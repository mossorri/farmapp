require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const recordRoute = require("./routes/recordsRoutes");
// const errorMiddleware = require("./middleware/errorMiddleware");
var cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




let CorsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};

app.use(cors(CorsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// App Routes
app.use("/api/records",recordRoute)
// app.use(errorMiddleware);

app.get("/", (request, response) => {
  response.send("App is running fine");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
