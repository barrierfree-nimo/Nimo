const express = require("express");
const {User, Post, Comment, sequelize} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

function convertDate(post) {
    var cDate = post.createdAt
    var offset = cDate.getTimezoneOffset() / 60;
    var cHours = cDate.getHours();
    var cNewDate = cDate.setHours(cHours - offset);
    post.createdAt = cNewDate

    var uDate = post.updatedAt
    var uHours = uDate.getHours();
    var uNewDate = uDate.setHours(uHours - offset);
    post.updatedAt = uNewDate

    return post;
}

function convertList(list) {
    for (i in list) {
        list[ i ] = convertDate(list[ i ])
    }
}

const community = {
    readList: async function (req, res, next) {
        try {
            var list = await Post.findAll({
                order: [
                    [ 'id', 'DESC' ],
                ]
            });
            if (!list.length == 0) {
                convertList(list);
                return res.status(200).json(list);
            }
            else {
                return res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            return res.status(500);
        }
    },
    readPost: async function (req, res, next) {
        try {
            var post = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (post) {
                var comment = await Comment.findAll({
                    where: {
                        post_id: req.params.id
                    },
                    order: [
                        [ 'created_at', 'ASC' ],
                    ]
                });
            }
            post = convertDate(post)
            if (!comment.length == 0) {
                list = {
                    post: post,
                    comment: comment
                }
            }
            else {
                list = {
                    post: post,
                    comment: "not exist"
                }
            }
            return res.status(200).json(list)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    writePost: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const {title, contents, tag} = req.body;
            if (!title || !contents || !tag) {
                return res.status(500).json({message: "Omit some params"});
            } else {
                try {
                    var newPost = await Post.create({
                        user_nickname: user.nickname,
                        title: title,
                        contents: contents,
                        tag: tag
                    })
                } catch (error) {
                    return res.status(401).json(error)
                }
                newPost = convertDate(newPost)
                return res.status(201).json(newPost);
            }
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    modifyPost: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const post = await Post.findOne({where: {id: req.params.id, user_nickname: user.nickname}})
            try {
                updatedPost = await post.update({
                    title: req.body.title,
                    contents: req.body.contents,
                    updatedAt: sequelize.literal('CURRENT_TIMESTAMP')
                })
            } catch (error) {
                return res.status(400).json({msg: "cannot update"})
            }
            updatedPost = convertDate(updatedPost)
            return res.status(201).json(updatedPost)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    deletePost: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const post = await Post.findOne({where: {id: req.params.id, user_nickname: user.nickname}})
            if (post) {
                await Post.destroy({where: {id: req.params.id, user_nickname: user.nickname}})
                return res.status(204).send()
            } else {
                return res.status(404).json({msg: "not exist"})
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    writeComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const {post_id, contents} = req.body;
            const post = await Post.findOne({where: {id: post_id}})
            if (!contents) {
                return res.status(404).json({message: "no contents"});
            } else {
                try {
                    var newComment = await Comment.create({
                        user_nickname: user.nickname,
                        post_id: post.id,
                        contents: contents,
                    })
                } catch (error) {
                    return res.status(500).json(error)
                }
                newComment = convertDate(newComment)
                return res.status(200).json(newComment);
            }
        } catch (error) {
            return res.status(500)
        }
    },
    modifyComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const comment = await Comment.findOne({where: {id: req.params.id, user_nickname: user.nickname}})
            try {
                var updatedPost = await comment.update({
                    contents: req.body.contents,
                    updatedAt: sequelize.literal('CURRENT_TIMESTAMP')
                })
            } catch (error) {
                return res.status(400).json(error)
            }
            updatedPost = convertDate(updatedPost)
            return res.status(201).json(updatedPost)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    deleteComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const comment = await Comment.findOne({where: {id: req.params.id, user_nickname: user.nickname}})
            if (comment) {
                await Comment.destroy({where: {id: req.params.id, user_nickname: user.nickname}})
                return res.status(204).send()
            } else {
                return res.status(404).json({msg: "not exist"})
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    findKeyword: async function (req, res, next) {
        const Op = Sequelize.Op;
        try {
            const list = await Post.findAll({
                where: {
                    title: {
                        [ Op.like ]: '%' + req.params.keyword + '%'
                    },
                },
            });
            if (!list.length == 0) {
                convertList(list)
                return res.status(200).json(list);
            }
            else {
                return res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            return res.status(500)
        }
    },
    findTag: async function (req, res, next) {
        try {
            const list = await Post.findAll({
                where: {
                    tag: req.params.tag
                }
            })
            if (!list.length == 0) {
                convertList(list)
                return res.status(200).json(list);
            }
            else {
                return res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            return res.status(500)
        }
    }
}
module.exports = community;