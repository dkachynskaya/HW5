/* Запросить у пользователя два числа, написать функцию при помощи стрелочного синтаксиса и аналог с function expression которая бы возводила первое число в степень второго введенного числа, или в степень 2 по умолчанию. */

const x = +prompt("Введите первое число x: ");
const y = +prompt("Введите второе число y: ");

let pwr = (x, y = 2) => Math.pow(x, y);

let power = function(x, y = 2) {
	return Math.pow(x, y);
}

	