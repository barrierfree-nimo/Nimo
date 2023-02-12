const express = require("express");
const {User, BlackUser, BlackPost, BlackComment} = require("../models");
var Sequelize = require("sequelize");
const {json, HasMany} = require("sequelize");

const settings = {
	blockContents: async function (req, res, next) {
		try {
			const user = await User.findOne({where: {id: req.user_id}});
			try {
				const {type, id} = req.params
				if (type == "user") {
					const block = await BlackUser.create({
						user_id: user.id,
						black_id: id
					})
				} else if (type == "post") {
					const block = await BlackPost.create({
						user_id: user.id,
						black_id: id
					})
				} else {
					const block = await BlackComment.create({
						user_id: user.id,
						black_id: id
					})
				}
			} catch (error) {
				return res.status(404).json(error)
			}
			return res.status(204).send()
		} catch (error) {
			return res.status(400)
		}
	}
}

module.exports = settings;