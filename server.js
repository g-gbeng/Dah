const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const gameRoutes = require("./routes/gameRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


/* =========================================
   MIDDLEWARE
========================================= */

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/games", gameRoutes);


/* =========================================
   MONGODB CONNECTION
========================================= */

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {

        console.log("MongoDB connected successfully");

    })
    .catch((error) => {

        console.error("MongoDB connection failed:");
        console.error(error.message);

    });


/* =========================================
   HOME ROUTE
========================================= */

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});


/* =========================================
   START SERVER
========================================= */

app.listen(PORT, () => {

    console.log(
        `Dah! is running on http://localhost:${PORT}`
    );

});