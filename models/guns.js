const mongoose = require("mongoose")
const gunsSchema = mongoose.Schema({
guns_type: String,
guns_name: String,
guns_cost: Number
})
module.exports = mongoose.model("guns", gunsSchema)