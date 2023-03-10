const {Schema, model} = require("mongoose")
const studentSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    group: {type: String, required: true},
    addmitedYear: {type: Number, required: true}
})
module.exports = model("Student", studentSchema)