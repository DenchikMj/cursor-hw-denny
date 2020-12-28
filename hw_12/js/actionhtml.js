const dropdown = document.getElementById("select-student");
const blockWrapper = document.getElementById("block-wrapper");
const btnGetInformation = document.getElementById("btn-get-information");
const btnGetPlanets = document.getElementById("btn-get-planets");
const btnGoToMain = document.getElementById("btn-get-go-to-main");
const btnGoToNext = document.getElementById("btn-get-go-to-next");

if (window.location.pathname === "/cursor-hw-denny/hw_12/index.html") {
    dropdown.value = 2;

    btnGetInformation.addEventListener('click', function () {
        blockWrapper.innerHTML = '';
        viewAllPeople(parseInt(dropdown.value));
    });

    btnGetPlanets.addEventListener('click', function () {
        document.location.href = "./html/planets.html";
    });

}


