const preview = document.getElementById('preview');
const btnFunction = document.querySelectorAll(".btn-function");
const resultFunction = document.querySelectorAll(".function-result");

const inputNumberFn1 = document.getElementById('input-number-fn1');

// Функция 1
btnFunction[0].addEventListener('click', function () {
    let res = 'Сколько налогов заплатите в: \n';
    res += `Ukraine: ${getMyTaxes.call(ukraine, parseInt(inputNumberFn1.value))} \n `;
    res += `Latvia: ${getMyTaxes.call(latvia, parseInt(inputNumberFn1.value))} \n `;
    res += `Litva: ${getMyTaxes.call(litva, parseInt(inputNumberFn1.value))} \n `;
    console.log(res);
    resultFunction[0].innerHTML = res;
});

// Функция 2
btnFunction[1].addEventListener('click', function () {
    let res = 'Сколько в среднем налогов заплатите в: \n';
    res += `Ukraine: ${getMiddleTaxes.call(ukraine)} \n `;
    res += `Latvia: ${getMiddleTaxes.call(latvia)} \n `;
    res += `Litva: ${getMiddleTaxes.call(litva)} \n `;
    console.log(res);
    resultFunction[1].innerHTML = res;
});

// Функция 3
btnFunction[2].addEventListener('click', function () {
    let res = 'Сколько в всего налогов заплатите в: \n';
    res += `Ukraine: ${getTotalTaxes.call(ukraine)} \n `;
    res += `Latvia: ${getTotalTaxes.call(latvia)} \n `;
    res += `Litva: ${getTotalTaxes.call(litva)} \n `;
    console.log(res);
    resultFunction[2].innerHTML = res;
});

// Функция 4
btnFunction[3].addEventListener('click', function () {
    startInterval();
    resultFunction[3].innerHTML = `Таймер запущен!`;
});

btnFunction[4].addEventListener('click', function () {
    stopInterval();
    resultFunction[3].innerHTML = `Таймер остановлен!`;
});