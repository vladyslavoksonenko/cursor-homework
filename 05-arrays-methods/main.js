
// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
// max – максимальне значення цілого числа.

const getRandomArray = (length, min, max) => {
	const randomArray = [];
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.round(Math.random()*(max - min) + min);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

//console.log(getRandomArray(10, 1, 3));

// 2. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ

const getMedian = (...numbers) => {
	let median = medianIndex = null; 	

	numbers.sort((a, b) => a - b);
	numbers = numbers.filter((element) => Number.isInteger(element));

	medianIndex = (numbers.length + 1) / 2; 
	
	if (numbers.length % 2 !== 0) {
		median = numbers[medianIndex - 1]; 
	} else {
		median = ((numbers[(medianIndex - 1) + 0.5]) + (numbers[(medianIndex - 1) - 0.5])) / 2;
	}

	return median;
}

console.log(`resault ${getMedian(1, 2, 3, 4)}`);
console.log(`resault ${getMedian(1, 2, 3, 4, 5)}`);
console.log(`resault ${getMedian(1, 2, 3, 7, 8, 9)}`);
console.log(`resault ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// console.log(getModal(...numbers));

// 3. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = (...numbers) => {

numbers = numbers.filter((element) => Number.isInteger(element));

for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers[i].length; j++) {
			
	}
}
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

 