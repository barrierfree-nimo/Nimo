const express = require("express");
const {User, History, Msg, Sns, SimulData, Admin} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

const settings = {
    blockContents: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            try {
                const {type, id} = req.params
                const block = await Admin.create({
                    user_nickname: user.nickname,
                    type: type,
                    block_id: id
                })
                console.log(block)
            } catch(error){
                return res.status(404).json(error)
            }
            return res.status(204).send()
        } catch (error) {
            return res.status(400)
        }
    }
}

module.exports = settings;