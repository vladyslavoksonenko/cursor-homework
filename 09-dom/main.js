

const squares = document.querySelector('.squares');

const getRandomColor = () => {

  const max = 255, min = 0;
  const color = {
    r: 0,
    g: 0,
    b: 0
  }

  for (const key in color) {
    color[key] = Math.round(((Math.random() * (max - min)) + min));
  }

  return `rgb(${color.r},${color.g},${color.b})`;
}



const generateBlocks = () => {

  squares.innerHTML = "";

  const stylesBlock = "width: 50px; height: 50px; display: inline-block; padding: 0;"

  for (let i = 0; i < 25; i++) {

    const block = document.createElement("div");
    block.style.display = "flex";
  
    if (i % 5 === 0 || i === 0) {
      
      squares.appendChild(block);

      for (let j = 0; j < 5; j++) {  

        const square = document.createElement('div');  
        let randomColor = getRandomColor();

        square.style.cssText = stylesBlock;
        square.style.backgroundColor = `${randomColor}`;
        square.setAttribute("class", "square")
        block.appendChild(square);
      }

    }

  }

}

const generateBlocksInterval = () => {

  squares.innerHTML = "";

  generateBlocks();

  const square = document.querySelectorAll(".square")

  setInterval(() => {

    square.forEach((element) => {

      const randomColor = getRandomColor();

      element.style.backgroundColor = randomColor;

    });

  }, 1000);
};