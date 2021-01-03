const blockWrapper = document.getElementById("block-wrapper");

function generateBlocks(aCountBlock) {
    blockWrapper.innerHTML = '';
    for (let i = 0; i < aCountBlock; i++) {
        const blockElement = document.createElement('div');
        blockElement.classList.add("block");
        blockElement.style.backgroundColor = getRandomColor();
        blockElement.style.width = "50px";
        blockElement.style.height = "50px";
        blockWrapper.append(blockElement);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomColor() {
    return `rgb(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)})`;
}

export function generateBlocksInterval() {
    return setInterval(() => generateBlocks(25), 1000);
}