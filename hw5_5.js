/* Запросить  у пользователя две строки, найти сколько раз повторяется вторая в первой. Вывести индексы всех вхождений. */

const str1 = prompt("Введите первую строку: ");
const str2 = prompt("Введите сторую строку: ");

if(str1 !== null && str2 !== null) {
	let index = 0;
	let amount = 0;
	
	while (true) {
	  let pos = str1.indexOf(str2, index);
	  
	  if (pos == -1) break;
	
	  console.log( `Позиция : ${pos}` );
	  index = pos + 1;
	  amount++;
	}
	console.log( `Найдено ${amount} вхождения(й)`);
}
else {
	alert("Вы точно ввели две строки?");
}
	

