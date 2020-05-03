export const isEven = (num) => num % 2 === 0;

export const randomInteger = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const getKeyByValue = (obj, value) =>
  Object.keys(obj).find((key) => obj[key] === value);
