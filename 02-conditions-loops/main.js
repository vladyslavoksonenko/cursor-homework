let firstNum = null; 
let lastNum = null;
let result = 0;

do {
  firstNum = Math.trunc(prompt(`Введіть число N`));
} while (isNaN(firstNum));  
do {
  lastNum = Math.trunc(prompt(`Введіть число M`));
} while (isNaN(lastNum));

const isPairedNum = confirm('Пропускати парні числа?');

for (let i = firstNum; i <= lastNum; i++) {
  if (isPairedNum && i % 2 === 0) {
    continue;
  } else {   
    result += i;
  }
}

alert(result);
