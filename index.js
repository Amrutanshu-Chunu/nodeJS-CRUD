const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology : true, useNewUrlParser : true},
    ()=> console.log("DB Connected")
);
//import routes
const productRouts = require("./routes/product");
//middleware
app.use(express.json());
//cors
app.use(cors());
//Route middleware
app.use("/api/products",productRouts);


app.listen(8908,()=> console.log(" Hello chunu Express start Running with https://localhost:8908"));