const {Schema, default: mongoose} = require("mongoose");
mongoose.connect("mongodb+srv://hemkanta04:.Gy7mAUdQPjz-r-@cluster0.5mji6.mongodb.net/coursera-app")
const userSchema = new Schema({
    email: { type: String, unique: true},
    password:String,
    firstName:String,
    lastName: String,

});

const adminSchema = new Schema({
    email: { type: String, unique: true},
    password:String,
    firstName:String,
    lastName: String,

});

const courseSchema= new Schema({
    title: String,
    description:String,
    price: Number,
    imageUrl: String,
    creatorId: Object

});

const purchaseSchema = new Schema({
    userId: Object,
    couserId: Object

});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel= mongoose.model("purchase", purchaseSchema);

module.exports= {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}