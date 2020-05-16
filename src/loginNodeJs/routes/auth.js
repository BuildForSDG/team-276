const router = require("express").Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation')


router.post('/register', async (req, res) => {
    //I AM VALIDATING THE DATA BEFORE WE MAKE A USER
    //const {error} = schema.validate(req.body);
    const {error} = registerValidation(req.body);
    
    if(error) return res.status(400).send(error.details[0].message);//pull error from the whole error message generated in postman
    
    //Check if user already in DB
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists");
    
    //HASH the password
    const salt = await bcrypt.genSalt(10);//set complexity defaut to 10
    const hashPassword = await bcrypt.hash(req.body.password, salt);//salt combines with password has it and only bcrypt can decrypt it

    
    //Create a new user
    res.send('Register');
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        //Save
        const savedUser = await user.save();
        res.send({ user: user._id });
    }catch(err){
        res.status(400).send(err);
    }
});

//LOGIN
router.post('/login', async (req,res) => {
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        //Check if user already in DB
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send("Email is wrong");
        //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('password is wrong')
    
    //Create and assign a JWT token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)//This Id tells you that the user is logged in
    res.header('auth-token', token).send(token);
    
    res.send("Logged in!")
});
module.exports = router;
