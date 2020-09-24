const express=require('express');
//const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const app=express();

app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended:false}));
app.use(cookieParser());


app.set('view engine','pug');
//Assignment 1
app.get('/',(req,res)=>{
    res.render('index');
});

//Assignment 2
app.get('/getData',(req,res)=>{
    const {number}=req.query;
    let numipt=Number(number);
    let total=((1+numipt)*numipt)/2;
    if(!number){return res.render('getData');}
    if(!numipt){return res.render('getDataWrong');}
    return res.render('getDataSum',{total:total});
});

//Assignment 4
app.get('/myName',(req,res)=>{
    const nameGet=req.cookies.name;
    res.render('name',{name:nameGet})
});

app.get('/trackName', (req, res) => {
    res.cookie('name', req.query.name);
    //console.log(req.cookies.name);
    res.redirect('myName');
});

app.listen(3000,()=>{
    console.log('The app is running on localhost:3000!');
});