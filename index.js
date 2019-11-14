const express = require("express");
const sequelize = require("./server.js").sequelize;
const Messages = require("./server.js").Messages;
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static('frontend'));

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})

app.get('/createDb', (req,res)=>{
    sequelize.sync({force:true}).then(()=>{
        res.status(200).send({message:"table creates"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({message:"something went wrong"});
    })
})

app.post('/messages', (req,res)=>{
    Messages.create(req.body).then((result)=>{
        res.status(200).send({message:result})
    }).catch((err)=>{
        res.status(500).send("resourse not created");
    })
})

app.listen(8080, ()=>{
    console.log(`Started on port ${PORT}`);
})