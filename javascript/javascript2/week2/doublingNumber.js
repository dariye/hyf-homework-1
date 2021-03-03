function doubleOddNumbers(arr){
    let filteredArr = arr.filter(item => item%2);
    return filteredArr.map(item => item * 2);
}
let numbers = [1, 2, 3, 4];
let newNumbers = doubleOddNumbers(numbers);
console.log(newNumbers);