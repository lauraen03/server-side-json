const express = require('express');
const app = express();
const port = 1800; 


app.use(express.static('public'));


const recipes = [
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1/2 teaspoon baking soda",
      "1 cup unsalted butter, at room temperature",
      "1/2 cup granulated sugar",
      "1 cup brown sugar",
      "2 large eggs",
      "2 teaspoons pure vanilla extract",
      "2 cups semisweet and/or milk chocolate chips",

    
    ],
    instructions: "Preheat the oven, mix dry ingredients, cream butter and sugars, add eggs and vanilla, mix in chocolate chips, drop spoonfuls of dough onto baking sheets, and bake.",
    image: "chocolate-chip-cookies.jpg",
  },
  {
    id: 2,
    name: "Yellow Cake",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "2 1/2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 cup unsalted butter, at room temperature",
      "2 cups granulated sugar",
      "4 large eggs",
      "1 tablespoon pure vanilla extract",
      "1 cup whole milk",
    ],
    instructions: "Preheat the oven, mix dry ingredients, cream butter and sugar, add eggs and vanilla, add dry and wet ingredients alternately, and bake.",
    image: "yellow-cakes.jpg",
  }
  
];


app.get('/api/data', (req, res) => {
  res.json(recipes);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
