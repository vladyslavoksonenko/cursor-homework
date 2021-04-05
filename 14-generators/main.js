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

let fontSize = 14;

function* newFontGenerator(pointer) {
  while (true) {
    if (pointer === "up") {
      fontSize += 2;
      yield fontSize;
    } else if (pointer === "down") {
      fontSize -= 2;
      yield fontSize;
    } else {
      yield fontSize;
    }
  } 
}

const fontGenerator = newFontGenerator();
const fontGeneratorDown = newFontGenerator("down");


