const router = require('express').Router();
let Recipe = require('../models/recipe.model')


router.route('/').get((req, res) => {
    Recipe.find( { recipeCreatorID: req.body.recipeCreatorID}).then(
        recipe => res.json(recipe), console.log("Found recipes"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
    Recipe.find( {recipeName: req.body.recipeName}).then(
        recipe => res.json(recipe), console.log("Found recipe"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const recipeName = req.body.recipeName;
    const recipeCreatorID = req.body.recipeCreatorID;
    const recipeDescription = req.body.recipeDescription;
    const timeToPrepareMins = req.body.timeToPrepareMins;
    const recipeIngredients = req.body.recipeIngredients;

    const newRecipe = new Recipe({
        recipeName,
        recipeCreatorID,
        recipeDescription,
        timeToPrepareMins,
        recipeIngredients
    });

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;