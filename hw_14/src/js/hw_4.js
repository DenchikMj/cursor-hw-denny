//1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
export const getPairUp = (aStudents) => {
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