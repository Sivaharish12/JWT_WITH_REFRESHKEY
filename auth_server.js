require('dotenv').config();
const { json } = require('body-parser')
const express=require('express')
const app=express()
const jwt=require('jsonwebtoken')

app.use(express.json())

const refreshtokens=[]

app.post('/token',(req,res,next)=>{
    const refreshtoken=req.body.token;
    if(refreshtoken==null) return res.send("you are not logged in")
    if(!refreshtokens.includes(refreshtoken)) return res.send("The Validity expires for your RefreshToken.")
    jwt.verify(refreshtoken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return res.send("The error occured");
        const accessToken=generateAccesstoken({name:user.name})
        res.json({accessToken:accessToken});
    });
});


app.post('/login',(req,res,next)=>{
    const username=req.body.username;
    const user={name:username};
    const accesstoken=generateAccesstoken(user);
    const refreshtoken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    refreshtokens.push(refreshtoken)
    res.json({accesstoken:accesstoken,
    refreshtoken:refreshtoken})
    console.log(refreshtokens);
});


function generateAccesstoken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'30s'});
}
app.listen(5000);