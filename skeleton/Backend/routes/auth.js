const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchuser = require('../middleware/fetchuser')

const jwtsecret = 'abcd'
// Route 1 : create a user using post '/api/auth/createUser' No login required
router.post('/createUser', [
    body('name', 'enter valid name').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'enter valid passwordd').isLength({ min: 4 })
], async (req, res) => {
    let success=false
    // if there are error return bad requests and show error

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    // check whether user with this email exists already 
    try {


        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success,error: 'sorry a user with this email already exist' })
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email
        })
        const data = {
            user: {
                id: user.id
            }
        }
        success=true
        const authtoken = jwt.sign(data, jwtsecret)
        res.send({success, authtoken })

    }
    catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }

})


//Route 2: Authentiicatte  a user using post '/api/auth/login' Now login required
router.post('/login', [

    body('email', 'enter a valid email').isEmail(),
    body('password', 'passwordd cannot be blanc').exists()
], async (req, res) => {
    // if there are error return bad requests and show error
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            success=false
            return res.status(400).json({ errors: "please enter correct credentials" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success=false
            return res.status(400).json({ errors: "please enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, jwtsecret)
        success=true
        res.send({ success,authtoken })

    } catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }

}
)

//Route 3: get logged in user info using post '/api/auth/getuser'  login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }
})
module.exports = router