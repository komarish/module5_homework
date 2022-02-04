/*	Савенкова Марина, FR-92
 *	//#2
 *	Дана переменная Х, которая может принимать любое значение. 
 *	Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
 *	Опишите три случая: когда х = числу, строке или логическому типу. 
 *	В других случаях выводите сообщение: «Тип x не определён».
 */

console.log("***module5_homework TASK2***");

function TypeDef(X) {
	if (isNaN(X)) { //несмотря на то, что NaN относится к численному типу,
		console.log(`Тип X не определён.`); //числом оно не считается
		return;
	}

	switch(typeof(X)) { //проверяем три случая
	case "number":
		console.log(`${X} - число`);
	 	break;
	 case "string":
	 	console.log(`${X} - строка`);
	 	break;
	 case "boolean":
	 	console.log(`${X} - логический тип`);
	 	break;
	 default:
	 	console.log(`Тип X не определён.`); //если ни один из данных типов, 
	 	break; 								//выводим дефолтное сообщение
	}
}


//функция-пример для значений 1, "1", true, NaN, undefined;
function task2_Example() {
	console.log("--task2 example--");
	let X1 = 1, X2 = "1", X3 = true, X4 = NaN, X5;
	console.log(`X1 = ${X1}`);
	TypeDef(X1);
	console.log(`X2 = ${X2}`);
	TypeDef(X2);
	console.log(`X3 = ${X3}`);
	TypeDef(X3);
	console.log(`X4 = ${X4}`);
	TypeDef(X4);
	console.log(`X5 = ${X5}`);
	TypeDef(X5);
}

task2_Example();



