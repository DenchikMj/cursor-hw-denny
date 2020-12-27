const buttons = document.querySelectorAll(".btn");
const outputH1 = document.querySelector("#output-h1");

let resGenId = 'createIdGenerator: ';

function* createIdGenerator() {
    let id = 0;
    while (true) {
        yield id++;
    }
}

function* newFontGenerator(aParamInput) {
    let font = parseInt(aParamInput);
    while (true) {
        const char = yield font;
        char === 'up' ? ++font : char === 'down' ? --font : font;
    }

}


const idGenerator = createIdGenerator();

for (let i = 0; i < 15; i++) {
    let id = idGenerator.next().value;
    resGenId = resGenId + `${id}; `;
    console.log(id);
}


const fontGenerator = newFontGenerator(32);
fontGenerator.next().value;

document.querySelector("#generator-id").innerHTML = resGenId;

buttons[0].addEventListener("click", function () {
    let newFontSize = fontGenerator.next("up").value;
    outputH1.style.fontSize = newFontSize + 'px';
    console.log(newFontSize);
});
buttons[1].addEventListener("click", function () {
    let newFontSize = fontGenerator.next("down").value;
    outputH1.style.fontSize = newFontSize + 'px';
    console.log(newFontSize);
})