// 1. takes an array of words and tells 
// the length of each words in the array
function lengths(words) {

  // this is what we will return
  let done = [];  

  // let splitWords = words.split(' ');

  // iterate thru words and return length
  for(let i = 0; i < words.length; i++) {
    // build `done` 
    let steppy = words[i].length;
    done.push(steppy);

  }

  return done;

}




// 2. raise product of first two numbers to 
// the power of the third
function transmogrify(numA, numB, numC) {
  // multiply a + b
  let mult = (numA * numB);
  // exponent c
  let exp = Math.pow(mult, numC);

  return exp;

}




// 3. 
function maxOfTwoNumbers(num1, num2) {

  if(num1 < num2) {
    return num2;
  } else if (num2 < num1) {
    return num1;
  } else {
    return num2;
  }
}


//4. maxOfThree
function maxOfThree(num1, num2, num3) {
  // evaluate first 2 using above function
  let larger = maxOfTwoNumbers(num1, num2);
  let largest = maxOfTwoNumbers(larger, num3);
  return largest;
}

function maxOfThreeReuben(a, b, c) {
  return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}
















