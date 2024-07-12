function merge(arr) {
  // base case
  if (arr.length === 1) {
    return arr;
  }

  // sort left
  const left = merge(arr.slice(0, arr.length / 2));

  // sort right
  const right = merge(arr.slice(arr.length / 2, arr.length));

  // merge
  const mergeArr = [];
  let leftCounter = 0;
  let rightCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      left[leftCounter] < right[rightCounter] ||
      right[rightCounter] === undefined
    ) {
      mergeArr[i] = left[leftCounter];
      leftCounter++;
    } else {
      mergeArr[i] = right[rightCounter];
      rightCounter++;
    }
  }

  return mergeArr;
}

const array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const array2 = [105, 79, 100, 110];

console.log(merge(array1));
console.log(merge(array2));
