
// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
// max – максимальне значення цілого числа. +

const getRandomArray = (length, min, max) => {

  const randomArray = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random()*(max - min) + min);
    randomArray.push(randomNumber);
  }

  return randomArray;
}

console.log(`Func 1 ${getRandomArray(10, 1, 3)}`);

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2  НЕЗАКІНЧЕНО

const getModa = (...numbers) => {

  const arrNumbers = [...numbers];

  arrNumbers.sort((a, b) => a - b);

  const objValues = {};

  arrNumbers.forEach(item => {
    objValues[item] = objValues[item] + 1 || 1;
  }, [])

  let moda = [];
  let countDigits = 1;

  for (let key in objValues) {
    if (objValues[key] > countDigits) {
      moda = key;
      countDigits = objValues[key]
    } else if (objValues[key] === countDigits) {
      moda.push(key);
    }
  }
  return moda;
}

console.log('func 2 ' + getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 +

const getAverage = (...numbers) => {

  let sumNumber = null;

  numbers = numbers.filter((element) => Number.isInteger(element));
  sumNumber = numbers.reduce((prev, current) => (prev || 0) + current);

  const result = (1 / (numbers.length)) * sumNumber;
  
  return result;
}

console.log("func 3 ", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 

const getMedian = (...numbers) => {

  let median = medianIndex = null; 	

  numbers.sort((a, b) => a - b);

  const numbersFiltered = numbers.filter((element) => Number.isInteger(element));

  medianIndex = (numbersFiltered.length + 1) / 2; 
	
  if (numbersFiltered.length % 2 !== 0) {
    median = numbersFiltered[medianIndex - 1]; 
  } else {
    median = ((numbersFiltered[(medianIndex - 1) + 0.5]) + (numbersFiltered[(medianIndex - 1) - 0.5])) / 2;
  }

  return median;
}

//console.log(`resault ${getMedian(1, 2, 3, 4)}`);
//console.log(`resault ${getMedian(1, 2, 3, 4, 5)}`);
//console.log(`resault ${getMedian(1, 2, 3, 7, 8, 9)}`);
console.log(`func 4  ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

// console.log(getModal(...numbers));

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] +

const filterEvenNumbers = (...numbers) => {	
  return numbers.filter((element) => element % 2 !== 0); 
}

console.log("Func 5 " + filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = (...numbers) => {

  let result = 0;

  const filterPositiveNumbers = numbers.filter((element) => element > 0); 

  return filterPositiveNumbers.length;
  
}

console.log("Func 6 " + countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) => {
  return numbers.filter((element) => element % 5 === 0);
}

console.log("Func 7 " + getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// document.writeln(`
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">1.</span> 
//     Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
//     У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, 
//     max – максимальне значення цілого числа.
//   </p>
//   <p>
//     getRandomArray(10, 1, 3)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${getRandomArray(10, 1, 3)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">2.</span> 
//     Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
//   </p>
//   <p>
//     getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">3.</span>
//     Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//   </p>
//   <p>
//     getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">4.</span>
//     Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ 
//   </p>
//   <p>
//     getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">5.</span>
//     Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції 
//   </p>
//   <p>
//     filterEvenNumbers(1, 2, 3, 4, 5, 6)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${filterEvenNumbers(1, 2, 3, 4, 5, 6)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">6.</span>
//     Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0 
//   </p>
//   <p>
//     countPositiveNumbers(1, -2, 3, -4, -5, 6)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${countPositiveNumbers(1, -2, 3, -4, -5, 6)}
//   </p>
//   <p>
//     <span style="font-size: 18px; font-weight: bold;">7.</span>
//     Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//   </p>
//   <p>
//     getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//   </p>
//   <p>
//     <span style="font-weight: bold; font-size: 18px;">Result: </span>${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
//   </p>
// `);


