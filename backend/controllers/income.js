const IncomeSchema = require("../models/incomeModel")


exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
}

        const income = new IncomeSchema({
            title,
            amount,
            category,
            description,
            date
        });

        await income.save();
        return res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};


exports.getIncome = async(req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async(req, res) => {
    const {id} = req.params;
    console.log(req.params);
    try {
        const deletedIncome = await IncomeSchema.findByIdAndDelete(id);
        if (!deletedIncome) {
            return res.status(404).json({ message: 'Income not found' });
        }
        res.status(200).json({ message: 'Income Deleted', deletedIncome });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}