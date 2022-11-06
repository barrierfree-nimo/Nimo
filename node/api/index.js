const express=require('express');
const router=express.Router();

const get=require('./routes/get');
const post=require('./routes/post');
const del=require('./routes/delete');
const put=require('./routes/put');
const user=require('./routes/user');
const simul=require('./routes/simul');
const quiz=require('./routes/quiz')

module.exports=()=>{
	get(router);
	post(router);
	del(router);
	put(router);
	user(router);
	simul(router);
	quiz(router);
	return router;
}