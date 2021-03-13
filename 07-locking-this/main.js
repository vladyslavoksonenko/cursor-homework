const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; 
// – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log("func 1: ukraine " + getMyTaxes.call(ukraine, 2000));
console.log("func 1: latvia " + getMyTaxes.call(latvia, 2000));
console.log("func 1: litva " + getMyTaxes.call(litva, 2000));
console.log('');

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; 
// – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
// Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
  return this.middleSalary;
}

console.log("func 2: ukraine " + getMiddleTaxes.call(ukraine));
console.log("func 2: latvia " + getMiddleTaxes.call(latvia));
console.log("func 2: litva " + getMiddleTaxes.call(litva));
console.log('');

// 3. Створіть функцію getTotalTaxes.call(country) -> number; 
// – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). 
// Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log("func 3: ukraine " + getTotalTaxes.call(ukraine));
console.log("func 3: latvia " + getTotalTaxes.call(latvia));
console.log("func 3: litva " + getTotalTaxes.call(litva));
console.log("");

// Створіть функцію getMySalary(country) 
// – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function randomNumber(min, max, toFix = 0) {
  return ((Math.random() * (max - min)) + min).toFixed(toFix);
}

function getMySalary(country) {
  let salary = randomNumber(1500, 2000);
  let taxes = salary * this.tax;
  let profit = salary - taxes;
  return {salary: salary, taxes: taxes, profit: profit};
}

setInterval(() => {
  console.log(getMySalary.call(ukraine));
  console.log(getMySalary.call(latvia));
  console.log(getMySalary.call(litva));
}, 10000);
