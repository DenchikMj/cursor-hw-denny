export const roundSum = (aSumm, aRank) => {
    return Math.ceil(aSumm / aRank) * aRank; // округление всегода в большую сторону
}