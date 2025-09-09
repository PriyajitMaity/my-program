const nums = [1, 2, 3, 4, 4];
console.log(findDuplicate(nums));

//approach 1
function findDuplicate(a) {
  const duplicate = a.filter((i, index) => a.indexOf(i) !== index);
  return duplicate.length > 0 ? duplicate[0] : -1;
}

//approach 2
function findDuplicate(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return arr[i];
    }
  }
  return arr.length > 0 ? arr[0] : -1;
}
