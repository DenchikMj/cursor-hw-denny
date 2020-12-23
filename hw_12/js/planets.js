const arrTableElemtntPlanets = ['Name planets', 'Climate'];
let pageNumber = 1;

function getPlanets(nPage) {
    return axios.get(`https://swapi.dev/api/planets/?page=${nPage}`).then((res) => res.data);
}

getPlanets(pageNumber)
    .then((res) => console.log(res));

async function viewAllPeople() {
    const tablePlanets = document.createElement('table');
    blockWrapper.style.backgroundColor = "rgba(0, 0, 0, 1)"
    getPlanets(pageNumber)
        .then((palanets) => {
            const head = createHeadTablePeople(arrTableElemtntPlanets);
            const body = document.createElement('tbody');
            palanets.results.map((palanet) => {
                const row = createRowTablePlanet(palanet);
                body.appendChild(row);
            });
            tablePlanets.appendChild(head);
            tablePlanets.appendChild(body);
        });
    blockWrapper.append(tablePlanets);
    pageNumber++;
}

viewAllPeople(pageNumber);

btnGoToMain.addEventListener('click', function () {
    document.location.href = "../index.html";
});

btnGoToNext.addEventListener('click', function () {
    blockWrapper.innerHTML = '';
    viewAllPeople(pageNumber);
});