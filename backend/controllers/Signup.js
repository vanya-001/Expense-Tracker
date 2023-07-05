const collection = require('./db/db')

exports.addDetail = async (req, res) => {
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

app.listen(5000, () =>{
    console.log("Port connected");
})
