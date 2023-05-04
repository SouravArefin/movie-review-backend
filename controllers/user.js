
const User = require('../models/user')
exports.create =async (req, res) => {
    const { name, email, password } = req.body
    const oldUser = await User.findOne({ email })
   
    if (oldUser) {
            return res.status(401).send({ error: 'User already exists' })
        }
    const newUser = new User({ name, email, password })
    await newUser.save()
    
    res.status(201).json({user:newUser})
  
}