import express, { NextFunction, Request, Response } from "express"
import studentRoutes from './routes/student.route'

const app = express()

app.use(express.json())

app.use("/students", studentRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ status: "error", message: err.message })
})

app.listen(3000, () => console.log("Server listening on port 3000"))