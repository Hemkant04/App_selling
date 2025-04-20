const express = require("express");
const mongoose = require("mongoose");

const {userRouter} = require("./user");
const {courseRouter} = require("./course");
const {adminRouter} = require("./admin");
const app = express();
app.use(express.json());


app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


async function main() {
    await mongoose.connect("mongodb+srv://hemkanta04:.Gy7mAUdQPjz-r-@cluster0.5mji6.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listeningto port 3000")
}

main()
