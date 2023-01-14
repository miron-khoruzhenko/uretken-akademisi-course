"use strict";

// TODO: Функция для операторов
// TODO: Функция для суммирования
// ÷ -

function get(str, all=false){
	if(!all)
		return document.querySelector(str);
	else
		return document.querySelectorAll(str);
}

const	opBtns	= get('.btn--operator', true),
		acBtn	= get('.btn--ac'),
		numBtns	= get('.btn--number', true),
		display	= get('.display'),
		ftBtns	= get('.btn--ft', true),
		sumBtn	= get('.btn--sum');

let input	= '',
	result	= 0,
	dotPressed = false;

function allClear(){
	input = '';
	result = 0;
	display.value = '';
	dotPressed = false;
} 

function operateNumber(number){
	if(number.currentTarget.innerText === '0' && !input[input.length - 1].match(/[1-9.]/)){
		return;
	}
	input += number.currentTarget.innerText;
	display.value += number.currentTarget.innerText;
}

function operateSigns(sign){
	let signValue = sign.currentTarget.innerText;
	// Если до этого уже были нажаты операторы
	try{
		if(input[input.length - 1] === '.' && input[input.length - 2].match(/[0-9]/) && signValue !== '.'){
			input = input.slice(0,-1)
			display.value = display.value.slice(0,-1)
			console.log(1)
		}else if(input[input.length - 1] === '.' && input[input.length - 2].match(/[+-/*]/) && signValue !== '.'){
			input = input.slice(0,-2)
			display.value = display.value.slice(0,-5)
			console.log(2)
		}else if(input[input.length - 1].match(/[÷×+-\/*]/) && signValue !== '.'){
			input = input.slice(0,-1)
			display.value = display.value.slice(0,-3)
			console.log(2)
		}
	}
	catch{
		return;
	}
	//Основыне операторы кроме точки
	if(signValue.match(/[÷×+-]/)){
		if(signValue === '×'){
			input += '*';
		}else if(signValue === '÷'){
			input += '/';
		}else{
			input += signValue;
		}
		display.value += ` ${signValue} `
		dotPressed = false
	}else if(signValue === '.' && !dotPressed){
		if(input[input.length - 1].match(/[÷×+-/\*]/)){
			display.value += ` ${signValue}`
		}else{
			display.value += signValue
		}
		input += '.'
		dotPressed = true;

	}
}
function sum(){
	if(input[input.length - 1].match(/[÷×+-/\*]/)){
		input = input.slice(0, -1);
	}
	display.value = eval(input)
}

acBtn.addEventListener('click', allClear);
sumBtn.addEventListener('click', sum)
opBtns.forEach(operator => {
	operator.addEventListener('click', operateSigns);
});
numBtns.forEach(numBtn => {
	numBtn.addEventListener('click', operateNumber);
});

allClear()