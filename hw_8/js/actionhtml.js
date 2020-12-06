const btnFunction = document.querySelectorAll(".btn-function");
const resultFunction = document.querySelectorAll(".function-result");

const inputNameFn1 = document.getElementById('input-name-fn1');
const inputUniversityFn1 = document.getElementById('input-university-fn1');
const inputCursFn1 = document.getElementById('input-curs-fn1');
const checkboxFn1 = document.getElementById('checkbox-fn1');

const dropdown = document.getElementById("select-student");
const inputMarkFn2 = document.getElementById('input-mark-fn2');



// Создание студента
btnFunction[0].addEventListener('click', function () {

    if (checkboxFn1.checked) {
        arrayStudents[arrayStudents.length] = new BudgetStudent(inputUniversityFn1.value, inputCursFn1.value, inputNameFn1.value);
    } else {
        arrayStudents[arrayStudents.length] = new Student(inputUniversityFn1.value, inputCursFn1.value, inputNameFn1.value);
    }

    addOption(dropdown, `Студент ${arrayStudents.length - 1}`, arrayStudents.length - 1);
    reReadOnChengeStupent(arrayStudents[arrayStudents.length - 1]);
});

// Добавление оценок
btnFunction[1].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        checkStudent.setMarks = parseInt(inputMarkFn2.value);
        let res = getStringInformationStudentHTML(checkStudent);
        console.log(res);
        resultFunction[0].innerHTML = res;
        resultFunction[1].innerHTML = `Студенту "${checkStudent.fullName}" добавили оцененку: ${inputMarkFn2.value}`;
    }
});

// Показать стипендию
btnFunction[2].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        if (checkboxFn1.checked) {
            resultFunction[1].innerHTML = checkStudent.getScholarship;
        } else {
            resultFunction[1].innerHTML = `Стдент не учится на бюджете`;
        }
    }
});

// Отключить студента
btnFunction[3].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        checkStudent.setDismiss();
        let res = getStringInformationStudentHTML(checkStudent);
        console.log(res);
        resultFunction[0].innerHTML = res;
        resultFunction[1].innerHTML = `Студенту включен`;
    }
});

// Включить студента
btnFunction[4].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        checkStudent.setRecover();
        let res = getStringInformationStudentHTML(checkStudent);
        console.log(res);
        resultFunction[0].innerHTML = res;
        resultFunction[1].innerHTML = `Студенту включен`;
    }
});
// Отключить таймер
btnFunction[5].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        if (checkboxFn1.checked) {
            checkStudent.stopScholarship();
            let res = getStringInformationStudentHTML(checkStudent);
            console.log(res);
            resultFunction[0].innerHTML = res;
            resultFunction[1].innerHTML = `Таймер отключен`;
        }
    }
});

// Включить таймер
btnFunction[6].addEventListener('click', function () {
    if (typeof checkStudent !== 'undefined') {
        if (checkboxFn1.checked) {
            checkStudent.startScholarship();
            let res = getStringInformationStudentHTML(checkStudent);
            console.log(res);
            resultFunction[0].innerHTML = res;
            resultFunction[1].innerHTML = `Таймер включен`;
        }
    }
});

dropdown.addEventListener("change", mySelectOption);


