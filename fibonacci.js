function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}

function fibsRec(n) {
  if (n <= 1) {
    return [0, 1];
  }
  const array = fibsRec(n - 1);
  return [...array, array[n - 1] + array[n - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));
