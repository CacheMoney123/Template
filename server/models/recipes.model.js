const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    recipe_name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    recipe_ingredients: [{
        type: String,
        required: true,
        minlength: 3
    }],
    recipe_creator:
        type: String,
        required: true,
        minlength: 3
}, {
    timestamps: true,
} )

const Recipe = mongoose.model('Recipe', userSchema);

module.exports = Recipe;
