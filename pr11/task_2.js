

console.log("Подготовил Кучкаров Фахриддин группы 618-21");
console.log(
  "На тему: 11.	В деке находятся целые числа. Добавить в дек столько элементов, чтобы он стал в два раза длиннее и симметричным, то есть: первый элемент был равен последнему, второй – предпоследнему и так далее."
);

let original_array = [1, 2, 3, 4];

let reversed_array = [];

console.log(`исходный дек: ${original_array}`);

for (let i = original_array.length - 1; i >= 0; i--) {
  reversed_array.push(original_array[i]);
}

console.log(`результат: ${original_array + "," + reversed_array}`);
