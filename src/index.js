import "./styles.css";

export function absentNumber(array) {
  // Проверка пустого массива
  if (array.length < 1) return 1;
  // Проверка массива из одного элемента
  if (array.length === 1) {
    return array[0] === 1 ? 2 : array[0] - 1;
  }
  // Поиск максимального и минимального числа
  let maxNumber = Math.max.apply(null, array);
  let minNumber = Math.min.apply(null, array);
  // Подсчет реальной и ожидаемой сумм
  let actualSum = 0;
  let expectedSum = 0;
  array.forEach((element) => (actualSum += element));
  for (let i = minNumber; i <= maxNumber; i++) {
    expectedSum += i;
  }
  let sumDifference = expectedSum - actualSum;
  // Поиск отсутствующего элемента
  if (sumDifference > 0) return sumDifference;
  else {
    if (minNumber === 1) return maxNumber + 1;
    else return minNumber - 1;
  }
}

