const express = require('express')
const app = express()
const port = 5000
cors = require('cors');
app.use(cors())


const course = require('./Data/Course.json');


app.get('/course',(req,res)=>{
    res.send(course)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })