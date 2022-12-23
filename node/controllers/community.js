const express = require("express");
const router = express.Router();
const {User, Post, Comment, sequelize} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');



const community = {
    readList: async function (req, res, next) {
        try {
            const list = await Post.findAll({
                order: [
                    [ 'id', 'DESC' ],
                ]
            });
            console.log(list);

            res.status(200).json(list);
        } catch (error) {
            res.status(400);
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
                }
            })
            const list = {
                post: post,
                comment: comment
            }
            console.log(list);
            res.status(200).json(list)
        } catch (error) {
            res.status(400);
        }
    },
    writePost: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const {title, contents} = req.body;
            if (!title || !contents) {
                return res.status(500).json({message: "Omit some params"});
            } else {
                try {
                    newPost = await Post.create({
                        user_nickname: user.nickname,
                        title: title,
                        contents: contents,
                    })
                } catch (error) {
                    console.log(error)
                }
                function convertDate(date) {
                    var newDate = new Date()
                    var offset = date.getTimezoneOffset() / 60;
                    var hours = date.getHours();
                    newDate.setHours(hours - offset);
                    return newDate;
                }
                newPost.date = convertDate(newPost.date)
                res.status(200).json(newPost);
            }
        } catch (error) {
            res.status(400)
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
                    newComment = await Comment.create({
                        user_nickname: user.nickname,
                        post_id: post.id,
                        contents: contents,
                    })
                } catch (error) {
                    console.log(error)
                }
                function convertDate(date) {
                    var newDate = new Date()
                    var offset = date.getTimezoneOffset() / 60;
                    var hours = date.getHours();
                    newDate.setHours(hours - offset);
                    return newDate;
                }
                newComment.date = convertDate(newComment.date)
                res.status(200).json(newComment);
            }
        } catch (error) {
            res.status(400)
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
            if (!list.length === 0) {
                console.log(list)
                res.status(200).json(list);
            }
            else {
                res.status(201).json({msg: "not exist"})
            }
        } catch (error) {
            res.status(400)
        }
    }
}
module.exports = community;