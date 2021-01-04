/* Запросить у пользователя два числа с плавающей точкой - умножить на 0.3 и округлить до ближайшего целого числа. */

const n = +prompt("Введите первое число c плавающей точкой n: ");
const m = +prompt("Введите второе число c плавающей точкой m: ");

if(!Number.isNaN(n) && !Number.isNaN(m)) {
	let result1 = Math.round(n * 0.3);
	let result2 = Math.round(m * 0.3);

	alert(`result1 = ${result1}, result2 = ${result2}`);
}
else {
	alert('А вы точно ввели два числа?');
}
	