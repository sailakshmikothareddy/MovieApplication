const express = require ('express')
const cors = require('cors')
const app = express();
app.use(cors());
const fs=require ('fs'
)
const {body,validationResult}=require('express-validator');
const Joi=require('joi')
const {required}=require('joi')
const MovieData=fs.readFileSync('./moviesList.json')
const movies=JSON.parse(MovieData);
app.get('/movies',(req,res)=>{
    res.json(movies)
})
app.post('/create',body('name').isLength({min:3})),
body('rating').isInt({min:2,max:5}),
(req,res)=>{
    const errors=validationResult(req);
    res.send('Movie created successfully')
}
app.listen(8000,()=>{
    console.log('port is running on ....');
})