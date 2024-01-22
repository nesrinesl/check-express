//require express
const express = require('express')

//get app from express
const app = express()

//body parser
app.use(express.json())

//import middleware verify time
const verify =require('./middleware')

// create port 
const PORT =5000
//create server
app.listen(PORT,(err)=>{
    err
    ?console.log(err)
    :console.log(`server is running on http://127.0.0.1:${PORT}`)
}
)
//static DB
const users =
[  { 
    id:1, 
    name:"Carolina",
    email:"carolina@gmail.com"
},
{ 
    id:2, 
    name:"Keristina",
    email:"keristina@gmail.com"
},
{ 
    id:3, 
    name:"Robert",
    email:"robert@gmail.com"
},
]
// eroror route
app.get('/error',(req,res)=>{
    res.status(200).send('Server is only available during working hours (from Monday to Fridya from 9AM to 17PM)')
})

// call verify 
app.use(verify)

// test route
app.get('/',(req,res)=>{
    res.status(200).send('test OK')
})
// get all users 
app.get('/users',(req,res)=>{
    try{
        res.status(200).send({users})
    } catch(error){
        res.status(400).send(error)
    }
})




