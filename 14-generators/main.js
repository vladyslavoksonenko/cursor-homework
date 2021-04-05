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


const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons[0].addEventListener("click", function () {
  console.log("up", fontGenerator.next("up").value);
  body.style.fontSize = `${fontGenerator.next("up").value}px`;
})

buttons[1].addEventListener("click", function () {
  console.log("down", fontGenerator.next("down").value);
  body.style.fontSize = `${fontGenerator.next("down").value}px`;
})

function* newFontGenerator(fontSize = 14) {
  while (fontSize > 0 && fontSize < 100) {
    const res = yield fontSize;
    if (res === "up") {
      fontSize += 2;
      yield fontSize;
    } else if (res === "down") {
      fontSize -= 2;
      yield fontSize;
    }

  }
}

const fontGenerator = newFontGenerator();


