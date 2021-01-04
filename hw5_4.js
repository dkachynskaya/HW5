/* Запросить у пользователя два числа - вывести случайное целое число в этом диапазоне. */

const n = +prompt("Введите первое число n: ");
const m = +prompt("Введите второе число m: ");

let getRandomFloat = (min, max) => Math.random() * (max - min) + min;

if(!Number.isNaN(n) && !Number.isNaN(m)) {
	if(m > n){
		alert(getRandomFloat(n, m));
	} 
	else if(m < n){
		alert(getRandomFloat(m, n));
	}
	else{
		alert(n);
	}	
}
else {
	alert("А Вы точно ввели два числа?");
}
	

