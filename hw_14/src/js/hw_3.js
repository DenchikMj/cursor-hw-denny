export const getFormatName = (aName) => {
    let fName = String(aName).toLowerCase();
    return fName[0].toUpperCase() + fName.slice(1);
}