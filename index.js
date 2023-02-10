const express = require("express");
const userRouter = require("./routes/userRoutes");
const sectorRouter = require("./routes/sectorRoutes");
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("HTTP method - " + req.method + " , URL - " + req.url);
    next();
})

mongoose.connect("mongodb+srv://admin:admin@cluster0.8debgtw.mongodb.net/test?retryWrites=true&w=majority").then(() => {
    app.listen(5000, () => {
        console.log('Server started on port 5000')
    })
}).catch((error) => {
    console.log(error)
})
app.use("/auth", userRouter);
app.use("/sectors", sectorRouter);

