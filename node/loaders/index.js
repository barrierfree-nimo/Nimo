const expressLoader=require('./express');
const sequelizeLoader=require('./sequelize');
const firebaseLoader=require('./firebase');

module.exports=async (app)=>{
	
	await sequelizeLoader();
	await expressLoader(app);
	await firebaseLoader();
};

