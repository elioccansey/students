import { Request, Response } from "express";
import { Student } from "../models/student";

export const addCourse = (req: Request, res: Response) => {
    res.status(200).json({ status: "success", data: Student.addCourse(Number(req.params.studentId), req.body) });
}

export const deleteCourse = (req: Request, res: Response) => {
    res.status(200).json({
        status: "success", data: Student.deleteCourse(Number(req.params.studentId), Number(req.params.courseId))
    })
}

export function getAverage(req: Request, res: Response) {
    res.status(200).json({
        status: "success", data: Student.getAverage(req.query)
    })
}
