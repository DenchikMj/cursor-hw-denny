const inputNumberFn1 = document.getElementById('input-number-fn1');
const btnFunction1 = document.getElementById('btn-function1');
const resultFunction1 = document.getElementById('function1-result');
const inputNumberFn2 = document.getElementById('input-number-fn2');
const inputDegreeFn2 = document.getElementById('input-degree-fn2');
const btnFunction2 = document.getElementById('btn-function2');
const resultFunction2 = document.getElementById('function2-result');
const inputFn3 = document.getElementById('input-fn3');
const btnFunction3 = document.getElementById('btn-function3');
const resultFunction3 = document.getElementById('function3-result');
const inputNumberFn4 = document.getElementById('input-number-fn4');
const btnFunction4 = document.getElementById('btn-function4');
const resultFunction4 = document.getElementById('function4-result');
const inputNumberFn5 = document.getElementById('input-number-fn5');
const input2NumberFn5 = document.getElementById('input2-degree-fn5');
const btnFunction5 = document.getElementById('btn-function5');
const resultFunction5 = document.getElementById('function5-result');
const inputStrFn6 = document.getElementById('input-str-fn6');
const inputItemFn6 = document.getElementById('input-item-fn6');
const btnFunction6 = document.getElementById('btn-function6');
const resultFunction6 = document.getElementById('function6-result');
const inputStrFn7 = document.getElementById('input-str-fn7');
const btnFunction7 = document.getElementById('btn-function7');
const resultFunction7 = document.getElementById('function7-result');
const inputNumberFn8 = document.getElementById('input-number-fn8');
const btnFunction8 = document.getElementById('btn-function8');
const resultFunction8 = document.getElementById('function8-result');
const inputStrFn9 = document.getElementById('input-str-fn9');
const inputItemFn9 = document.getElementById('input-item-fn9');
const btnFunction9 = document.getElementById('btn-function9');
const resultFunction9 = document.getElementById('function9-result');
const inputStrFn10 = document.getElementById('input-str-fn10');
const btnFunction10 = document.getElementById('btn-function10');
const resultFunction10 = document.getElementById('function10-result');
const inputStrFn11 = document.getElementById('input-str-fn11');
const btnFunction11 = document.getElementById('btn-function11');
const resultFunction11 = document.getElementById('function11-result');



let sumNumber;

//Функция проверки на число
function checkNumber(aFirsN) {
    if (isNaN(parseInt(aFirsN))) {
        console.log(`first-number: ${aFirsN}`);
        alert("Веденые данные не соответсвуют числовому значению, введите правильно значения!")
        return false;
    }
    return true;
}

//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
const getMaxDigit = (number) => Math.max(...String(number));

//2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
const getDegreeNumber = (aNumber, aDegree) => {
    let resDegree = aNumber;
    if (aDegree > 1) {
        for (i = 0; i < aDegree - 1; i++) {
            resDegree = resDegree * aNumber;
        }
    }
    return resDegree;
}

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
const getFormatName = (aName) => {
    let fName = String(aName).toLowerCase();
    return fName[0].toUpperCase() + fName.slice(1);
}

//4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
const getClearZP = (aZP, aPDV = 18, aMilitaryZ = 1.5) => {
    return aZP - (aZP * ((aPDV / 100) + (aMilitaryZ / 100)));
}

//5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomValue(aFirs, aSecond) {
    //let rand = aFirs + Math.random() * (aSecond + 1 - aFirs);
    return Math.floor(aFirs + Math.random() * (aSecond + 1 - aFirs));
}

//6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
const countLetter = (aItem, aString) => {
    const strAnaliz = String(aString).toLocaleLowerCase();
    const item = String(aItem).toLocaleLowerCase();
    let count = 0;

    for (i = 0; i < strAnaliz.length; i++) {
        if (strAnaliz[i] === item[0]) {
            count++;
        }
    }
    return count;
}

//7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
const exchengeVal = (aStrVal, aCurs = 25) => {
    const str = String(aStrVal).toLowerCase();
    if (str.indexOf('$') !== -1) {
        return String(str.slice(0, str.indexOf('$')) * aCurs) + ' грн.';
    } else
        if (str.indexOf('uah') !== -1) {
            return String(str.slice(0, str.indexOf('uah')) / aCurs) + ' $';
        }

    alert('Введенные данные не соответсвуют условию функции, введите корректные данные для конвертации');
    return '';

}

//8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
const getRandomPassword = (aCountPassword = 8) => {
    let password = '';
    for (let i = 0; i < aCountPassword; i++) {
        password += String(getRandomValue(0, 9));
    }
    return password;
}

