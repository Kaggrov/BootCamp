const express = require('express')
const app = express()
const port = 3000


const obj ={
    name :"Karttekay",
    age:"1",
    username:'root',
    password:'root'
}

const result={}

app.use((req,res,next)=>{
    if(obj.age <=18){
        result.userDetails = "Not allowed to visit"
    }
    next()
})

app.use((req,res,next)=>{
    result.userDetails="Valid User"
    obj.password=='root'?next():"Invalid Credentials"
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/test', (req, res) => {
    
    res.send(result)
  })

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})