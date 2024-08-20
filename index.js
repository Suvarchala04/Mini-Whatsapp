const express = require('express');
const app = express()
const port= 4000;
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require('method-override');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then(res=>{ 
    console.log("Connection Successful");
})
.catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
app.get('/',(req,res)=>{
    res.send("Root is working");
})

// Index route
app.get('/chats',async (req,res)=>{
    let chats= await Chat.find();
    res.render("index.ejs",{chats});
})

// New route
app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");
})

// Create route
app.post('/chats',(req,res)=>{
    let {from, to, message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    newChat.save()
    .then((data)=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })
    res.redirect("/chats");
})

// Edit route
app.get('/chats/:id/edit',async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//Update route
app.put('/chats/:id',async (req,res)=>{
    let {id}= req.params;
    let {message:newChat} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message: newChat},{runValidators:true, new:true});
    console.log(updatedChat);
    res.redirect('/chats');
})

// Destroy route
app.delete('/chats/:id',async (req,res)=>{
    let {id}= req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})
app.listen(port,(req,res)=>{
    console.log(`app is listening at port ${port}`);
})