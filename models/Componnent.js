const mongoose = require("mongoose");

const componnentSchema = new mongoose.Schema({
 componnentname : {
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
image: {
    type: String,
    default: ""
}
}, { timestamps: true });

const Componnent = mongoose.model("Componnent", componnentSchema);





module.exports = Componnent;
