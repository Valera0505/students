const {Router} = require("express")
const render = require("../services/Render")
const studentController = require("../controllers/student-controller")
const router = Router()
router.get("/students", render.studentsPage)
router.post("/students", render.searchStudents)
router.delete("/api/students/:id", studentController.delete)
router.get("/api/students", studentController.getStudents)
router.post("/api/students", studentController.create)
router.put("/api/students/:id", studentController.update)

module.exports = router