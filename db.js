const mongoose=require("mongoose");
require("dotenv").config();
const connection=mongoose.connect("mongodb+srv://mogodbsachin1234:sachinmogodb1234@cluster0.twvkfvm.mongodb.net/masaihospital")

module.exports={
    connection
}