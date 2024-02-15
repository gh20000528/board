const { User, Card} = require('../models')

const getUser = async (req, res, next) => {
    try {
        const userID = req.params.id
        console.log(userID);
        const user = await User.findByPk(userID, {
            include: Card, // 確保你已經導入了 models 對象，並包含了 Card 模型
          });

        return res.status(200).json({ user })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "something error" })
    }
}

const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body

        const emailExisit = await User.findOne({ email: email })

        if(emailExisit){
            return res.status(400).json({ message: 'email is already exists' })
        }

        const signup = await User.create({
            name,
            email,
            password
        })

        return res.status(200).json({ message: "success create user", user: signup })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: 'something error ' })
    }
}


const lognin = async (req, res, next) =>{
    try {
        const { email, password } = req.body

        const emailExisit = await User.findOne({ email: email})

        if (emailExisit.password !== password){
            return res.status(400).json({ message: 'something wrong please check your eamil and password'})
        }

        return res.status(200).json({ message: 'lognin !!' , user: emailExisit.name})
    } catch (error) {
        console.log(error)

        return res.status(500).json({ message: 'something error '})
    }
}

module.exports = {
    getUser,
    signup,
    lognin
}