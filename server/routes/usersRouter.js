const userRouter = require('express').Router();
let User = require('../models/user.model');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT =  require('jsonwebtoken');

const signToken = userID =>{
    return JWT.sign({
        iss : "CacheMoneyAdmin",
        sub : userID 
    }, "CacheMoney$$", {expiresIn: "1h"});
}

userRouter.route('/').get((req, res) => {
     User.find( {username: req.body.username, password: req.body.password}).then(
        users => res.json(users), console.log("Found account"))
    .catch(err => res.status(400).json('Error: ' + err));
});

userRouter.route('/add').post((req, res) => {
    const { username, password, name } = req.body;
    User.findOne({username}, (err, user)=>{
        if(err)
            res.status(500).json({message: {msgBody: "Error occurred", msgError: true }});
        if(user)
            res.status(400).json({message: {msgBody: "Username is already taken", msgError: true }});
        else {
            const newUser = new User({username, password, name });

            // newUser.save().then(() => res.json('Account added!'))
            // .catch(err => res.status(400).json('Error: ' + err));
            newUser.save(err => {
                if(err) {
                    console.log(newUser.username, newUser.name);
                    res.status(500).json({message: {msgBody: "Error 2 is occurred", msgError: true }});
                }
                else
                    res.status(201).json({message: {msgBody: "Account created successfully", msgError: true }});
            })
        }
    })
});

userRouter.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
    if(req.isAuthenticated()){
        const{_id, username} = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, {httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true, user: {username}});
    }
})

userRouter.get('/logout', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.clearCookie('access_token');
    res.json({user: {username: ""}, success: true});
})

userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
    const {username} = req.user;
    res.status(200).json({isAuthenticated : true, user : {username}});
});


module.exports = userRouter;