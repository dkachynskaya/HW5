/* Найти все символы в верхнем регистре "ECMAScript 2015 (6th Edition, ECMA-262)". */

const str = 'ECMAScript 2015 (6th Edition, ECMA-262)';

//all uppercase characters
for(let i = 0; i < str.length; i++) {
	if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        console.log('uppercase:', str.charAt(i));
    }
}

//just letters 
for(let i = 0; i  < str.length; i++){
    if (str[i].match(/[A-Z]/) != null){
        console.log('uppercase:', str[i]);
    }
}


	

