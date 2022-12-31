const express = require("express");
const {User, Post, Comment, sequelize} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

function convertDate(date) {
    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
    var newDate = date.setHours(hours - offset);
    return newDate;
}

function convertList(list) {
    for (i in list) {
        list[ i ].date = convertDate(list[ i ].date)
    }
}

const community = {
    readList: async function (req, res, next) {
        try {
            const list = await Post.findAll({
                order: [
                    [ 'id', 'DESC' ],
                ]
            });

            if (!list.length == 0) {
                convertList(list);
                res.status(200).json(list);
            }
            else {
                res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            res.status(500);
        }
    },
    readPost: async function (req, res, next) {
        try {
            const post = await Post.findOne({
                where: {
                    id: req.params.id
                }
            });
            const comment = await Comment.findAll({
                where: {
                    post_id: req.params.id
                },
                order: [
                    [ 'date', 'ASC' ],
                ]
            });

            post.date = convertDate(post.date)
            try {
                if (!comment.length == 0) {
                    convertList(comment);
                }
            } catch (err) {
                console.log(err)
            }
            const list = {
                post: post,
                comment: comment
            }
            res.status(200).json(list)
        } catch (error) {
            res.status(500);
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
                    newPost = await Post.create({
                        user_nickname: user.nickname,
                        title: title,
                        contents: contents,
                        tag: tag
                    })
                } catch (error) {
                    console.log(error)
                }
                newPost.date = convertDate(newPost.date)
                res.status(200).json(newPost);
            }
        } catch (error) {
            res.status(500)
        }
    },
    writeComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const {post_id, contents} = req.body;
            const post = await Post.findOne({where: {id: post_id}})
            if (!contents) {
                return res.status(500).json({message: "no contents"});
            } else {
                try {
                    var newComment = await Comment.create({
                        user_nickname: user.nickname,
                        post_id: post.id,
                        contents: contents,
                    })
                } catch (error) {
                    res.status(500).json({message: "invalid request"})
                }
                newComment.date = convertDate(newComment.date)
                res.status(200).json(newComment);
            }
        } catch (error) {
            res.status(500)
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
                res.status(200).json(list);
            }
            else {
                res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            res.status(500)
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
                res.status(200).json(list);
            }
            else {
                res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            res.status(500)
        }
    }
}
module.exports = community;