// Тарифи
const priceRateMin = 15.678;
const priceRateMax = 123.965;
const priceRateComfort = 90.2345;
const pay = 500;

// Максимальне число 
const numberMax = Math.max(priceRateMin, priceRateComfort, priceRateMax);

// Мінімальне число
const numberMin = Math.min(priceRateMin, priceRateComfort, priceRateMax);

// Вартість всіх товарів
const priceSum = priceRateComfort + priceRateMax + priceRateMin;

// Вартість всіх товарів з округленням
const priceSumFloor = Math.floor(priceRateMin) + Math.floor(priceRateMax) + Math.floor(priceRateComfort);

// Вартість всіх товарів округлена до сотень
const hundredsSum = Math.round(priceSum / 100) * 100;

// Булеве значення чи є парним
let booleanSumFloor;
priceSumFloor % 2 ? booleanSumFloor = false : booleanSumFloor = true;

// Сумма решти при оплаті
const surrender = pay - priceSum;

// Cереднє значення цін
const middlePrice = (priceSum / 3).toFixed(2);

// Знижка
const discount = (Math.random() * 100).toFixed(0);
const sumPay = (priceSum - ((priceSum * discount) / 100)).toFixed(2);
const property = priceSum / 2;
const arrival = Math.round(sumPay - property);
console.log(`Максимальне число: ${numberMax}
Мінімальне число: ${numberMin}
Вартість всіх товарів: ${priceSum}
Вартість всіх товарів з округленням ${priceSumFloor}
Вартість всіх товарів округлена до сотень ${hundredsSum}
Булеве значення чи парне ${booleanSumFloor}
Сумма решти при оплаті ${pay}: ${surrender}
Cереднє значення цін: ${middlePrice}
Ваша знижка ${discount}% Сумма до оплати: ${sumPay}
Чистий прибуток ${arrival};

`);

