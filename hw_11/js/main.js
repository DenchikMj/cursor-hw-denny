
async function getRandomChinese(aLength, aDeley) {
    let resulChars = '';

    // Checking incoming parameters
    if ((aLength <= 0) || aDeley <= 0) {
        return "aLength and aDeley must be greater than 0";
    }

    const getTransformChar = () => {
        const lastNumber = +(String(Date.now()).slice(-5));
        return String.fromCharCode(lastNumber);
    }

    let getRandomChar = () => new Promise(
        (resolve) => setTimeout(() => {
            return resolve(getTransformChar())
        }, aDeley)
    );

    for (let i = 0; i < aLength; i++) {
        resulChars += await getRandomChar();
    }
    return resulChars;
};

getRandomChinese(4, 50)
    .then((result) => console.log(result))
    .catch((reject) => console.log(reject));

getRandomChinese(-3, 0)
    .then((result) => console.log(result))
    .catch((reject) => console.log(reject));