
function getRandomChinese(length = 4) {
  let i = 0;
  let result = "";
    const promise = new Promise((resolve) => {
      setInterval(() => {
        if (i !== length) {
          const sing = Date.now().toString().slice(-length);
          result += String.fromCharCode(sing);
          i++;
        } else {
          resolve(result);
        }
      }, 50)
    }).then((i) => {
      console.log(i);
    })
  
}

getRandomChinese(4);
