function createHeadTablePeople(aArrTableElemtnt) {
    const headTable = document.createElement('thead');
    const trHead = document.createElement('tr');
    for (let i = 0; i < aArrTableElemtnt.length; i++) {
        const thElement = document.createElement('th');
        thElement.classList.add('thPeople');
        thElement.innerHTML = aArrTableElemtnt[i];
        trHead.appendChild(thElement);
    }
    headTable.appendChild(trHead);
    return headTable;
}

function createRowTablePeople(aObjPeople) {
    const row = document.createElement('tr');
    const arrUrlElements = String(aObjPeople.url).split('/');
    const imgIcon = document.createElement("img");
    imgIcon.src = `img/icons/${arrUrlElements[arrUrlElements.length - 2]}.png`;
    imgIcon.classList.add("photo");

    for (let i = 0; i < arrTableElemtnt.length; i++) {
        const tdElement = document.createElement('td');
        tdElement.classList.add('tdPeople');

        switch (i) {
            case 0:
                tdElement.append(imgIcon);
                break;
            case 1:
                //tdElement.innerHTML = `${aObjPeople.name} ${arrUrlElements[arrUrlElements.length - 2]}`;
                tdElement.innerHTML = aObjPeople.name;
                break;
            case 2:
                tdElement.innerHTML = aObjPeople.birth_year;
                break;
            case 3:
                tdElement.innerHTML = aObjPeople.gender;
                break;
        }
        row.appendChild(tdElement);
    }
    return row;
}

function createRowTablePlanet(aObjPeople) {
    const row = document.createElement('tr');

    for (let i = 0; i < arrTableElemtnt.length; i++) {
        const tdElement = document.createElement('td');
        tdElement.classList.add('tdPeople');

        switch (i) {
            case 0:
                tdElement.innerHTML = aObjPeople.name;
                break;
            case 1:
                tdElement.innerHTML = aObjPeople.climate;
                break;
        }
        row.appendChild(tdElement);
    }
    return row;
}
