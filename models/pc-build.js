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
        ref: "Component"
    }]
     , totalPrice: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

const PcBuild = mongoose.model("PcBuild", pcBuildSchema);
module.exports = PcBuild;
