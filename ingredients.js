const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let item = 0;
while (item < ingredients.length) {
  console.log(ingredients[item]);
  item++
}

// Write a for loop that prints out the contents of ingredients:

for (let item = 0; item < ingredients.length; item++) {
  console.log(ingredients[item]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let item = ingredients.length - 1; item >= 0; item--) {
  console.log(ingredients[item]);
  
  }