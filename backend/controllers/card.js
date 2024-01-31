const Card = require('../models/card')

const getUserCard = async (req, res, next) => {
    try {
        const userId = req.params.id

        if (!userId) {
            return res.status(404).json({ message: 'User not found' })
        }
        const cards = await Card.findAll({ where: { userId }})

        return res.status(200).json({ cards })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}

const CreateCard = async (req, res, next) => {
    try {
        const { title, intro, level, daybegin, deadline, userId } = req.body
        
        const newCard = await Card.create({
            title,
            intro,
            level,
            userId,
            daybegin,
            deadline
        })
        return res.status(201).json({card: newCard, message: "new card"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}

const AllCard = async (req, res, next) => {
    try {
        const AllCard = await Card.findAll()

        return res.status(200).json({card: AllCard})
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

const UpdateCard = async (req, res, next) => {
    try {
        const { title, intro, level, daybegin, deadline } = req.body; // 將 res.body 改成 req.body

        const existingCard = await Card.findByPk(req.params.id);

        if (!existingCard) {
            return res.status(404).json({ message: "Card not found" });
        }

        const [updatedRowsCount] = await Card.update(
            {
                title,
                intro,
                level,
                daybegin,
                deadline
            },
            {
                where: { id: req.params.id },
                returning: true,
            }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: "Card not found" });
        }

        return res.status(200).json({ card: updatedRowsCount });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};



const DeleteCard = async (req, res, next) => {
    try {
        const card = await Card.findByPk(req.params.id);

        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }

        await card.destroy();

        return res.status(204).json(); // 204表示成功但無內容
    } catch (error) {
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}


module.exports = {
    getUserCard,
    CreateCard,
    AllCard,
    UpdateCard,
    DeleteCard
}

