const progerOne = document.querySelector("#proger-one");
const progerTwo = document.querySelector("#proger-two");
const progerThree = document.querySelector("#proger-three");
const btnGetDicount = document.querySelector("#btn-get-dicount");
const btnGetInf = document.querySelector("#btn-get-inf");
const resultInf = document.querySelector("#result-inf");
const resultDiscont = document.querySelector("#result-discont");
const nameBtnDiscount = document.querySelector('#name-btn-discount');
const progerOneAmauntPaid = document.querySelector('#proger-one-amaunt-paid');
const progerTwoAmauntPaid = document.querySelector('#proger-two-amaunt-paid');
const progerThreeAmauntPaid = document.querySelector('#proger-three-amaunt-paid');
const progerOneCostPaid = document.querySelector('#proger-one-cost-paid');
const progerTwoCostPaid = document.querySelector('#proger-two-cost-paid');
const progerThreeCostPaid = document.querySelector('#proger-three-cost-paid');
const progerOneProfit = document.querySelector('#proger-one-profit');
const progerTwoProfit = document.querySelector('#proger-two-profit');
const progerThreeProfit = document.querySelector('#proger-three-profit');

const PRICE_CODING_PROGER_ONE = 15.678;
const PRICE_CODING_PROGER_TWO = 123.965;
const PRICE_CODING_PROGER_THREE = 90.2345;

let maxPriceCodingProger, minPriceCodingProger, sumPriceCodingProger;
let sumFloorTгuncPriceCodingProger, roundedSumTuгncPriceCodingProger;
let pairedNumber, amountRest, averagePrice, discount;
let amountToBePaidOne, amountToBePaidTwo, amountToBePaidThre;
let costPaidOne, costPaidTwo, costPaidThree;
let resultText;

function RoundSum(aSumm, aRank) {
    return Math.round(aSumm / aRank) * aRank;
}

function GetAmountToBePaid(aSum, aDiscount, aFixed) {
    return (aSum - aSum * (aDiscount / 100)).toFixed(aFixed);
}

function GetDiscount() {
    return Math.floor(Math.random() * 100);
}

//aCost -  процент себестоимости
function GetCostToBePaid(aSum, aCost) {
    return aSum * (aCost / 100);
}

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
maxPriceCodingProger = Math.max(PRICE_CODING_PROGER_ONE, PRICE_CODING_PROGER_TWO, PRICE_CODING_PROGER_THREE);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
minPriceCodingProger = Math.min(PRICE_CODING_PROGER_ONE, PRICE_CODING_PROGER_TWO, PRICE_CODING_PROGER_THREE)


//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
sumPriceCodingProger = PRICE_CODING_PROGER_ONE + PRICE_CODING_PROGER_TWO + PRICE_CODING_PROGER_THREE;

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
sumFloorTгuncPriceCodingProger = Math.floor(Math.trunc(PRICE_CODING_PROGER_ONE) + Math.trunc(PRICE_CODING_PROGER_TWO) + Math.trunc(PRICE_CODING_PROGER_THREE));

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
roundedSumTuгncPriceCodingProger = RoundSum(sumPriceCodingProger, 100);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
pairedNumber = Math.floor(sumPriceCodingProger) % 2 ? false : true;

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
amountRest = 500 - sumPriceCodingProger;

//Виведіть середнє значення цін, округлене до другого знаку після коми
averagePrice = sumPriceCodingProger.toFixed(2);

/*
(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
*/

costPaidOne = GetCostToBePaid(PRICE_CODING_PROGER_ONE, 50).toFixed(2)
costPaidTwo = GetCostToBePaid(PRICE_CODING_PROGER_TWO, 50).toFixed(2)
costPaidThree = GetCostToBePaid(PRICE_CODING_PROGER_THREE, 50).toFixed(2)

progerOne.innerHTML = PRICE_CODING_PROGER_ONE;
progerTwo.innerHTML = PRICE_CODING_PROGER_TWO;
progerThree.innerHTML = PRICE_CODING_PROGER_THREE;

resultText = `
     Mаксимальное число: ${maxPriceCodingProger}
     Минимальное число: ${minPriceCodingProger}
     Стоимость всех услуг: ${sumPriceCodingProger}
     Округленная Сумма без копеек: ${sumFloorTгuncPriceCodingProger}
     Округленная Сумма до сотен: ${sumFloorTгuncPriceCodingProger}
     Парная сумма bool: ${pairedNumber}
     Остаток за покупку всех услуг при уплате 500 купюрой: ${amountRest}
     Среднее значение цен: ${averagePrice}
     `;


btnGetDicount.addEventListener('click', function () {
    discount = GetDiscount();
    AmountToBePaidOne = GetAmountToBePaid(PRICE_CODING_PROGER_ONE, discount, 2);
    AmountToBePaidTwo = GetAmountToBePaid(PRICE_CODING_PROGER_TWO, discount, 2);
    AmountToBePaidThree = GetAmountToBePaid(PRICE_CODING_PROGER_THREE, discount, 2);

    resultDiscont.innerHTML = `Ваша скидка составила ${discount} %`;
    nameBtnDiscount.innerHTML = 'Обновить скидку';
    progerOneAmauntPaid.innerHTML = AmountToBePaidOne;
    progerTwoAmauntPaid.innerHTML = AmountToBePaidTwo;
    progerThreeAmauntPaid.innerHTML = AmountToBePaidThree;
    progerOneCostPaid.innerHTML = costPaidOne;
    progerTwoCostPaid.innerHTML = costPaidTwo;
    progerThreeCostPaid.innerHTML = costPaidThree;
    progerOneProfit.innerHTML = (AmountToBePaidOne - costPaidOne).toFixed(2);
    progerTwoProfit.innerHTML = (AmountToBePaidTwo - costPaidTwo).toFixed(2);
    progerThreeProfit.innerHTML = (AmountToBePaidThree - costPaidThree).toFixed(2);
});

btnGetInf.addEventListener('click', function () {
    resultInf.innerHTML = resultText;
})

console.log(resultText);



//console.log(Math.floor(sumPriceCodingProger));
//console.log(pairedNumber);
//console.log(test);
//console.log(roundedSumTuгncPriceCodingProger);