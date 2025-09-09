const a =[1, 2, 3, 2, 1, 4];
console.log(duplicate(a));


function duplicate (arr){
    return arr.filter((num, index) =>arr.indexOf(num) ===index);
}