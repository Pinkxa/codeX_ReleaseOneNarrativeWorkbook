var even = function (num) {
return num % 2 === 0;
};
//the numbers
var numbers = [1, 13, 17, 4, 33, 19, 8 , 49, 45, 23,67,22,99,84, 23, 94];

//find the even numbers
var evenNumbers = numbers.filter(even);

//write the even numbers to the console
console.log(4, 8, 22, 84, 94);