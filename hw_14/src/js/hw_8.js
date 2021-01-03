export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismiss = false;
        this.flBudjet = false;
    }

    getInfo() { return `Студент ${this.course} курса ${this.university}, ${this.fullName}`; }
}