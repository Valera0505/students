const Student = require("../models/student.model")

class StudentController {
    async create(req, res) {
        try {
            const student = new Student({
                id: req.body.id,
                name: req.body.name,
                surname: req.body.surname,
                group: req.body.group,
                addmitedYear: req.body.addmitedYear
            })
            await student.save()
            res.send(student)
        } catch (error) {
        }
    }
    async delete(req,res){
        try{
            const result = await Student.deleteOne({id: req.params.id})
            console.log(result);
            res.send(result)
        }catch (error) {
        }
    }
    async update(req,res){
        try{
            const result = await Student.findOneAndUpdate({id:req.params.id}, req.body)
            console.log(result)
            res.send(result)
        }catch (error) {
        }
    }

    async getStudents(req, res) {
        try {
            const students = await Student.find()
            res.send(students)
        } catch (error) {
        }
    }
}
module.exports = new StudentController()