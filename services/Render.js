const axios = require("axios")
const Student = require("../models/student.model")
class Render{
    async studentsPage(req, res){
        try{
            const studentsData = await axios.get("http://localhost:8080/api/students")
            const students = studentsData.data
            res.render("index.ejs", {students})
        }
        catch (error){

        }
    }
    async searchStudents(req, res){
        try{

            const {searchby, searchInput} = req.body
            const obj = {}
            if (Number.isNaN(parseInt(searchInput, 10))) {
                obj[searchby] = searchInput;
            } else {
                obj[searchby] = parseInt(searchInput, 10);
            }
            let students
            if(searchInput.trim()===""){
                students=await Student.find()
            }
            else {
                students=await Student.find(obj)
            }

            res.render("index.ejs", {students})
        }
        catch (error){

        }
    }

}
module.exports = new Render()