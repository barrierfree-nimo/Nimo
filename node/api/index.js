const express=require('express');
const router=express.Router();

const user=require('./routes/user');
const simul=require('./routes/simul');
const quiz=require('./routes/quiz')

module.exports=()=>{
	user(router);
	simul(router);
	quiz(router);
	return router;
}