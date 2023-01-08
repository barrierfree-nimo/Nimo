const jwt = require('jsonwebtoken');

const auth = {
    checkTokens: async function (req, res, next) {
        try {
            const accessToken = req.headers.accesstoken;
            if (!accessToken){
                return res.json({msg: "API 사용 권한이 없습니다."})
            }
            const user = jwt.verify(accessToken, process.env.JWT_SECRET)
            req.user_id = user.user_id
            next()
        } catch (error) {
            res.json({message: "Invalid Token - "+error.msg})

        }
    }
}

module.exports = auth;