const collection = require('../models/LoginModel');

exports.addDetailSignup = async (req, res) => {
    const { email, password } = req.body;

    const data={
        email: email,
        password: password
    }

    try {
        // Validations
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const check = await collection.findOne({email:email})
        if(check){
            res.json("exists")
        }
        else{
            res.json("Does not Exist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("Does not Exist")
    }
};

exports.getDetail = async(req, res) => {
    try {
        console.log(req.body);
        const {email, password} = req.body;
        const login = await collection.findOne({ email: email })
        res.status(200).json(login)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'})
    }
}

