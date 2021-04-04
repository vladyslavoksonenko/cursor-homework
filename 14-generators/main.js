//Завдання 1:
//Створіть нескінченний генератор ідентифікаторів.

function* createIdGenerator() {
  for (let i = 0; true; i++) {
    yield i;
  }
}

const idGenerator = createIdGenerator();

//Завдання 2 (advanced)
//Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)


function* newFontGenerator(number = 14) {
  
}