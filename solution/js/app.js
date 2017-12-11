/******************

Reuben's solution to the functions lab

 ******************/

// 1. lengths(str): takes array of strings and returns array of lengths of those strings
function lengths(stringArray) {
  let lengthsArray = [];
  for(let i = 0; i < stringArray.length; i++) {
    lengthsArray.push(stringArray[i].length);
  }
  return lengthsArray;
}

function lengths2(stringArray) {
  return stringArray.map((e) => {
    return e.length;
  });
}

// 2. transmogrifier: return product of first 2 args, raised to the power of the 3rd
function transmogrifier(a, b, c) {
  // step 1. Multiplication
  var product = a * b;
  // step 2. Exponentiation
  var exp = Math.pow(product, c);
  return exp;
}

function transmogrifier2(a, b, c) {
  return Math.pow((a*b), c);
}

// 3.  
function maxOfTwoNumbers(a, b) {
  if(a>b) return a;
  else return b;
}

//4.  
function maxOfThree(a, b, c) {
  return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}

//5. 
function isCharacterAVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i = 0; i < vowels.length; i++) {
    if(char == vowels[i] || char==vowels[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

function isCharacterAVowel2(char) {
  return (['A', 'E', 'I', 'O', 'U'].indexOf(char.toUpperCase()) != -1);
}


//6. 
function sumArray(arr) {
  var sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumArray2(arr) {
  return arr.reduce((a, b)=> {
    return a + b;
  }, 1);
}

//7. 
function numOfArgs() {
  return arguments.length;
}

//8. 
const reverseString = (str) => {
  let strToReturn = ""
  for(let i = str.length -1; i >= 0; i--) {
    strToReturn += str[i]
  }
  return strToReturn;  
}

function reverseString2(str) {
  return str.split('').reverse().join('');
}

//9. 
function findLongestWord(arr) {
  let longestSoFar = "";
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longestSoFar.length) {
      longestSoFar = arr[i];
    }
  }
  return longestSoFar.length;
}

// 10.  returns wors longer than `len` characters 
function filterLongWords(arr, len) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}


//Bonus 1
String.prototype.revStr = function() {
  return this.split('').reverse().join('')
};

String.prototype.reverseString2 = function () {
  var strToReturn = "";
  for(let i = this.length-1; i >= 0; i--) {
    strToReturn += this[i];
  }
  return strToReturn;
}

//Bonus 2
function objectify(str) {
  let arrayOfChars = str.toLowerCase().split('');
  let output = {};
  for(let i = 0; i < arrayOfChars.length; i++) {
    // taken from: https://stackoverflow.com/a/9862788/5924190 
    if(!arrayOfChars[i].match(/[a-z]/i)) { 
      // do nothing
    }
    else {
      if(output[arrayOfChars[i]]) {
        output[arrayOfChars[i]]++;
      } else {
        output[arrayOfChars[i]] = 1;
      }
    }
  }
  return output;
}



// const triangulate=(num)=>{
//     let hashArray =[];
//      for (var i = 1; i <= num; i++) {
//          for (var j = 1; j <= num; j++){ 
//           hashArray.push("#");
//             num --;
//             console.log(hashArray.join('') + "\n");
//          }
//      }
//  }




// const triangulateRight=(num)=>{
//     // this array will store ____
//     // is it possible you might want this to be inside the outer for loop
//     let hashArray = [];

//     //for loop to iterate through num
//     for (let i = 1; i <= num; i++) {
//       let hashArrayInLoop = [];

//       // add num-i spaces to hashArray
//       for(let j = 0; j <= num-i; j++) {
//         hashArrayInLoop.push(" ")
//       }

//       // add i #s to hashArray
//       for(let k = 1; k <= i; k++) {
//         hashArrayInLoop.push("#")
//       }

//       // for (var j = 1; j <= num; j++){ 
//       //   hashArray.push("#");
//       //   num--;
//       //   console.log(hashArray.join('') + "\n");
//       // }



//       //console.log hashArray
//       console.log(">" + hashArrayInLoop.join('') + "\n");
//     }
// }
// // triangulate(7);


// const triangulateRightTravis=(num)=>{

//     //for loop to iterate through num -- we want 7 console.logs total -- one per line
//     for (var i = 1; i <= num; i++) {
//       // this is the line we are building each time through the loop
//       let hashArray =[];

//       // add num-i spaces to hashArray


//       // add i #s to hashArray


//       // print/console.log the line

//     }
// }




// const triangulate3=(num)=>{
//   for (var i = 1; i <= num; i++) {
//     let hashArray =[];
//     hashArray.push(" ");

//       for (var j = 1; j <= num; j++){ ; 
//           hashArray.push("#");
//           num --;
//           console.log(hashArray.join('') + "\n");
//        }  
//    }
// }

// const triangulate4=(num)=>{
//   // loop 7* through
//   for (var i = 1; i <= num; i++) {
//   // create an array for the first row 
//     let hashArray =[];
 
//     // fill the row with 7 spaces 

//     // Count to 7 from 1
//     for (var j = 1; j <= num; j++){
//     // for each number replace a " " with a "#"

//       hashArray.push("#");
//       // make the number smaller by one each loop  
//       num --;

//       // log it
//       console.log(hashArray.join('') + "\n");
//     }  
//   }
// }








































