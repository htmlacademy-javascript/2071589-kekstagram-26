function checkStrLength(str, maxLength) {
  /* Функция для проверки максимальной длины строки */
  str = String(str);
  if (str.length < maxLength) {
    return true;
  }
  return false;
}

const getRandomPositiveInteger = (a, b) => {
  /* Функция, возвращающая случайное целое число из переданного диапазона включительно */
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

checkStrLength('Hello World', 100);

export {getRandomPositiveInteger, getRandomArrayElement};
