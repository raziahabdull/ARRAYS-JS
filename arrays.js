 let array =[1,2,3,4,5] 
function reverseStringsArray(arr) {
    const reversedStrings = arr.map(str => [...str].reverse().join(''));
    console.log(reversedStrings);
}
function checkElement(array, index) {
    const number = array[index];
    if (number > 0) {
       return number + " is positive";
    } else if (number < 0) {
       return number + " is negative";
    } else {
       return number + " is zero";
    }
}

const numbers=[-20,-2,-5-3-1];
console.log(checkElement(numbers, -20));

