import { roundSum } from "../src/js/hw_1";
import { getSumNumber } from "../src/js/hw_2";
import { getFormatName } from "../src/js/hw_3";
import { getPairUp } from "../src/js/hw_4";
import { getAverage } from "../src/js/hw_5";
import { getStudentInfo } from "../src/js/hw_6";
import { getMyTaxes } from "../src/js/hw_7";
import { Student } from "../src/js/hw_8";
import { generateBlocksInterval } from "../src/js/hw_9";
import "../src/css/hw_9.css";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const students2 = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}];
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };



//hw #1
console.log(roundSum(256, 100));

//hw #2
console.log(getSumNumber(5, 10, true));

//hw #3
console.log(getFormatName("deNys"));

//hw #4
console.log(getPairUp(students));

//hw #5
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 55, 2, 56, 3, 2, 55));

//hw #6
console.log(getStudentInfo(students2[0]));

//hw #7
console.log(getMyTaxes.call(ukraine, 60000));

//hw #8
const nStudent = new Student('КПІ, Київ', 3, 'Іванов І.А.');
console.log(nStudent);
console.log(nStudent.getInfo());

//hw #9
generateBlocksInterval();
