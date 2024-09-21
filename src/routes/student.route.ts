import express from "express"
import * as studentController from "../controllers/student.controller"

const router = express.Router()

router.put("/:studentId/courses", studentController.addCourse)
router.delete("/:studentId/courses/:courseId", studentController.deleteCourse)
router.get("/getAverage", studentController.getAverage)


export default router;