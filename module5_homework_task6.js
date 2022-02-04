/*	Савенкова Марина, FR-92
 *	//#6
 *	Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
 *	Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
 *	Проверить, все ли элементы в массиве одинаковые.
 */

console.log("***module5_homework TASK6***");

//функция, проверяющая все ли элементы в массиве одинаковые
function checkSameElem(arr) {
	if (Array.from(new Set(arr)).length == 1) { //создаем на основе массива Set, если его длина равна 1, 
		return true; //то массив состоял из одинаковых элементов
	}
	return false; //иначе не все элементы были одинаковые
}


//функция-пример для нескольких массивов
function task6_Example() {
	console.log("--task6 example--");
	let arr1 = [1, 1, 1, "a1", "b1", NaN, NaN];
	let arr2 = [1, 1, 1, 1];
	let arr3 = [1, 2, 3, 4, 5];
	let arr4 = [0];
	let arr5 = [NaN,NaN,NaN];
	let arr6 = [null,null,null];

	let Arr = [arr1, arr2, arr3, arr4, arr5, arr6];
	let i = 0;
	while(i < Arr.length) {
		console.log(Arr[i]);
		console.log("Все ли элементы массива одинаковые?");
		if (checkSameElem(Arr[i])) {
			console.log(true);
		}
		else {
			console.log(false);
		}
		i++;
	}

}

task6_Example();
