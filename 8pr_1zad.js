console.log('Кучкаров Фахридин группа 618-21')
console.log('Пусть имеется список L1 действительных чисел. Записать в список L2 все элементы списка L1 в порядке возрастания их значений.');

function addNumber() {
  var arrContainer = document.getElementById("array"),
    n = 5, // число элементов массива
    max = 3, // макс. число перезапросов
    att, // счётчик попыток
    i, // индекс элемента массива
    greet = "", // сообщение при запросе
    arr = []; // создаем массив
  for (i = 0; i < n; i++) {
    for (att = 0; att < max; ) {
      greet = "Введите любое число №" + (i + 1);
      if (att++ > 0) greet += " (попытка " + att + " из " + max + ")";
      arr[i] = prompt(greet); // Заполняем массив
      if (null !== arr[i] && arr[i].length) break;
      if (att === max) {
        alert("Ой, всё");
        return false;
      }
    }
  }

  arrContainer.innerHTML = JSON.stringify(arr);
  return arr.sort(function(a, b){
    return a-b
  });
}
 addNumber();
// html
<!DOCTYPE html>
<html>

<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="array"></div>

	<script src="src/index.js">
	</script>
</body>

</html>
