// function mutilplyNumber(param1, param2) {
//   const result = param1 * param2;
//   return result;
// }

const { time } = require("console");

// const mutilply1 = mutilplyNumber(5, 5);
// console.log(mutilply1);

// // Function to calculate the sum of two numbers
// function sumTwoNumbers(param1, param2) {
//   const result = param1 + param2;
//   return result;
// }

// const add1 = sumTwoNumbers(5, 5);
// console.log(add1);

// // Rewrite it using arrow function
// const sumTwoNumbersArrow = (param1, param2) => param1 + param2;
// console.log(sumTwoNumbersArrow(2, 1));

// // With a block
// const calculatePercentageScore = (param1, param2) => {
//   const baseResult = param1 / param2;
//   const result = baseResult * 100;
//   return Math.round(result);
// };

// console.log(calculatePercentageScore(4, 10));

// // Write a fucntion that returns the mean of two or three numbers
// const meanNumbers = (param1, param2) => {
//   const meanResult = param1 + param2;
//   const finalResult = meanResult / 2;
//   return finalResult;
// };

// const meanNumber1 = meanNumbers(5, 5);
// console.log(meanNumber1);

// // Fuction Scope
// const parantFuc = () => {
//   const name = "Bassey";

//   function splitName() {
//     console.log(name.split(""));
//   }

//   setTimeout(splitName, 10000);
//   splitName();
// };

// parantFuc();

// const eatingGariTime = () =>{
//   const gariTime = 8;
//   return gariTime;
//   // console.log(gariTime);
// }

// console.log(eatingGariTime());

const myName = () => {
  const name = "khalid";
  function secondName() {
    console.log(name);
  }
  secondName();
  secondName();

  setTimeout(secondName, 10000);
  setTimeout(secondName, 15000);

  // secondName();
  // secondName();
  // secondName();
  // secondName();
};
myName();

function* numberGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Create a generator for numbers from 1 to 5
const myGenerator = numberGenerator(1, 5);

// Iterate over the generated numbers using a for...of loop
for (const number of myGenerator) {
  console.log(number);
}

// divine

function swapLetter(text) {
  let x = text.split("");

  for (let i = 0; i < x.length; i++) {
    switch (x[i]) {
      case "":
        break;
      case "z":
        x[i] = "a";
        break;
      case "Z":
        x[i] = "A";
        break;
      default:
        x[i] = String.fromCharCode(1 + x[i].charCodeAt(0));
    }
  }
  return x.join("");
}

console.log(swapLetter("zoology"));

// Luthor Question
// Write a script that changes the case of words with at least two character / letter to words in uppper case or lower case. A case instance where "drink" will change to drink and "Map" will change to "MAP"

function caseChanger(charInput) {
  let upperCharNum = 0;
  let lowerCharNum = 0;

  for (let i = 0; i < charInput.length; i++) {
    if (/[A-Z]/.test(charInput[i])) {
      upperCharNum++;
    } else {
      lowerCharNum++;
    }
  }

  if (upperCharNum > lowerCharNum) {
    return charInput.toUpperCase();
  } else {
    return charInput.toLowerCase();
  }
}

console.log(caseChanger("loWER"));

//Write a script that will loop over an array and count all the elements of that array.
function countArray(array) {
  let num_cycles = 0;
  for (let i = 0; i < array.length; i++) {
    num_cycles += 1;
    console.log(num_cycles);
  }
  return;
}

const arr1 = countArray(["red", "lilac", "indigo", "blue", "ruby"]);
console.log(arr1);

//write a script that print daily train schedules for tuesday and wednesday such that the time to train arrival depends on when passange gets to the station

// const time = 12;
// // const wednesday = 5;

// switch ("tuesday") {
//   case "tuesday":
//     console.log(`Your train will arive at your destination att ${tuesday}`)
//     break;
//   case "wednesday":
//     console.log(`Your train will arive at your destination att ${dailySchedule.wednesday}`)
//     break;
//   default:
//     console.log(`Your train will will nott arrive today ooh better look for alternative`);
// }

// const currsssentTime = new Date();
// console.log(currsssentTime.getHours());

const trainSchedule = () => {
  const curretnTime = new Date();
  const curentCurentTime = curretnTime.getDate();

  if (curretnTime === curentCurentTime) {
    console.log(true);
  } else {
    console.log(false);
  }
};

trainSchedule();