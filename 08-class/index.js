






let arr = ['a', 'b', 'c', 'd', 'd', 'e', 'a'];

    let uniq = arr.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    console.log('result ->', JSON.stringify(uniq));