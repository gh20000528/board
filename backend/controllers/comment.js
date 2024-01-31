const Comment = require('../models/comment')

const getUserComment = async(req, res, next) => {
    try {
        const userId = req.params.id

        if (!userId) {
            return res.status(404).json({ message: 'User not found' })
        }
        const Comments = await Comment.findAll({ where: { userId }})

        return res.status(200).json({ Comments })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error"})
    }
}

const getComment = async (req, res, next) => {
    try {
        const getComment = await Comment.findAll()

        return res.status(200).json({ comment: getComment })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: 'something error' })
    }
}

const createComment = async (req, res, next) => {
    try {
        const { intro, userId } = req.body

        const newComment = await Comment.create({
            intro, userId
        })

        return res.status(200).json({ message: "create comment success", comment: newComment})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "something error" })
    }
}


const updateComment = async (req, res, next) => {
    try {
        const { intro } = req.body

        const comment = await Comment.findByPk(req.params.id)

        if(!comment){
            return res.status(400).json({ message: "con't find comment"})
        }

        const [uodateComment] = await Comment.update({
            intro
        })

        if (uodateComment === 0){
            return res.status(404).json({ message: 'Comment not found'})
        }

        return res.status(200).json({ message: "update comment success", comment: uodateComment})
    } catch (error) {
        
    }
}

const deleteComment = async (req, res, next)=> {
    try {
        const comment = await Comment.findByPk(req.params.id)

        if(!comment){
            return res.status(404).json({ message: "comemnt not found" })
        }

        await comment.destroy()

        return req.status(200).json({ message: "delete comment success" })
    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "something error" })
    }
}


module.exports = {
    getComment,
    createComment,
    updateComment,
    deleteComment,
    getUserComment
}