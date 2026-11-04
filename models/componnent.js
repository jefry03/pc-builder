const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
 componentname : {
    type: String,
    required: true,
 }
 , 
 category : {
    type: String,
    required: true,
 }
 , 
 brand : {
    type: String,
    required: true,
} , 
price : {
    type: Number,
    required: true,
    min: 0
} ,
}, { timestamps: true });

const Component = mongoose.model("Component", componentSchema);





module.exports = Component;
