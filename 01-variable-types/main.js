// Тарифи
const priceRateMin = 15.678;
const priceRateMax = 123.965;
const priceRateComfort = 90.2345;
const pay = 500;

console.log(Math);
console.log(2);
// Максимальне число
console.log(`Максимальне число: ${Math.max(priceRateMin, priceRateComfort, priceRateMax)}`);

// Мінімальне число
console.log(`Мінімальне число: ${Math.min(priceRateMin, priceRateComfort, priceRateMax)}`);

// Вартість всіх товарів
const priceSum = priceRateComfort + priceRateMax + priceRateMin;
console.log(`Вартість всіх товарів: ${priceSum}`);

// Вартість всіх товарів з округленням
const priceSumFloor = Math.floor(priceRateMin) + Math.floor(priceRateMax) + Math.floor(priceRateComfort);
console.log(`Вартість всіх товарів з округленням ${priceSumFloor}`);

// Вартість всіх товарів округлена до сотень НЕ ЗАКІНЧЕНО
// let i;

// for (i = 1; i > priceSum.length; i++) {
//     priceSum[i] = 0;
//     console.log(`Вартість всіх товарів округлена до сотень: ${priceSum}`);
// }
//  console.log(Math.round(priceSum).length);

// Булеве значення чи є парним
priceSumFloor % 2 ? console.log(false) : console.log(true);

// Сумма решти при оплаті
console.log(`Сумма решти при оплаті ${pay}: ${priceSum - pay}`);

// Cереднє значення цін
console.log(`Cереднє значення цін: ${(priceSum / 2).toFixed(2)}`);

// Знижка НЕ ЗАКІНЧЕНО
const discount = (Math.random() * 100).toFixed(0);

console.log(`Ваша знижка ${discount}% Сумма до оплати: ${(priceSum - (priceSum * discount / 100)).toFixed(2)}`);



