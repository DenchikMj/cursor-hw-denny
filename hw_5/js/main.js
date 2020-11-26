const btnFunction = document.querySelectorAll(".btn-function");
const resultFunction = document.querySelectorAll(".function-result");

const inputLengthFn1 = document.getElementById('input-length-fn1');
const inputMinFn1 = document.getElementById('input-min-fn1');
const inputMaxFn1 = document.getElementById('input-max-fn1');
const inputNumbersFn2 = document.getElementById('input-numbers-fn2');
const inputNumbersFn3 = document.getElementById('input-numbers-fn3');
const inputNumbersFn4 = document.getElementById('input-numbers-fn4');
const inputNumbersFn5 = document.getElementById('input-numbers-fn5');
const inputNumbersFn6 = document.getElementById('input-numbers-fn6');
const inputNumbersFn7 = document.getElementById('input-numbers-fn7');
const inputStrFn8 = document.getElementById('input-str-fn8');
const inputStrFn9 = document.getElementById('input-str-fn9');
const inputStrFn10 = document.getElementById('input-str-fn10');



function getRandomValue(aFirs, aSecond) {
    return Math.floor(aFirs + Math.random() * (aSecond + 1 - aFirs));
}

//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри
const getRandomArray = (aLength, aMin, aMax) => {
    const randomArray = [];
    for (let i = 0; i < aLength; i++) {
        randomArray.push(getRandomValue(parseInt(aMin), parseInt(aMax)));
    }
    return randomArray;
}

//2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getModa = (...aNumbers) => {
    let moda = [];
    let countNumber = 0; let maxCount = 0;
    const sortNumbers = aNumbers.sort();
    let lastNumber = sortNumbers[0];
    sortNumbers.map((number, i) => {
        if (Number.isInteger(number)) {
            if (lastNumber === number) {
                countNumber++;
            } else {
                if (countNumber > maxCount) {
                    maxCount = countNumber;
                    moda = [];
                    moda.push(lastNumber);
                }
                else
                    if (countNumber === maxCount) {
                        moda.push(lastNumber);
                    }
                countNumber = 0;
                lastNumber = number;
            }
        }
    });
    return moda;
}

//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getAverage = (...aNumbers) => {
    const summNumber = aNumbers.reduce((summNumber, number) => {
        return Number.isInteger(number) ? summNumber += number : summNumber;
    }, 0);
    return (summNumber / aNumbers.length).toFixed(1);
}

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
const getMedian = (...aNumbers) => {
    let mediana;
    let sortNumbers = aNumbers.sort((n1, n2) => {
        return n1 - n2;
    });
    sortNumbers = sortNumbers.filter((number) => {
        return Number.isInteger(number);
    });
    //console.log(sortNumbers);

    if (sortNumbers.length % 2 === 0) {
        mediana = (sortNumbers[sortNumbers.length / 2 - 1] + sortNumbers[sortNumbers.length / 2]) / 2;
    }
    else {
        mediana = sortNumbers[parseInt(sortNumbers.length / 2)];
    }
    return mediana;
}

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
const filterEvenNumbers = (...aNumbers) => {
    return aNumbers.filter((number) => {
        return number % 2 !== 0;
    });
}

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumbers = (...aNumbers) => {
    return aNumbers.reduce((positiveNumbersCount, number) => {
        return number > 0 ? positiveNumbersCount + 1 : positiveNumbersCount;
    }, 0)
}

//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
const getDividedByFive = (...aNumbers) => {
    return aNumbers.filter((number) => {
        return number % 5 === 0;
    });
}

//8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
//При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") 
//Погані слова: shit та fuck.
const returnCountNubersOfSnowflake = (aCount) => {
    let Snowflake = '';
    for (let i = 0; i < aCount; i++) {
        Snowflake += '*';
    }
    return Snowflake;
}

const replaceBadWords = (aString, ...aDictionary) => {
    let wordsArrey = aString.split(' ');
    const newArrey = wordsArrey.map((word) => {
        let newWord = '';
        for (let i = 0; i < aDictionary.length; i++) {
            if (word.indexOf(aDictionary[i]) !== -1) {
                newWord = word.replace(aDictionary[i], returnCountNubersOfSnowflake(aDictionary[i].length));
                break;
            }
            else {
                newWord = word;
            }
        }
        return newWord;
    });
    return newArrey.join(" ");
}

//9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. 
//Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
const divideByThree = (aWord, aSvog = 3) => {
    const divideByThreeArrey = [];
    counSlog = 0;
    while (counSlog < aWord.length) {
        divideByThreeArrey.push(aWord.slice(counSlog, counSlog + aSvog));
        counSlog += aSvog;
    }
    return divideByThreeArrey;
}

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

