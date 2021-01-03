//3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
export const getAverage = (...aNumbers) => {
    const summNumber = aNumbers.reduce((summNumber, number) => {
        return Number.isInteger(number) ? summNumber += number : summNumber;
    }, 0);
    return (summNumber / aNumbers.length).toFixed(1);
}