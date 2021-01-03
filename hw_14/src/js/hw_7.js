export function getMyTaxes(salary) {
    return parseFloat((this?.tax * salary).toFixed(2));
}