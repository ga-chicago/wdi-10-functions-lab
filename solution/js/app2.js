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

