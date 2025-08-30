const nums =[1, 2, 2, 3, 4, 1];
console.log(findDuplicate(nums));

function findDuplicate(a) {
    return a.filter((i, index) =>a.indexOf(i) !== index);
}