const mongoose = require("mongoose");
const pcBuildSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    components: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Componnent"
    }]
     , totalPrice: {
        type: Number,
        min: 0
    }
}, { timestamps: true });

const PcBuild = mongoose.model("PcBuild", pcBuildSchema);
module.exports = PcBuild;
