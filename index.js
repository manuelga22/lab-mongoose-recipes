const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// const recipe = mongoose.model("Recipe", Recipe)

// Recipe.create({
//   title: 'Asian Glazed Chicken Thighs',
//   level: 'Amateur Chef',
//   ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
//   cuisine: 'Asian',
//   dishType: 'Dish',
//   image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
//   duration: 40,
//   creator: 'Chef LePapu'
// });

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Recipe.insertMany(data)
.then(() => {
  console.log("It worked")
  recipes.forEach(Recipe =>{});
})
.catch(error=>{
  console.log(error);
});

Recipe.findByIdAndUpdate('5d1d18f01aff8f414c5f45d7',{duration : 100})
.then("success").catch('failed');

Recipe.deleteOne({title:"Carrot Cake"})
.then("success").catch('failed');
