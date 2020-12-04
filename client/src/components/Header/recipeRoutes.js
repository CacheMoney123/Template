const router = require('express').Router();
let Recipe = require('../models/recipe.model')


router.route('/').get((req, res) => {
    Recipe.find( {userID: req.body.userID}).then(
        users => res.json(users), console.log("Found recipes by " + req.body.userID + " : " + res.json))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/searchRecipe' , (req, res) => {
    Recipe.find({recipeName: req.body.recipeName})
        .then(recipe =>{
            res.json({recipe})
        })
        .catch(err=>{
            console.log(err)
        })

})

router.route('/add').post((req, res) => {
    const recipeName = req.body.recipeName;
    const userID = req.body.userID;
    const ingredients = req.body.ingredients;
    const instructionsDesc = req.body.instructionsDesc;

    const newRecipe = new Recipe({
        recipeName,
        userID,
        ingredients,
        instructionsDesc
    });

   newRecipe.save()
        .then(() => res.json('Recipe added under user' + userID + '!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;