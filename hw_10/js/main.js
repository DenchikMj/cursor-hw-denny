const blockWrapper = document.querySelector("#block-wrapper");

let audio = new Audio();
const presetButtonsKey = [65, 68, 70, 71, 72, 83];

function playAudioFromKey(aKey) {
    audio.src = `sounds/${aKey}.mp3`;
    audio.play();
}

function focusOnKey(aId) {
    const element = document.getElementById(aId);
    if (element !== null) {
        element.classList.add("key-focus");
    }

}

function outFocusOnKey(aId) {
    const element = document.getElementById(aId);
    if (element !== null) {
        element.classList.remove("key-focus");
    }
}

function actionKey(e) {
    let keyId;
    if (e.type === 'click') {
        keyId = e.target.id === '' ? parseInt(e.path[1].id) : parseInt(e.target.id);
    } else {
        keyId = parseInt(e.keyCode);
    }
    console.log(`keyId: ${keyId}`);

    if (presetButtonsKey.indexOf(keyId) > -1) {
        focusOnKey(keyId);
        setTimeout(outFocusOnKey, 1000, keyId);
        playAudioFromKey(keyId);
    } else {
        console.log(`Нет такой кнопки в списке отслеживания` + keyId);
    }
}

addEventListener("keydown", actionKey); // Отслеживание нажатия кнопок
blockWrapper.addEventListener("click", actionKey); // Отслеживание кликов
// наведение на блок
blockWrapper.addEventListener("mouseover", (e) => {
    const keyId = e.target.id === '' ? parseInt(e.path[1].id) : parseInt(e.target.id);
    focusOnKey(keyId);
});
// убрать фокус с блока
blockWrapper.addEventListener("mouseout", (e) => {
    const keyId = e.target.id === '' ? parseInt(e.path[1].id) : parseInt(e.target.id);
    outFocusOnKey(keyId);
});


