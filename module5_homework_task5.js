/*	Савенкова Марина, FR-92
 *	//#5
 *	Дан произвольный массив. 
 *	Необходимо вывести количество элементов массива, 
 *	затем перебрать его и вывести в консоль каждый элемент массива.
 */

console.log("***module5_homework TASK5***");

let arr = [1, 2, Math.exp(3), "Hello", true, NaN]; //создаем массив
console.log(arr);
console.log(`Длина массива: ${arr.length}.`); //выводим его длину
arr.forEach(function(item, i, arr) { //перебираем массив с помощью цикла forEach
	console.log( `Элемент № ${i}: ${item}`); //и выводим в консоль значения элементов
});
