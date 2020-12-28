let characters;
const arrTableElemtnt = ['Photo', 'Name', 'Date of birth', 'Gender'];

function getCharacters(aNumberFilm) {
    return axios.get(`https://swapi.dev/api/films/${aNumberFilm}/`).then((res) => res.data.characters);
}

function getData(aUrl) {
    return axios.get('https' + aUrl.slice(4)).then((res) => res.data);
}

async function viewAllPeople(aNumberFilm) {
    const tablePeople = document.createElement('table');
    blockWrapper.style.backgroundColor = "rgba(0, 0, 0, 1)"
    getCharacters(aNumberFilm)
        .then((charactersObg) => {
            const head = createHeadTablePeople(arrTableElemtnt);
            const body = document.createElement('tbody');
            charactersObg.map((url) => {
                getData(url).
                    then((people) => {
                        const row = createRowTablePeople(people);
                        body.appendChild(row);
                    });
            });
            tablePeople.appendChild(head);
            tablePeople.appendChild(body);
        });
    blockWrapper.append(tablePeople);
}

//viewAllPeople(3);

