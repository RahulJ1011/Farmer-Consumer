
const consumer = require('../models/consumer');
const producer = require('../models/producer');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const ConsumerRegister = async(req,res)=>
{
    try
    {
        const {Name,Email,Password} = req.body;
        const isUser = consumer.find({Email:Email});
        if(isUser)
        {
            return res.status(400).json({message:"Email already exists"});
        }
        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = new consumer({
         Name,
          
          Email,
          Password: hashedPassword,
          
        });
    
        await newUser.save();
    
        return res.status(201).json(newUser);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:"Internal Server Error"})
    }
}


const consumerLogin = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        // Check if the user exists
        const isUser = await consumer.findOne({ Email });
        if (!isUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Verify the password
        const isPasswordCorrect = await bcrypt.compare(Password, isUser.Password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ msg: "Wrong Password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: isUser._id },
            process.env.JWT || "default_secret_key",
            { expiresIn: "1h" } // Token expiration time
        );

       
        const loggedUser = isUser.toObject();
        delete loggedUser.Password;

        return res.status(201).json({ token, loggedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = {consumerLogin,ConsumerRegister}
