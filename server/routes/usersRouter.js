const router = require('express').Router();
let User = require('../models/user.model')


router.route('/').get((req, res) => {
     User.find( {username: req.body.username, password: req.body.password}).then(
        users => res.json(users), console.log("Found account"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    
    const newUser = new User({
        username,
        password,
        email,
        name,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;