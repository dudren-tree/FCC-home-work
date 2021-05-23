isBalanced('[[[[]]]]')

function isBalanced (str) {
    let stack = [];
    for(let i = 0; i < str.length; i++) {
      let letter = str.charAt(i);
      if(letter == '['){
        stack.push(letter)
      } else if(letter === ']') {
        if(peek(stack) === '[') {
          stack.pop()
        }else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  function peek(stack) {
    return stack[stack.length - 1];
  }

  /////// 100 doors

    // function getFinalOpenedDoors(numDoors) {
    //     let doors = [];
    //     let i = 1, ii = i*i;
    
    //     while (ii <= numDoors) {
    //         doors.push(ii);
    //         i++; 
    //         ii = i*i;
    //     }
    
    //     return doors;
    
    // }
