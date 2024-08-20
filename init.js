const mongoose = require('mongoose');
const Chat = require('./models/chat');
main().then(res=>{
    console.log("Connection Successful");
})
.catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let allChats = [
    {
        "from": "john",
        "to": "emma",
        "message": "Can you share the report with me?",
        "created_at": new Date()
    },
    {
        "from": "alex",
        "to": "maria",
        "message": "Don't forget the meeting tomorrow.",
        "created_at": new Date()
    },
    {
        "from": "sarah",
        "to": "chris",
        "message": "Happy Birthday! Hope you have a great day!",
        "created_at": new Date()
    },
    {
        "from": "david",
        "to": "sophia",
        "message": "What's the status of the project?",
        "created_at": new Date()
    },
    {
        "from": "lisa",
        "to": "michael",
        "message": "Can you send me the presentation slides?",
        "created_at": new Date()
    },
    {
        "from": "nina",
        "to": "james",
        "message": "Are we still on for lunch?",
        "created_at": new Date()
    },
    {
        "from": "josh",
        "to": "megan",
        "message": "Congrats on your promotion!",
        "created_at": new Date()
    },
    {
        "from": "kevin",
        "to": "rachel",
        "message": "Can you review my code?",
        "created_at": new Date()
    },
    {
        "from": "anna",
        "to": "daniel",
        "message": "Thanks for your help earlier!",
        "created_at": new Date()
    },
    {
        "from": "brian",
        "to": "lily",
        "message": "Did you get the tickets?",
        "created_at": new Date()
    },
    {
        "from": "olivia",
        "to": "noah",
        "message": "Let's catch up soon!",
        "created_at": new Date()
    },
    {
        "from": "matt",
        "to": "sara",
        "message": "Can you send me the document?",
        "created_at": new Date()
    },
    {
        "from": "harry",
        "to": "linda",
        "message": "See you at the party!",
        "created_at": new Date()
    },
    {
        "from": "paul",
        "to": "julia",
        "message": "Don't forget to call mom.",
        "created_at": new Date()
    },
    {
        "from": "mark",
        "to": "karen",
        "message": "How was your trip?",
        "created_at": new Date()
    },
    {
        "from": "steve",
        "to": "nancy",
        "message": "Can you join the call?",
        "created_at": new Date()
    },
    {
        "from": "rick",
        "to": "kate",
        "message": "Let's go for a run later.",
        "created_at": new Date()
    },
    {
        "from": "eric",
        "to": "diana",
        "message": "Did you finish the task?",
        "created_at": new Date()
    },
    {
        "from": "amy",
        "to": "tom",
        "message": "Can you help me with this?",
        "created_at": new Date()
    },
    {
        "from": "peter",
        "to": "alice",
        "message": "Don't forget our appointment.",
        "created_at": new Date()
    },
    {
        "from": "jenny",
        "to": "leo",
        "message": "I'll be late to the meeting.",
        "created_at": new Date()
    },
    {
        "from": "carol",
        "to": "mike",
        "message": "Thanks for the feedback!",
        "created_at": new Date()
    },
    {
        "from": "george",
        "to": "hannah",
        "message": "Are you coming to the event?",
        "created_at": new Date()
    },
    {
        "from": "betty",
        "to": "johnny",
        "message": "Let's have dinner tonight.",
        "created_at": new Date()
    },
    {
        "from": "alice",
        "to": "ron",
        "message": "Can you fix this issue?",
        "created_at": new Date()
    },
    {
        "from": "michael",
        "to": "rachel",
        "message": "Great job on the presentation!",
        "created_at": new Date()
    },
    {
        "from": "nathan",
        "to": "julia",
        "message": "See you at the conference.",
        "created_at": new Date()
    },
    {
        "from": "kelly",
        "to": "sam",
        "message": "Did you submit the form?",
        "created_at": new Date()
    },
    {
        "from": "aaron",
        "to": "chloe",
        "message": "Check out this article.",
        "created_at": new Date()
    },
    {
        "from": "greg",
        "to": "susan",
        "message": "Thanks for the update.",
        "created_at": new Date()
    }
]
Chat.insertMany(allChats);