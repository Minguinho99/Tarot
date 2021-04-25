const express = require('express');
const app = express();
const User = require('./models/list.js');

const bodyParser = require('body-parser');
const router = express.Router();

//DBconnection setting
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('DB connection success.');
})
mongoose.connect("mongodb://localhost/test")

//middleware setting
app.use(express.static('/public'));
app.use(express.static('public/scripts'));
app.set('views', __dirname+'/public/views');

//bodyparser : HTTP에서 필요한 데이터만 뽑기 쉽게 해주는 middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routing : localhost:8000하면 app.js 리턴하여 최종적으로는 index.js, html띄우도록함.
app.get('/', (req, res)=>{
    res.render('App.js');
})
app.post('/getCardByName', async (req, res) => {
    console.log('aaa');

    //const name_short = JSON.parse(decodeURIComponent(req.query.name_short));
    //console.log(name_short);
    // const name1 = name_short[0];
    // const name2 = name_short[1];
    // const name3 = name_short[2];
    const names = [req.body.name1, req.body.name2, req.body.name3];
    const meaning = [];
    
    // var user = await db.collection("card").findOne({"name_short" : "ar02"});
    // var user1 = await db.collection("card").find({});
    // console.log(user);
    // console.log(user1);
    var i;
    for(i=0;i<3;i++){
        try {
            user = await db.collection("card").findOne({"name_short" : names[i]});
            console.log(user);
            console.log(user.meaning_up);
            meaning.push(user.meaning_up);
        } catch(e) {
            console.log(e)
        }
        
        
        // User.findOne({"name_short" : names[i]}, function(err, user){
        //     if(err){
        //         console.log(err);
        //         return res.redirect('/');
        //     }
        //     console.log(user);
        //     res.json(user.meaning_up);
        //     console.log('user.meaning_up');
    
        // })
    }
    res.json(meaning);
})

// app.get('/a', (req, res) => {
//     console.log('aaaa');
// })

const server =app.listen(8080, ()=>{
    console.log('server is running');
})



// app.post('/api/v1/add', function(req, res){
//     console.log("POST /api/v1/add")
//     const name = req.body.username;
    
//     User.findOne({name: name}, function(err,user){
//         if(err){
//                 console.log(err);
//                 //return res.status(500).end("Error : cannot update");
//                 return res.redirect('/');
//         }
//         console.log(user)

//         if(user.password !== req.body.password){
//                 console.log('login fail');
//                 return res.redirect('/');
//         }
//         else{
//             console.log("success");
//             res.redirect("/crawler");
//         }
        

//         /*if(!user){
//             if(req.body.password===0)
//                 return res.status(404).json({error : 'user not found'})
//         }

//         return res.status(200).send();*/

//     })

// });

// app.post("/register", (req, res) => {
//     const name = req.body.username
//     console.log(name)
//     const password = req.body.password
//     console.log(password)

//     const newUser = new User()
//     newUser.name = name
//     newUser.password = password

//     newUser.save((err) => {
//         if (err) {
//             console.log(err)
//         }
//         return res.redirect("/")
//     })    
// })

// app.post("/basket", (req, res)=>{
//     const list =  new User();//new List();
//     list.name =null;
//     list.password=null;
//     list.title = req.body.title;
//     list.price = req.body.price;
//     list.src = req.body.src;
//     //console.log('***')
//     console.log(list)
//     //console.log('***')

//     list.save(err=>{
//             if(err){
//                 console.log(err);
//                 return res.redirect('/');
//             }
//             //res.send("okay")
//             // alert('Successfully saved!')
//             // return res.redirect('/crawler');
//     });
//     // console.log(req.body)
// })

// // app.get('/basket', (req, res) => {
// //     //console.log(user)
// //     const title = req.body.title;
// //     User.find({title : title},  function(err, user){
// //         if(user.password==null && user.name==null){
// //             res.json(user)
// //         }
// //     })
