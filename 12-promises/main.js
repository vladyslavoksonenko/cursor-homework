
function getRandomChinese(length = 4) {
  let result = ""
  for (let i = 0; i < length; i++) {
  new Promise((resolve) => {
      setTimeout(() => {
        resolve(getRandomChine(length));
      }, 500);
  }).then((char) => {
    result += char
    console.log(result);
  })
  }
  
}


function getRandomChine(length) {

  const sing = Date.now().toString().slice(-length);
  return String.fromCharCode(sing);
  
}



getRandomChinese(4);
