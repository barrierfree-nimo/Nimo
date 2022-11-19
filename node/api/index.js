const express=require('express');
const router=express.Router();

const user=require('./routes/user');
const simul=require('./routes/simul');

module.exports=()=>{
	user(router);
	simul(router);
	return router;
}