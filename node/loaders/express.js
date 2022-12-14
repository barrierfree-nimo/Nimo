const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors')();

const mainRouter = require('../api/routes/main')
const userRouter = require('../api/routes/user')
const quizRouter = require('../api/routes/quiz')
const simulRouter = require('../api/routes/simulation')
const commRouter = require('../api/routes/community')
const setRouter = require('../api/routes/settings')

module.exports = (app) => {
    dotenv.config();
    /*  https를 사용해야하는경우 
	if(process.env.NODE_ENV==='production'){
		sessionMiddleware.proxy=true;
		sessionMiddleware.cookie.secure=true;
	}*/

    if (process.env.NODE_ENV === 'production') {
        app.use(morgan('combined'));
        //node contentSecurityPolicy 문제를 해결하기위한 방법
        app.use(helmet({ contentSecurityPolicy: false }));
        app.use(hpp());
        app.use(cors);
    } else {
        app.use(morgan('dev'));
    }

    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/img', express.static(path.join(__dirname, '../uploads')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser(process.env.COOKIE_SECRET));
    //app.use(sessionMiddleware);
    /*
    app.use(session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }));*/
    app.use((_, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    app.use("/main", mainRouter);
    app.use("/user", userRouter);
    app.use("/quiz", quizRouter);
    app.use("/simulation", simulRouter);
    app.use("/community", commRouter);
    app.use("/settings", setRouter);
};