//10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
//Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами.
function combinationsFn(...aWord) {
    let arr = [];
    if (aWord.length === 2) {
        for (let i = 0; i < aWord.length; i++) {
            arr.push(aWord[i] + (i + 1 !== aWord.length ? aWord[(i + 1)] : aWord[0]));
        }
    }
    else {
        for (let k = 0; k < aWord.length; k++) {
            let nArrey = [...aWord];
            let resArrey = [];
            if (k !== 0) {
                nArrey.splice(k, 1);
                resArrey = combinationsFn(...nArrey);
                for (let j = 0; j < resArrey.length; j++) {
                    arr.push(aWord[k] + resArrey[j]);
                }
            }
            else {
                resArrey = combinationsFn(...nArrey.slice(1));
                for (let j = 0; j < resArrey.length; j++) {
                    arr.push(aWord[k] + resArrey[j]);
                }
            }
        }
    }
    return arr;
}

const generateCombinations = (word) => {
    if (word.length <= 10) {
        return combinationsFn(...word);
    }
}

const convertArrToNumber = (aArray) => {
    return aArray.map((elementArray) => {
        return Number(elementArray);
    });
}


// Функция 1
btnFunction[0].addEventListener('click', function () {
    const res = getRandomArray(parseInt(inputLengthFn1.value), parseInt(inputMinFn1.value), parseInt(inputMaxFn1.value));
    console.log(res);
    resultFunction[0].innerHTML = `Полученный массив: ${res}`;
});

//Функция 2
btnFunction[1].addEventListener('click', function () {
    let arr = inputNumbersFn2.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn2.value.split(",");
    }
    const res = getModa(...convertArrToNumber(arr));
    console.log(res);
    resultFunction[1].innerHTML = `Мода: ${res}`;
});

//Функция 3
btnFunction[2].addEventListener('click', function () {
    let arr = inputNumbersFn3.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn3.value.split(",");
    }
    const res = getAverage(...convertArrToNumber(arr));
    console.log(res);
    resultFunction[2].innerHTML = `Середнє арифметичне: ${res}`;
});

//Функция 4
btnFunction[3].addEventListener('click', function () {
    let arr = inputNumbersFn4.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn4.value.split(",");
    }
    const res = getMedian(...convertArrToNumber(arr));
    console.log(res);
    //console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 1.25, 56, 3, 2))
    resultFunction[3].innerHTML = `Медиана: ${res}`;
});

//Функция 5
btnFunction[4].addEventListener('click', function () {
    let arr = inputNumbersFn5.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn5.value.split(",");
    }
    const res = filterEvenNumbers(...convertArrToNumber(arr));
    console.log(res);
    //console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
    resultFunction[4].innerHTML = `Без парных чисел: ${res}`;
});

//Функция 6
btnFunction[5].addEventListener('click', function () {
    let arr = inputNumbersFn6.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn6.value.split(",");
    }
    const res = countPositiveNumbers(...convertArrToNumber(arr));
    console.log(res);
    //console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
    resultFunction[5].innerHTML = `Количество чисел больше 0: ${res}`;
});

//Функция 7
btnFunction[6].addEventListener('click', function () {
    let arr = inputNumbersFn7.value.split(", ");
    if (arr.length === 0) {
        arr = inputNumbersFn7.value.split(",");
    }
    const res = getDividedByFive(...convertArrToNumber(arr));
    console.log(res);
    //console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
    resultFunction[6].innerHTML = `Числа которые делятся на 5: ${res}`;
});

//Функция 8
btnFunction[7].addEventListener('click', function () {
    const res = replaceBadWords(inputStrFn8.value, 'shit', 'fuck');
    console.log(res);
    //console.log(replaceBadWords("It's bullshit!", 'shit', 'fuck'));
    resultFunction[7].innerHTML = `Фраза после редактирования: ${res}`;
});

//Функция 9
btnFunction[8].addEventListener('click', function () {
    const res = divideByThree(inputStrFn9.value);
    console.log(res);
    //console.log(divideByThree('live'));
    resultFunction[8].innerHTML = `Фраза после редактирования: ${res}`;
});

//Функция 10
btnFunction[9].addEventListener('click', function () {
    const res = generateCombinations(inputStrFn10.value);
    console.log(res);
    //console.log(generateCombinations('man'));
    resultFunction[9].innerHTML = `Все возможные сочетания (${factorial(inputStrFn10.value.length)} штук): ${res}`;
});




//const arreyN = getRandomArray(10, 1, 1000);
//console.log(arreyN);
//console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 55, 2, 56, 3, 2, 55));
//console.log(getAverage(6, 2, 55, 11, 78, 56.333, 2, 55, 77, 57, 87, 23, 2, 1.25, 56, 3, 2));
//console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 1.25, 56, 3, 2))
//console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
//console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
//console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
//console.log(returnCountNubersOfSnowflake(4));
//console.log(replaceBadWords("It's bullshit!", 'shit', 'fuck'));
//console.log(replaceBadWords("Are you fucking kidding?", 'shit', 'fuck'));
//console.log(divideByThree('live'))
//console.log(generateCombinations(1, 2, 3))
//console.log(factorial(5));
//console.log(generateCombinations('man'));






