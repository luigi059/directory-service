const express = require('express');
const request = require('request');
const router = express.Router();
const options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
        'x-rapidapi-key': '54cc4e07fcmsh3d78b5daa1093ebp16efe5jsn63124395af6f',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        useQueryString: true
    }
};

router
.route('/')
.get((req,res)=>{
    request(options,(error,response,body)=>{
        if(!error && response.statusCode==200){
            res.send(body);
        }
    })
});

module.exports = router;