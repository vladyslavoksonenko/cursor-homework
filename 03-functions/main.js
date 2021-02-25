//отримує будь-яке число та виводить найбільшу цифру в цьому числі НЕЗАКІНЧЕНО

const getMaxDigit = (number) => {
	let maxnum = 0;
	for (let i = 0; i <= number.length; i++) {  
    if (+number[i] > +maxnum) {
      maxnum = number[i];
    }
  }
  return maxnum;
}
console.log(getMaxDigit(23423451345));

// визначає ступінь числа +

const getDegreeNum = (num, degree) => {
	if (isNaN(num, degree)) {
		return `Not a number`;
	}
	let resault = num; 
	while (degree > 1) {
		resault *= num;
		--degree;
	}
	return resault;
}

console.log(getDegreeNum(2, 2));

// форматує ім'я, роблячи першу букву великою

const getName = (name) => {
	let resultName = ``;
	for (let i = 0; i < name.length; i++) {
		if (i === 0) {
		 resultName += name[i].toUpperCase();
		} else {
			resultName += name[i].toLowerCase();
		}
	}
	return resultName;
}

// 4. Вираховує суму, що залишається після оплати податку від зарабітньої плати

console.log(getName(`vLAD`));


const getNatSalary = () => {
	const tax = `18%`;
}

// 5. повертає випадкове ціле число в діапазоні від N до M; test

const getRandomNumber = (numMin, numMax) =>  Math.round(Math.random() * (numMax - numMin) + numMin);

console.log(getRandomNumber(1, 3));

// 6. Функція рахує скільки разів певна буква повторюється в слові

const countLetter = (char, str) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		(str[i].toLowerCase() == char.toLowerCase()) ? count++ : false;
	}
	return count;
}

console.log(countLetter("А", 'Амстердама'));

// 7.  конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку

const convertCurrency = (moneyToConvert) => {
	if (moneyToConvert.indexOf('$') > 0) {
		return (parseInt(moneyToConvert) * 28).toFixed(2) + "UAH";
	} else if (moneyToConvert.indexOf(('UAH'.toUpperCase())) > 0) {
		return (parseInt(moneyToConvert) / 28).toFixed(2) + "$";
	} else {
		return "Невідома валюта"
	};
};

console.log(convertCurrency("29uah"));

// 8. генерації випадкового паролю (тільки числа)

const getRandomPassword = (numOfCharacts = 8) => {
	let result = "";
	for (let i = 0; i < numOfCharacts; i++) {
		result += Math.round(Math.random() * 9).toString();
	}
	return  result;
}

console.log(getRandomPassword(12));

// 9. функція, яка видаляє всі букви з речення

const deleteLetters = (charDelete, string) => {
	let result = '';
	for (let i = 0; i < string.length; i++) {
		charDelete === string[i] ? false : result += string[i];
	}
	return result;
}

console.log(deleteLetters("а", "мамамамамамакуперкууцвса"));

// 10. функція, яка перевіряє, чи є слово паліндромом НЕ ЗАКІНЧЕНО

const isPalyndrom = (string) => {
	let check = "";
	for (let i = string.length - 1; i >= 0; i--) {
		check += string[i];
	}
	console.log(check);
	if (string === check) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalyndrom('а роза упала на лапу Азора'));

// 11. 