export const getStudentInfo = (aStudents) => {
    return {
        course: aStudents?.course,
        name: aStudents?.name,
        averageMark: getAverageMark(aStudents)
    }
}

const getAverageMark = (aStudents) => {
    const arraySubjects = Object.values(aStudents?.subjects).flat(Infinity);
    return (arraySubjects.reduce((average, subj) => average += subj, 0) / arraySubjects.length).toFixed(2);
}