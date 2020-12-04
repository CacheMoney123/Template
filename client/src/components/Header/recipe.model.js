const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
<<<<<<< Updated upstream
    creator: {
=======
   recipeName: {
>>>>>>> Stashed changes
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
<<<<<<< Updated upstream
    description: {
=======
    userID: {
>>>>>>> Stashed changes
        type: String,
        required: true,
        minlength: 3
    },
<<<<<<< Updated upstream
    instructions: {
=======
    ingredients: {
>>>>>>> Stashed changes
        type: [String],
        required: true,
        unique: true,
    },
<<<<<<< Updated upstream
    ingredients: {
        type: [String],
=======
    instructionsDesc: {
        type: String,
>>>>>>> Stashed changes
        required: true,
        unique: false,
    }
}, {
    timestamps: true,
} )

<<<<<<< Updated upstream
const Recipe = mongoose.model('Recipe', userSchema);
=======
const Recipe = mongoose.model('User', recipeSchema);
>>>>>>> Stashed changes

module.exports = Recipe;