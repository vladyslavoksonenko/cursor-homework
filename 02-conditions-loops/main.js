let n;
let m;
let isPairedNum;
let result = 0;

do {
  n = Math.trunc(prompt(`Введіть число N`));
} while (isNaN(n));
do {
  m = Math.trunc(prompt(`Введіть число M`));
} while (isNaN(m));

isPairedNum = confirm('Пропускати парні числа?');

for (n; n <= m; n++) {
  if (isPairedNum) {
    result += n;
  } else {   
    if (n % 2 != 0) {
      result += n;
    }
  }
}

console.log(result);