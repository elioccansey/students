
import { testData } from "../tests/test.data"; // NO NEED FOR THIS ON EXAM
let students: Student[] = testData // NO NEED FOR THIS ON EXAM



// USE THIS ON EXAM  ==> let students: Student[] = [] 

interface Course { // You can call it grade, It's a bit confusing...
    course: number;
    grade: number;
}

export class Student {
    constructor(
        public id: number,
        public name: string,
        public major: string,
        public transcript: Course[]
    ) {
        this.id = id;
        this.name = name;
        this.major = major;
        this.transcript = transcript;
    }

    static addCourse(studentId: number, reqCourse: Course) {
        const student = students.find(student => student.id === studentId)
        if (!student) throw new Error(`No student with Id ${studentId}`)
        const courseIndex = student.transcript.findIndex(course => course.course === reqCourse.course)
        if (courseIndex < 0) student.transcript.push(reqCourse)
        else student.transcript[courseIndex] = reqCourse;
        return student
    }

    static deleteCourse(studentId: number, courseId: number) {
        const student = students.find(student => student.id === studentId)
        if (!student) throw new Error(`No student with Id ${studentId}`)
        const courseIndex = student.transcript.findIndex(course => course.course === courseId)
        if (!student.transcript.some(t => t.course === courseId))
            throw new Error(`No course with Id ${courseId}`)
        student.transcript = student.transcript.filter(t => t.course !== courseId)
        return student;
    }

    static getAverage({ course }: { course?: string }) {
        if (!course)
            return students.map(stu => (
                { name: stu.name, average: stu.transcript.reduce((acc, course, _, array) => acc + course.grade / array.length, 0) }
            ))
        const courseId = Number(course);
        const studentsWithGivenCourse = students.filter(stu => stu.transcript.some(t => t.course === courseId))
        if (studentsWithGivenCourse.length === 0) throw new Error(`No student take course with Id ${courseId}`)
        return studentsWithGivenCourse.map(stu => (
            { name: stu.name, average: stu.transcript.reduce((acc, course, _, array) => acc + course.grade / array.length, 0) }
        ))

    }
}