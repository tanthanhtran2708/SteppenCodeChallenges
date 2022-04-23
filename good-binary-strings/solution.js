const largestGood = (binString) => {
  const length = binString.length;
  const recursiveHeight = Array(length + 1).fill(0);
  const binNumb = { 1: 1, 0: -1 };
  const isVisited = Array(length + 1).fill(false);
  const trees = {};
  let i;
  let j;
  let result = "";

  for (i = 1; i <= length; ++i) {
    recursiveHeight[i] = recursiveHeight[i - 1] + binNumb[binString[i - 1]];
  }

  for (i = 0; i <= length; ++i) {
    if (isVisited[i]) continue;
    isVisited[i] = true;
    trees[i] = [i];
    for (j = i + 1; j <= length; ++j) {
      if (recursiveHeight[j] < recursiveHeight[i]) break;
      if (recursiveHeight[j] === recursiveHeight[i]) {
        trees[i].push(j);
        isVisited[j] = true;
      }
    }
  }

  for (let k in trees) {
    const leng = trees[k].length;
    let startId, midId, endId;
    for (
      startId = 0;
      length <= 4 ? startId <= leng - 2 : startId < leng - 2;
      ++startId
    ) {
      for (
        midId = startId + 1;
        length <= 4 ? midId <= leng - 1 : midId < leng - 1;
        ++midId
      ) {
        for (
          endId = midId + 1;
          length <= 4 ? endId <= leng : endId < leng;
          ++endId
        ) {
          const start = trees[k][startId];
          const mid = trees[k][midId];
          const end = trees[k][endId] || trees?.[k][1];
          const combination =
            binString.substring(0, start) +
            binString.substring(mid, end) +
            binString.substring(start, mid) +
            binString.substring(end, length);
          if (combination > result) {
            result = combination;
          }
        }
      }
    }
  }

  return result;
};

// TESTS
console.log(`Largest Good of 11011000 is ${largestGood("11011000")}`);
console.log(`Largest Good of 1100 is ${largestGood("1100")}`);
console.log(`Largest Good of 1101001100 is ${largestGood("1101001100")}`);
