/* Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.*/

const n = +prompt("Введите первое число n: ");
const m = +prompt("Введите второе число m: ");

if(!Number.isNaN(n) && !Number.isNaN(m)) {
	if(m > n){
		for(let i = n; i <= m; i++){
			console.log(i);
		}
	} 
	else if(m < n){
		for(let i = n; i >= m; i--){
			console.log(i);
		}
	}
	else{
		console.log(n);
	}	
}
else {
	alert("А Вы точно ввели два числа?");
}
	