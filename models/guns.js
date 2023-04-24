const mongoose = require("mongoose")
const gunsSchema = mongoose.Schema({
guns_type: {type: String, minlength:5, maxlenght:30},
guns_name: {type: String, minlength:5, maxlenght:30},
guns_cost: {type: Number, minlength:100, maxlenght:2000}
})
module.exports = mongoose.model("guns", gunsSchema)