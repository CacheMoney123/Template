const express = require('./config/express.js')
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

const usersRouter = require('./routes/usersRouter')
//app.use('/users', usersRouter)
app.use('/users', usersRouter)

const recipeRouter = require('./routes/recipeRouter')
app.use('/recipe' , recipeRouter)

app.listen(port, () => console.log(`Server now running on port ${port}!`));
