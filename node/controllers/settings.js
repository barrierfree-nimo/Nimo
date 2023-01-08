const express = require("express");
const {User, History, Msg, Sns, SimulData} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

const settings = {
    userInfo: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            //console.log(user)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(400)
        }
    },
    resetPassword: async function (req, res, next) {
        try {
            //사용자 검증 질문 추가
            const user = await User.findOne({where: {id: req.user_id}});
            const password = req.body.password
            user.update({password: password})
            return res.status(200).json("msg: successfully update pw")
        } catch (error) {
            return res.status(401)
        }
    },
    setInfo: async function (req, res, next) {
        try {
            const user = await User.findOne({where: {id: req.user_id}});
            const {birth, gender, job, interest, offspring, bank} = req.body;
            try {
                user.update({
                    birth: birth,
                    gender: gender,
                    job: job,
                    interest: interest,
                    offspring: offspring,
                    bank: bank
                })
            } catch (error) {
                console.log(error)
                return res.status(401)
            }
            return res.status(200).json("msg: success update userinfo")
        } catch (error) {
            return res.status(400)
        }
    }
}
module.exports = settings;