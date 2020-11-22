const result = document.getElementById("result");
const btnResult = document.getElementById("btn-result");

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Рандомное значение
const getRandomValue = (aFirs, aSecond) => {
    return Math.floor(aFirs + Math.random() * (aSecond + 1 - aFirs));
}

//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
const getPairUp = (aStudents) => {
    const pairStudents = [];
    const ledys = [];
    for (let i = 0; i < aStudents.length; i++) {
        let nameStudent = aStudents[i];
        if (nameStudent[nameStudent.length - 1] !== 'а') {
            pairStudents.push([nameStudent]);
        }
        else {
            ledys.push(nameStudent);
        }
    }

    for (let i = 0; i < pairStudents.length; i++) {
        if (i < ledys.length) {
            pairStudents[i].push(ledys[i]);
        }
    }
    return pairStudents;
}

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
const getThemesOfPairStudents = (aPairStudents, athemes) => {
    const themesPairStudents = [];
    //themesPairStudents.push(...aPairStudents);
    for (let i = 0; i < aPairStudents.length; i++) {
        if (i < athemes.length) {
            let students = aPairStudents[i][0] + ' і ' + aPairStudents[i][1]
            themesPairStudents.push([students]);
            themesPairStudents[i].push(athemes[i]);
        }
    }
    return themesPairStudents;
}

//3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
const getAppraisalOfStudents = (aStudents, aMarks) => {
    const appraisalOfStudents = [];
    for (let i = 0; i < aStudents.length; i++) {
        if (i < aMarks.length) {
            appraisalOfStudents.push([aStudents[i]]);
            appraisalOfStudents[i].push(aMarks[i]);
        }
    }
    return appraisalOfStudents;
}

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const getAppraisalOfThemes = (aThemesOfPairStudents) => {
    const themesOfPairStudentsAppraisal = [];
    for (let i = 0; i < aThemesOfPairStudents.length; i++) {
        themesOfPairStudentsAppraisal.push([...aThemesOfPairStudents[i]])
        themesOfPairStudentsAppraisal[i].push(getRandomValue(1, 5));
    }
    return themesOfPairStudentsAppraisal;
}

btnResult.addEventListener('click', function () {
    let res;
    let pairStudent = ''; let themesStudent = ''; let appraisalStudent = ''; let appraisalPair = '';

    const pairStudents = getPairUp(students);
    console.log(pairStudents);
    pairStudents.forEach(pair => pairStudent += pair + '<br/>');

    const themesOfPairStudents = getThemesOfPairStudents(pairStudents, themes);
    console.log(themesOfPairStudents);
    themesOfPairStudents.forEach(themes => themesStudent += themes + '<br/>');

    const appraisalOfStudents = getAppraisalOfStudents(students, marks);
    console.log(appraisalOfStudents);
    appraisalOfStudents.forEach(appraisal => appraisalStudent += appraisal + '<br/>');

    const themesOfPairStudentsAppraisal = getAppraisalOfThemes(themesOfPairStudents);
    console.log(themesOfPairStudentsAppraisal);
    themesOfPairStudentsAppraisal.forEach(pair => appraisalPair += pair + '<br/>');

    res = `Пары были распределены в следующем порядке: <br/> ${pairStudent} <br/> <br/>
    
    Парам достались следующие темы: <br/> ${themesStudent} <br/> <br/>

    Студенты получили следующие оценки: <br/>  ${appraisalStudent} <br/> <br/>

    Пары получили такие рандомные оценки: <br/> ${appraisalPair}`;

    result.innerHTML = res;

})

