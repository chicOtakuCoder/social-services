const Comment = require('../models/comment.model');

// instruction
// clone the repository
// run `git remote remove origin`
// then you can add your remote repository 

class CommentController {
    static create = async (req, res) => {
        try {
            const { content } = req.body;

            const comment = await Comment.create({
                content
            });

            res.status(201).json(comment)
        } catch(error) {
            res.status(500).json('Server error')
        }
    }

    static getAll = async (req, res) => {
        try {
            // const query = req.query;
            // console.log(query)
            const comment = await Comment.find();

            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json('Server error') 
        }
    }

    static getOne = async (req, res) => {
        try {
            const comment = await Comment.findOne();

            res.status(200).json(comment)
        } catch (error) {
            res.status(500).json('Server error');
        }
    }

    static update = async (req, res) => {
        try {
            const comment = await Comment.findOne();
            const updateComment = Object.assign(comment, req.body);

            updateComment.save();

            res.status(200).json(updateComment);
        } catch (error) {
            res.status(500).json('Server error');
        }
    }

    static delete = async (req, res) => {
        try {
            const comment = await Comment.delete();

            res.status(200).json('success');
        } catch (error) {
            res.status(500).json('Server error');
        }
        

    }

    // getOne
    // update
    // delete
}

module.exports = CommentController;