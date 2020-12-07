const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    recipeDescription: {
        type: String,
        required: true,
        minlength: 10
    },
    timeToPrepareMins: {
        type: Number,
        required: true
    },
    recipeCreatorID: {
        type: String,
        required: true,
        unique: true,
    },
    recipeIngredients: {
        type: [String],
        required: true,
        unique: false,
    }
}, {
    timestamps: true,
} )

const recipe = mongoose.model('Recipe', recipeSchema);

module.exports = recipe;