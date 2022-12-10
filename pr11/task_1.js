var array = [16, 2, 5, 6, -7, 12, 15, 0, 3, 9, -10];
var arraysecond = [2, 5, 6, -7, 12, 15, 0, 3, 9];
document.write("Исходный массив: ", array, "<br>");
var max = array[0];
var maxIndex = 0;
var min = array[0];
var minIndex = 0;
var pos1 = getMaxValue(array, max, maxIndex);
var pos2 = getMinValue(array, min, minIndex);

// получение максимального элемента массива
function getMaxValue(array, max, maxIndex) {
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) (max = array[i]), (maxIndex = i);
  }
  document.write("Максимальный элемент: ", max, "<br>");

  maxIndex = pos1;
  return pos1;
}

// получение минимального элемента массива
function getMinValue(array, min, minIndex) {
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) (min = array[i]), (minIndex = i);
  }
  document.write("Минимальный элемент: ", min, "<br>");

  minIndex = pos2;
  return pos2;
}

// смена наибольшего и наименьшего значения
let maximum = array[0];
let minimum = array[array.length - 1];
function getNewArray(arraysecond, minimum, maximum) {
  let result = minimum + ", " + arraysecond + ", " + maximum;
  document.write(`Новый массив: ${result}`);
}

getNewArray(arraysecond, minimum, maximum);
