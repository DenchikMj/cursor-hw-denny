const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

let IntervalPrintRandomMySalary;

function getRandomValue(aFirst, aSecond) {
    return Math.floor(aFirst + Math.random() * (aSecond + 1 - aFirst));
}

//1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите 
//як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary) {
    return parseFloat((this?.tax * salary).toFixed(2));
}

//2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти 
//у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
function getMiddleTaxes() {
    return parseFloat((this?.tax * this?.middleSalary).toFixed(2));
}

//3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
//(tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes() {
    return parseFloat((this?.tax * this?.vacancies).toFixed(2));
}

//4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
// кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної
// країни та значення salary. profit = salary - taxes;
function getMySalary(aCountry) {
    const resObj = {};
    const salary = getRandomValue(1500, 2000);
    resObj['salary'] = salary
    resObj['taxes'] = aCountry?.tax;
    resObj['profit'] = (salary - aCountry?.tax).toFixed(2);

    return resObj;
}

const printRandomMySalary = (secondsm, ...arrayCountry) => {
    const country = arrayCountry[getRandomValue(0, arrayCountry.length - 1)];
    IntervalPrintRandomMySalary = setInterval(() => {
        let resNewObj = getMySalary(country);

        let res = `Новый объект: \n `;
        res += `salary: ${resNewObj?.salary} \n `;
        res += `taxes: ${resNewObj?.taxes} \n `;
        res += `profit: ${resNewObj?.profit} \n `;

        console.log(resNewObj);
        resultFunction[3].innerHTML = res;

    }, secondsm * 1000);
}

// Остановка Таймера
const stopInterval = (intervalId = IntervalPrintRandomMySalary) => clearInterval(intervalId);

//Запуск Таймера
const startInterval = () => printRandomMySalary(10, ukraine, latvia, litva);

//startInterval();
//console.log(getMyTaxes.call(ukraine, 60000));
//console.log(getMiddleTaxes.call(ukraine));
//console.log(getTotalTaxes.call(ukraine));
//console.log(getMySalary.call(ukraine));
