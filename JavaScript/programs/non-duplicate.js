const nums = [1, 1, 8, 3, 3, 4, 4];
console.log(findNonDuplicate(nums));

// aproach 1
function findNonDuplicate(arr) {
  return arr.filter((ele, index) => arr.indexOf(ele) === arr.lastIndexOf(ele));
}

//approach 2
function findNonDuplicate(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      return arr[i];
    }
  }
  return -1;
}
