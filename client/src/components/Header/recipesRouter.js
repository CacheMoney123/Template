const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    Recipe.find().then(users => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const creator = req.body.creator;
    const name = req.body.name;
    const description = req.body.description;
    const instructions = req.body.instructions;
    const ingredients = req.body.ingredients;

    const recipe = new Recipe({
     creator,
        name,
        description,
        instructions,
        ingredients,
    });

   recipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

/*
 creator: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    },
    instructions: {
        type: [String],
        required: true,
        unique: true,
    },
    ingredients: {
        type: [String],
        required: true,
        unique: false,
    }
 */