// 1. Функція отримує будь-яке число та виводить найбільшу цифру в цьому числі

const getMaxDigit = (number) => {
  const numberStr = number.toString();
  let numMax = 0;
  for (let i = 0; i <= numberStr.length; i++) {  
    if (+numberStr[i] > numMax) {
      numMax = numberStr[i];
    }
  }
  return numMax;
}

// 2. функція визначає ступінь числа +

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

// 3. функція форматує ім'я, роблячи першу букву великою

const getName = (name) => {
  let resultName = ``;
  resultName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return resultName;
}

// 4. Вираховує суму, що залишається після оплати податку від зарабітньої плати

const getNatSalary = (taxSocial, taxProfit, salary) => {
  const taxSum = parseFloat(taxProfit) + parseFloat(taxSocial);
  const taxResult = salary * taxSum / 100;
  const result = salary - taxResult;
  return result;
}

// 5. повертає випадкове ціле число в діапазоні від N до M;x

const getRandomNumber = (numMin, numMax) =>  
  Math.round(Math.random() * (numMax - numMin) + numMin);

// 6. Функція рахує скільки разів певна буква повторюється в слові

const countLetter = (char, str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++
    }
  }
  return count;
}

// 7.  конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку

const convertCurrency = (moneyToConvert) => {
  if (moneyToConvert.indexOf('$') > 0) {
    return (parseFloat(moneyToConvert) * 28).toFixed(2) + "UAH";
  } else if (moneyToConvert.toUpperCase().indexOf(('UAH')) > 0) {
    return (parseFloat(moneyToConvert) / 28).toFixed(2) + "$";
  } else {
    return "Невідома валюта"
  };
};

// 8. генерації випадкового паролю (тільки числа)

const getRandomPassword = (numOfCharacts = 8) => {
  let result = "";
  for (let i = 0; i < numOfCharacts; i++) {
    result += Math.round(Math.random() * 9);
  }
  return result;
}

// 9. функція, яка видаляє всі букви з речення

const deleteLetters = (charDelete, string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    charDelete === string[i] ? false : result += string[i];
  }
  return result;
}


// 10. функція, яка перевіряє, чи є слово паліндромом

const isPalyndrom = (string) => {
  let stringNoSpace = string.replaceAll(' ', '');
  let stringCheck = stringNoSpace.split('').reverse().join('');
  return stringNoSpace.toLowerCase() === stringCheck.toLowerCase();
}

// 11. функція, яка видалить з речення букви, які зустрічаються більше 1 разу.

const deleteDuplicateLetter = (string) => {
  const stringLoverCase = string.toLowerCase();
  let arrString = stringLoverCase.split("");
  let result = "";
  for (let i = 0; i < arrString.length; i++) {
    let count = 0;
    for (let j = 0; j < arrString.length; j++) {
      if (arrString[i] === arrString[j] && i !== j) {
        count++;
      };
    }
    if (count < 1) {
      result += arrString[i];
    }
  }
  return result;
}

document.writeln(`
  <h3>Функція №1:</h3>
  <p>Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
  Приклади: 1236 -> 6, 987 -> 9, 385 -> 8</p>
  ${getMaxDigit(23423987654449)}
  <h3>Функція №2:</h3>
  <p>Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл</p>
  ${getDegreeNum(2, 2)}
  <h3>Функція №3:</h3>
  <p>Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);</p>
  ${getName(`vLAD`)}
  <h3>Функція №4:</h3>
  <p>Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805</p>
  ${getNatSalary("18%", "1.5%", "1000")}
  <h3>Функція №5:</h3>
  <p>Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5</p>
  ${getRandomNumber(1, 3)}
  <h3>Функція №6:</h3>
  <p>Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4</p>
  ${countLetter("А", 'Амстердама')}
  <h3>Функція №7:</h3>
  <p>Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
  Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
  Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.</p>
  ${convertCurrency("29uah")}
  <h3>Функція №8:</h3>
  <p>Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
  Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124</p>
  ${getRandomPassword(12)}
  <h3>Функція №9:</h3>
  <p>Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"</p>
  ${deleteLetters("а", "малина")}
  <h3>Функція №10:</h3>
  <p>Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true</p>
  ${isPalyndrom('а роза упала на лапу Азора')}
  <h3>Функція №11:</h3>
  <p>Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"</p>
  ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}
`);