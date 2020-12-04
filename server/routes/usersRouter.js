const router = require('express').Router();
let User = require('../models/user.model')

router.route('/').get((req, res) => {
<<<<<<< Updated upstream
    User.find().then(users => res.json(users))
=======
     User.find( {username: req.body.username, password: req.body.password}).then(
        users => res.json(users), console.log("Found account" + res.json))
>>>>>>> Stashed changes
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/searchUser' , (req, res) => {
    User.find({username: req.body.username})
        .then(user =>{
            res.json({user})
        })
        .catch(err=>{
            console.log(err)
        })

})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const newUser = new User({
        username,
        password,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;