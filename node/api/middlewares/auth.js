const jwt = require('jsonwebtoken');

const auth = {
    checkToken: async function (req, res, next) {
        try {
            const token = req.headers.token;
            if (!token)
                return res.redirect('/main')

            const user = jwt.verify(token, process.env.JWT_SECRET)

            req.nickname = user.nickname
            next()
        } catch (error) {
            res.json({message: "Invalid Token - "+error.msg})

        }
    }
}

module.exports = auth;