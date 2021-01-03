export const getSumNumber = (aFirsN, aSecondN, flPaired) => {
    let sum = 0;
    for (let i = aFirsN; i <= aSecondN; i++) {
        if ((flPaired) || ((i % 2) !== 0)) {
            sum += i;
        }
    }
    return sum;
}

