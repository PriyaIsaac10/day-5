//3.d )  return all the prime number in an array ARROW FUNCTION
const newArray = [1, 3, 2, 5, 10];
 const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

//3. e) Return all the palindromes in an array use ARROW FUNCTION
let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip"];
let palindromes = arr.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes)

//3. c) sum of all the numbers in array use ARROW FUNCTION
const add = arr => arr.reduce((a, b) => a + b, 0);
var arr1 = [3, 6, 1, 5, 8];
var sum = add(arr1);
console.log(sum)

//3. b) convert string to title caps in the string array use ARROW FUNCTION
const capitalize = str => str.length
  ? str[0].toUpperCase() +
    str.slice(1).toLowerCase()
  : '';
const escape = str => str.replace(/./g, c => `\\${c}`);
const titleCase = (sentence, seps = ' _-/') => {
  let wordPattern = new RegExp(`[^${escape(seps)}]+`, 'g');
  return sentence.replace(wordPattern, capitalize);
};
console.log( titleCase("I'm really grateful for you guvi.") );

//3. a) print odd number use ARROW FUNCTION
const isOdd = (n) => (n & 1) === 1;
const num = [1,2,3,4,5,6,7,8,9];
console.log( `Odd numbers are ${ num.filter( n => isOdd(n))}` );
console.log( `Even numbers are ${ num.filter( n => !isOdd(n))}`);

//3. a) print odd number use Anonymous function
var sum=function(a,b,c,d){
return a+b+c+d;
}
console.log(sum(2,3,4,5) );
//IIFE
(function(a,b,c,d){
  console.log(a+b+c+d);
  })(2,3,4,5);
  

