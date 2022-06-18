export const trimAndToLowerCase = (str) => str.toLowerCase().trim();
export const randomIntFromInterval = (min, max) => {
    return (Math.random() * (max - min + 1) + min).toFixed(1);
}