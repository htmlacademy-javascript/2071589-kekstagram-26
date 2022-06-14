function getRandomInt(min, max) {
  /* Функция, возвращающая случайное целое число из переданного диапазона включительно */
  min = Math.ceil(min);
  max = Math.floor(max);
  let result;

  if ((min * max) > 0 && (min && max) >= 0) {
    if (max > min) {
      result = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
        result = 'max должен быть больше min'
    }
  }
  else {
      result = 'введите min и max больше 0'
  }
  return result;
}

function checkStrLength(str, maxLength) {
  /* Функция для проверки максимальной длины строки */ 
  str = String(str)
  if (str.length < maxLength) {
    return true
  }
  return false
}


