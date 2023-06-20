const express=require('express');
const {engine} =require('express-handlebars')
const server=express();

const PORT=4000;

// const {engine} =require 

server.engine('handlebars',engine);
server.set('view engine', 'handlebars');
server.set('views', __dirname+'/views');


server.get("/",(req,res)=>{
    res.render('home')
})
// server.use(express.json());


// server.use((req,res,next)=>{
//     console.log(req.path);
//     next();
// })
// server.get('/',(req,res)=>{
//     console.log('LOG');
//     // console.log(req.params);
//     // console.log(req.path);
//     // console.log(req.query);
//     // console.log(req.body);
//     // res.status(200).send("Hello world express js");
//     res.status(200).json({data:"Hello world express js"});

// });

// server.post('/todos',(req,res)=>{
//     const body=req.body;
//     res.send(body)
// })

// server.put('todos/:id' ,(req,res)=>{
//     const id =req.params.id;
//     res.send(id);
// })

// server.delete('todos/:id' ,(req,res)=>{
//     const id =req.params.id;
//     res.send(id);
// })


server.listen(PORT,()=>
console.log(`Sever running on port ${PORT}`)
)