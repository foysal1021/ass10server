const express = require('express')
const app = express()
const port = 5000
cors = require('cors');
app.use(cors())


const course = require('./Data/Course.json');



app.get('/course',(req,res)=>{
    res.send(course)
})

app.get('/course/:id',(req,res)=>{
  const id = req.params.id;
  const CourseID = course.find( Cid => Cid.id === id);
  res.send(CourseID)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })