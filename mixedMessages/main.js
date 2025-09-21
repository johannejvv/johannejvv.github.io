

//output layout
/*console.log('');
console.log("=======================================================");
console.log("For dinner you are having shephard's pie and ice cream!");
console.log("================== <3 =================================");*/


const mealTimeArr = ["breakfast", "lunch", "dinner"];
const mainsArr = ["shepard's pie", "pizza", "scrambled eggs", "waffles", "butternut soup"];
const dessertArr = ["ice cream", "donuts", "fruit salad", "chocolate mousse", "creme brulee"];

let selectMealTime = Math.floor(Math.random()*(mealTimeArr.length));
let selectMains = Math.floor(Math.random()*(mainsArr.length));
let selectDessert = Math.floor(Math.random()*(dessertArr.length));

function createMessage () {
  let mealTime = mealTimeArr[selectMealTime];
  let mains = mainsArr[selectMains];
  let dessert = dessertArr[selectDessert];

  console.log("==============================================================");
  console.log(`For ${mealTime} you are having ${mains} and ${dessert}!`);
  console.log("================== <3 ========================================");
};

createMessage();