const router = require('express').Router();
let Recipe = require('../models/recipes.model')

router.route('/').get((req, res) => {
    Recipe.find().then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const recipe_name = req.body.recipe_name;
    const recipe_creator = req.body.recipe_creator;
    const recipe_ingredients = req.body.recipe_ingredients;

    const newRecipe = new Recipe({
        recipe_name,
        recipe_ingredients,
        recipe_creator,
    });

    newRecipe.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
