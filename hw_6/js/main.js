const preview = document.getElementById('preview');
const btnFunction = document.querySelectorAll(".btn-function");
const resultFunction = document.querySelectorAll(".function-result");

const inputStrFn6 = document.getElementById('input-str-fn6');



const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів 
//для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
const getSubjects = (aStudents) => {
    const subjectsForStudent = Object.keys(aStudents?.subjects);
    return subjectsForStudent.map((subject) => subject[0].toUpperCase() + subject.slice(1).toLowerCase().replace('_', ' '));
}

//2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента 
//НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
const getAverageMark = (aStudents) => {
    const arraySubjects = Object.values(aStudents?.subjects).flat(Infinity);
    return (arraySubjects.reduce((average, subj) => average += subj, 0) / arraySubjects.length).toFixed(2);
}

//3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію 
//загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
//ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
const getStudentInfo = (aStudents) => {
    return {
        course: aStudents?.course,
        name: aStudents?.name,
        averageMark: getAverageMark(aStudents)
    }
}

//4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.
const getStudentsNames = (aStudents) => aStudents.map((studentName) => studentName?.name).sort();

//5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (aStudents) => {
    let maxAverage = 0;
    return aStudents.reduce((bestStudent, student) => {
        const average = getAverageMark(student);
        if (maxAverage < average) {
            maxAverage = average;
            return bestStudent = student?.name;
        } else if (maxAverage === average) {
            return bestStudent += ' та ' + student?.name;
        }
        return bestStudent;
    }, '');
}

//6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = (aString) => {
    const resObject = {};

    for (let i = 0; i < aString.length; i++) {
        if (i !== 0 && typeof resObject[aString[i]] !== "undefined") {
            resObject[aString[i]] = resObject[aString[i]] + 1;
        }
        else {
            resObject[aString[i]] = 1;
        }
    }

    return resObject;
}

// Функция 1
btnFunction[0].addEventListener('click', function () {
    let res = 'Список придметов студентов: \n';
    for (let i = 0; i < students.length; i++) {
        res += `${students[i]?.name} 
               ${getSubjects(students[i])} \n `
    }

    console.log(res);
    resultFunction[0].innerHTML = res;
});

// Функция 2
btnFunction[1].addEventListener('click', function () {
    let res = 'Средняя оценка: \n';
    for (let i = 0; i < students.length; i++) {
        res += `${students[i]?.name}: ${getAverageMark(students[i])} \n `
    }

    console.log(res);
    resultFunction[1].innerHTML = res;
});

// Функция 3
btnFunction[2].addEventListener('click', function () {
    let res = 'Информация по студентам: \n';
    for (let i = 0; i < students.length; i++) {
        const obj = getStudentInfo(students[i]);
        res += `name: ${obj?.name}  
              course: ${obj?.course}  
         averageMark: ${obj?.averageMark} \n `
    }
    console.log(res);
    resultFunction[2].innerHTML = res;
});

// Функция 4
btnFunction[3].addEventListener('click', function () {
    let res = `Имя студентов в алфавитном порядке: \n ${getStudentsNames(students)}`;

    console.log(res);
    resultFunction[3].innerHTML = res;
});

// Функция 5
btnFunction[4].addEventListener('click', function () {
    let res = `Лучший студент: ${getBestStudent(students)}`;

    console.log(res);
    resultFunction[4].innerHTML = res;
});

// Функция 6
btnFunction[5].addEventListener('click', function () {
    const res = Object.entries(calculateWordLetters(String(inputStrFn6.value)));
    resultFunction[5].innerHTML = res
    console.log(calculateWordLetters(String(inputStrFn6.value)));
    console.log(res);
});

