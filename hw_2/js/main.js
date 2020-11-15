const firstNumInput = document.getElementById("first-number");
const secondNumInput = document.getElementById("second-number");
const boolPairedCheckB = document.getElementById("fl-paired");
const btnResultSum = document.querySelector("#get-result-btn");
const resultSum = document.querySelector("#result-sum");

let sumNumber;

//Контроль на ввод чисел производится в поле ввода по типу, но для ДЗ добавил
//проверку на отсутсвия NaN
function checkNumber(aFirsN, aSecondN) {
    if (!isNaN(aFirsN) && !isNaN(aSecondN)) {
        if (aSecondN <= aFirsN) {
            alert("Первое число меньше или равно второму, подсчет не возможен, введите правильно значения!")
            return false;
        }

    } else {
        console.log(`first-number: ${aFirsN}`);
        console.log(`second-number: ${aSecondN}`);
        alert("Веденые данные не соответсвуют числовому значению, введите правильно значения!")
        return false;
    }
    return true;
}

function getSumNumber(aFirsN, aSecondN, flPaired) {
    let sum = 0;
    for (i = aFirsN; i <= aSecondN; i++) {
        if ((flPaired) || ((i % 2) !== 0)) {
            sum += i;
        }
    }
    return sum;
}

btnResultSum.addEventListener('click', function () {
    if (checkNumber(parseInt(firstNumInput.value), parseInt(secondNumInput.value))) {
        sumNumber = getSumNumber(parseInt(firstNumInput.value), parseInt(secondNumInput.value), boolPairedCheckB.checked);
        resultSum.innerHTML = `Сумма чисел = ${sumNumber}`;
        console.log(`Сумма чисел = ${sumNumber}`);
    }
});
