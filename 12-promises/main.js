
async function getRandomChinese(length = 4) {
  let result = "";

  for (let i = 0; i < length; i++) {
      await getRandomChine(length)
      .then((char) => {
        result += char;
      })
  }
  console.log(result);

}

function getRandomChine(length) { 

  return new Promise((resolve) => {
    setTimeout(() => {
      let sing;
      sing = +Date.now().toString().slice(5);
      resolve(String.fromCharCode(sing));
    }, 50);
  })
  
}



getRandomChinese(4);
