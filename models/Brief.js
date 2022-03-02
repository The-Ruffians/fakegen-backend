const mongoose = require("mongoose");

const BriefSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Brief = mongoose.model("Brief", BriefSchema);
module.exports = Brief;