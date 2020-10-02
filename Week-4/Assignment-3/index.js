const express=require('express');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app=express();
//app.use(express.static('public'));
app.use(cookieParser('secretString'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());


app.set('view engine','pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home',(req,res)=>{
    res.render('index',{ msg: req.flash('error') });
});

app.get('/member', (req, res) => {
    res.send('<h2>Hi!There</h2>');
})


app.post('/signup', (req, res) => {
    let email = req.body.email;
    let sql = `SELECT email FROM user WHERE email = '${email}'`
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            console.log('Sign-up Failed: Email existed');
            req.flash('error', 'Sign-up Failed: Email has existed');
            res.redirect('index');
        } else {
            let password = req.body.password;
            user = { email, password };
            sql = 'INSERT INTO user SET ?'
            db.query(sql, user, (err, result) => {
                if (err) {throw err;}
                console.log('User added');
                res.redirect('member');
            });
        }
    });
});

app.post('/signin', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let sql = `SELECT * FROM user WHERE email = '${email}'`
    db.query(sql, (err, result) => {
        if (result.length > 0) {
            if (password === result[0].password) {
                console.log('Login succeeded');
                res.redirect('member');
            } else {
                console.log('Login failed: Wrong password');
                req.flash('error', 'Login failed: Wrong password');
                res.redirect('home');
            }
        } else {
            console.log('Login failed: Wrong Email');
            req.flash('error', 'Login failed: Wrong Email');
            res.redirect('home');
        }
    });
});




const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aaa112233',
    database: 'assignment'
    //port:3306
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected...')
})

//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        };
            console.log(result);
            res.send('Database created')
        });

    })

//create Table
app.get('/createusertables',(req,res)=>{
    let sql='Create Table user(id int AUTO_INCREMENT,email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(err,result)=>{
        if(err){throw err;}
        console.log(result);
        res.send('User table Created');
    })
});

// //Insert user 1
// app.get('/adduser1',(req,res)=>{
//     let user1={title:'Post One',body:'This is post number one'};
//     let sql='INSERT INTO user Set ?';
//     let query=db.query(sql,user1,(err,result)=>{
//         if(err){throw err;}
//         console.log(result);
//         res.send('User1 One Add');


//     })
// });


app.listen(3000,()=>{
    console.log('The app is running on localhost:3000!');
});