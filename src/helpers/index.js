export const trimToLowerCase = (str) => str.toLowerCase().trim();

export const randomIntFromInterval = (min, max) => {
    return (Math.random() * (max - min + 1) + min).toFixed(1);
}

export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