//9. Створіть функцію, яка видаляє всі букви з речення.
const deleteLetters = (aItem, aString) => {
    const strAnaliz = String(aString).toLocaleLowerCase();
    const item = String(aItem).toLocaleLowerCase();
    let resulString = '';

    for (i = 0; i < strAnaliz.length; i++) {
        if (strAnaliz[i] !== item[0]) {
            resulString += strAnaliz[i];
        }
    }
    return resulString;
}

//10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
const isPalyndrom = (aString) => {
    let strOrigin = '';
    let strPalyndrom = '';

    for (let i = 0; i < aString.length; i++) {
        if (aString[i] !== ' ') {
            strOrigin += aString[i];
        }
    }

    for (let i = aString.length - 1; i >= 0; i--) {
        if (aString[i] !== ' ') {
            strPalyndrom += aString[i];
        }
    }
    return strPalyndrom.toLowerCase() === strOrigin.toLowerCase() ? true : false;
}

//11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
const deleteDuplicateLetter = (aString) => {
    const strAnaliz = String(aString).toLowerCase();
    let resLetter = '';
    let letterInString = '';

    for (let i = 0; i < strAnaliz.length; i++) {
        let strLast = strAnaliz.slice(i + 1);
        if ((strLast.indexOf(strAnaliz[i]) === -1) && letterInString.indexOf(strAnaliz[i]) === -1) {
            resLetter += strAnaliz[i];
        }
        else {
            letterInString += strAnaliz[i];
        }
    }
    return resLetter;
}


btnFunction1.addEventListener('click', function () {
    const res = getMaxDigit(parseInt(inputNumberFn1.value));
    console.log(res);
    resultFunction1.innerHTML = `Максимальное число: ${res}`;
});
btnFunction2.addEventListener('click', function () {
    const res = getDegreeNumber(parseInt(inputNumberFn2.value), parseInt(inputDegreeFn2.value));
    console.log(res);
    resultFunction2.innerHTML = `Число ${inputNumberFn2.value} в степени ${inputDegreeFn2.value} = ${res}`;
});
btnFunction3.addEventListener('click', function () {
    const res = getFormatName(inputFn3.value);
    console.log(res);
    resultFunction3.innerHTML = `Имя после трансформации: ${res}`;
});
btnFunction4.addEventListener('click', function () {
    const res = getClearZP(parseInt(inputNumberFn4.value));
    console.log(res);
    resultFunction4.innerHTML = `Чистая ЗП составила: ${res}`;
});
btnFunction5.addEventListener('click', function () {
    const res = getRandomValue(parseInt(inputNumberFn5.value), parseInt(input2NumberFn5.value));
    console.log(res);
    resultFunction5.innerHTML = `Рандомное число в диапазоне с ${inputNumberFn5.value} по ${input2NumberFn5.value} = ${res}`;
});
btnFunction6.addEventListener('click', function () {
    const res = countLetter(inputItemFn6.value, inputStrFn6.value);
    console.log(res);
    resultFunction6.innerHTML = `Буква '${inputItemFn6.value}' в строке '${inputStrFn6.value}' встречается: ${res} раз(а)`;
});
btnFunction7.addEventListener('click', function () {
    const res = exchengeVal(inputStrFn7.value);
    console.log(res);
    resultFunction7.innerHTML = `Результат: ${res}`;
});
btnFunction8.addEventListener('click', function () {
    let res = 0;
    if (isNaN(parseInt(inputNumberFn8.value))) {
        res = getRandomPassword();
    }
    else {
        res = getRandomPassword(inputNumberFn8.value);
    }
    console.log(res);
    resultFunction8.innerHTML = `Ваш пароль: ${res}`;
});
btnFunction9.addEventListener('click', function () {
    const res = deleteLetters(inputItemFn9.value, inputStrFn9.value);
    console.log(res);
    resultFunction9.innerHTML = `Получившаяся строка: ${res}`;
});
btnFunction10.addEventListener('click', function () {
    const res = isPalyndrom(inputStrFn10.value);
    console.log(res);
    resultFunction10.innerHTML = `Результат: ${res}`;
});
btnFunction11.addEventListener('click', function () {
    const res = deleteDuplicateLetter(inputStrFn11.value);
    console.log(res);
    resultFunction11.innerHTML = `Результат: ${res}`;
});





//console.log(getMaxDigit(32612));
//console.log(getDegreeNumber(3, 3));
//console.log(getFormatName('дениска'));
//console.log(getFormatName('дЕНиС'));
//console.log(getMaxDigit2([1, 4, 6, 8, 44]));
//console.log(getRandomValue(0, 7));
//console.log(getRandomValue(6, 7));
//console.log(exchengeVal('2500$'));
//console.log(getRandomPassword());
//console.log(deleteLetters("а", "Крокадил Аллегатор"));
//console.log(isPalyndrom('Я несу гусеня'));
//console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));



