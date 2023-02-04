const express = require("express");
const {User, Post, Comment, Admin, sequelize, BlackUser, BlackPost, BlackComment} = require("../models");
var Sequelize = require("sequelize");

function convertDate(post) {
    var cDate = post.createdAt
    var offset = cDate.getTimezoneOffset() / 60;
    var cHours = cDate.getHours();
    var cNewDate = cDate.setHours(cHours - offset);
    var cdateFormat = new Date(cNewDate)
    post.createdAt = cdateFormat

    var uDate = post.updatedAt
    var uHours = uDate.getHours();
    var uNewDate = uDate.setHours(uHours - offset);
    var udateFormat = new Date(uNewDate)
    post.updatedAt = udateFormat

    return post;
}

function convertList(list) {
    for (i in list) {
        list[ i ] = convertDate(list[ i ])
    }
}

function myPost(user) {

}

function myComment(user) {

}

const community = {
    readList: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const blackUsers = await BlackUser.findAll({where: {user_id: user.id}});
            const userList = []
            for (i of blackUsers) {
                userList.push(i.black_nickname)
            }
            const blackuserPosts = await Post.findAll({where: {user_id: {[ Sequelize.Op.in ]: userList}}})
            const postList = []
            for (i of blackuserPosts) {
                postList.push(i.id)
            }
            const blackpostPosts = await BlackPost.findAll({where: {user_id: user.id}})
            for (i of blackpostPosts) {
                postList.push(i.black_id)
            }
            var list = await Post.findAll({
                where: {
                    id: {[ Sequelize.Op.notIn ]: postList}
                },
                order: [
                    [ 'id', 'DESC' ],
                ],
                raw: true
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
        const user = await User.findOne({where: {id: req.user_id}});
        const blackUsers = await BlackUser.findAll({where: {user_id: user.id}});
        const userList = []
        for (i of blackUsers) {
            userList.push(i.black_id)
        }
        const blackuserComments = await Comment.findAll({where: {user_id: {[ Sequelize.Op.in ]: userList}}})
        const commentList = []
        for (i of blackuserComments) {
            commentList.push(i.id)
        }
        const blackcomtComts = await BlackComment.findAll({where: {user_id: user.id}})
        for (i of blackcomtComts) {
            commentList.push(i.black_id)
        }
        try {
            let post = await Post.findOne({
                where: {
                    id: req.params.id
                },
                raw: true
            });
            if (post) {
                convertDate(post)
                var comment = await Comment.findAll({
                    where: {
                        id: {
                            [ Sequelize.Op.notIn ]: commentList,
                        },
                        post_id: req.params.id,
                    },
                    order: [
                        [ 'created_at', 'ASC' ],
                    ],
                    raw: true
                });
                try{
                   if(post.user_id==user.id){
                    p
                    post[ 'isMine' ] = 'true'
                } else {
                    post[ 'isMine' ] = 'false'
                } 
                }catch(err){
                    console.log(err)
                }
                
            } else {
                return res.status(404).json({msg: "post deleted"})
            }

            if (!comment.length == 0) {
                convertList(comment)
                for (const i of comment) {
                    if (i.user_id==user.id) {
                      i[ 'isMine' ] = 'true'
                    } else {
                      i[ 'isMine' ] = 'false'
                    }
                  }
                list = {
                    post: post,
                    comment: comment
                }
            } else {
                comment = []
                list = {
                    post: post,
                    comment: comment
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
                return res.status(401).json({message: "Omit some params"});
            } else {
                try {
                    var newPost = await Post.create({
                        user_id: user.id,
                        user_nickname: user.nickname,
                        title: title,
                        contents: contents,
                        tag: tag
                    })
                } catch (error) {
                    return res.status(401).json(error)
                }
                return res.status(201).json({id: newPost.id});
            }
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    modifyPost: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const post = await Post.findOne({where: {id: req.params.id, user_id: user.id}})
            try {
                updatedPost = await post.update({
                    nickname: user.nickname,
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
            const post = await Post.findOne({where: {id: req.params.id, user_id: user.id}})
            if (post) {
                await Post.destroy({where: {id: req.params.id, user_id: user.id}})
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
                        user_id: user.id,
                        user_nickname: user.nickname,
                        post_id: post.id,
                        contents: contents,
                    })
                } catch (error) {
                    return res.status(500).json(error)
                }
                return res.status(200).json({id: newComment.id});
            }
        } catch (error) {
            return res.status(500)
        }
    },
    modifyComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const comment = await Comment.findOne({where: {id: req.params.id, user_id: user.id}})
            try {
                var updatedComment = await comment.update({
                    user_nickname: user.nickname,
                    contents: req.body.contents,
                    updatedAt: sequelize.literal('CURRENT_TIMESTAMP')
                })
            } catch (error) {
                return res.status(400).json(error)
            }
            updatedComment = convertDate(updatedComment)
            return res.status(201).json(updatedComment)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    deleteComment: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const comment = await Comment.findOne({where: {id: req.params.id, user_id: user.id}})
            if (comment) {
                await Comment.destroy({where: {id: req.params.id, user_id: user.id}})
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
                order: [
                    [ 'id', 'DESC' ],
                ]
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
                },
                order: [
                    [ 'id', 'DESC' ],
                ]
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