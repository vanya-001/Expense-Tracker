const collection = require('./db/db')

exports.addDetail = async (req, res) => {
    const { email, password } = req.body;

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
        }

        const login = new NewSchema({
           email,
           password
        });

        await login.save();
        return res.status(200).json({ message: 'Details Added' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

app.listen(5000, () =>{
    console.log("Port connected");
})