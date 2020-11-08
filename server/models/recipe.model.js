const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    creator: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        unique: false,
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
}, {
    timestamps: true,
} )

const Recipe = mongoose.model('Recipe', userSchema);

module.exports = Recipe;