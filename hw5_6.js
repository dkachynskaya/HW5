/* Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”. */

const str = 'ECMAScript 2015 (6th Edition, ECMA-262)';

let numbers = /\d+/g;
alert(str.match(numbers));
	

