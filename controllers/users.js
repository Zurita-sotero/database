const {request, response} = require('express');
const usermodels = require('../models/users');
const pool=require('../db');

const listUsers = async (req = request, res = response) => {
    let conn; 

    try{
        conn = await pool.getConnection();

    const users = await conn.query (usermodels.getAll, (err)=>{
        if(err){
            throw err
        }
    });

 

    res.json(users);
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    } finally{
        if (conn) conn.end();
    }
    
}
   
const listUserByID =async (req = request, res = response) =>{
    const {id}=req.params;

    if(isNaN(id)){
        res.status(400).json({msg: 'invalid ID'});
        return;
    }
    let conn; 

    try{
        conn = await pool.getConnection();

    const user = await conn.query (usermodels.getByID, [id],(err)=>{
        if(err){
            throw err
        }
    });
    if (!user){
        res.status(404).json({msg: 'User not found'});
        return;
    }
    res.json(user);
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    } finally{
        if (conn) conn.end();
    }
}

module.exports={listUsers, listUserByID};