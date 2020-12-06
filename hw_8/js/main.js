const arrayStudents = [];
let selectStudent;
let checkStudentBudjet;

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.dismiss = false;
        this.flBudjet = false;
    }

    getInfo() { this.dismiss ? null : `Студент ${this.course} курса ${this.university}, ${this.fullName}`; }

    getAverageMark() {
        if (this.dismiss) return null;
        return this.marks.length === 0 ? 0 : +(this.marks.reduce((sumMarks, mark) => sumMarks += mark) / this.marks.length).toFixed(2);
    }

    setDismiss() {
        return this.dismiss = true;
    }

    setRecover() {
        return this.dismiss = false;
    }

    get getMarks() {
        if (this.dismiss) return null;

        if (this.marks.length === 0) {
            return `У ${this.fullName} еще нет оценок.`;
        }
        return this.marks;
    }

    set setMarks(aMark) {
        if (this.dismiss) return null;

        if (Number.isInteger(aMark)) {
            return this.marks.push(aMark);
        }
        return `Не корректно указана оценка.`;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.paymentOfMoney = 4;
        this.intervalScholarship = this.startScholarship();
        this.workInterval = true
        this.sumStependyy = 1400;
        this.flBudjet = true;
    }

    checkPayment() { this.dismiss ? null : this.getAverageMark() >= this.paymentOfMoney; }

    get getScholarship() {
        if (this.dismiss) return null;
        let textMsg;
        if (this.checkPayment()) {
            textMsg = `Вы получили ${this.sumStependyy} грн. стипендии!`;
        } else {
            textMsg = `Вы не получили стипендию так как ваша сденяя оценка ${this.getAverageMark()} ниже ${this.paymentOfMoney}-х`;
        }

        console.log(textMsg);
        return textMsg;
    }
    stopScholarship() {
        clearInterval(this.intervalScholarship);
        this.workInterval = false;
        return false;
    }
    startScholarship() {
        this.workInterval = true;
        return setInterval(() => this.getScholarship, 30000);
    }
}

function getStringInformationStudentHTML(aStudet) {
    let stringStudetn = `university:  ${aStudet.university} \n`;
    stringStudetn += `course: ${aStudet.course} \n`;
    stringStudetn += `fullName: ${aStudet.fullName} \n`;
    stringStudetn += `marks: ${aStudet.getMarks} \n`;
    stringStudetn += `Средний бал: ${aStudet.getAverageMark()} \n`;
    stringStudetn += `dismiss: ${aStudet.dismiss} \n`;
    if (checkStudentBudjet) {
        stringStudetn += `Студент учится на бюджете \n`;
        stringStudetn += `paymentOfMoney: ${aStudet.paymentOfMoney} \n`;
        stringStudetn += `sumStependyy: ${aStudet.sumStependyy} \n`;
        stringStudetn += `workInterval: ${aStudet.workInterval} \n`;
    }
    return stringStudetn;
}

function addOption(selectbox, text, value) {
    let optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
    selectbox.value = value;
}

function reReadOnChengeStupent(aStudents) {
    selectStudent = aStudents;
    checkStudentBudjet = aStudents.flBudjet;
    let res = getStringInformationStudentHTML(selectStudent);
    console.log(res);
    resultFunction[0].innerHTML = res;
}

function mySelectOption() {
    reReadOnChengeStupent(arrayStudents[dropdown.selectedIndex]);
    //console.log(`selectedOption ${selectedOption}`);
}


