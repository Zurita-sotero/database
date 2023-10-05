const {request, response} = require('express');


const listUsers = (req = request, res = response) => {
    res.json({msg: "Holaa Usuario, llevame con tu lider..."})
}

module.exports={listUsers}