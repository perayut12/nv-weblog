let express = require('express') 
 
const app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended: true})) 
 
app.get('/status', function (req, res ){  
     res.send('Hello nodejs server') 
    }) 
 
app.get('/hello/:person', function (req,res) { 
      console.log('hello - ' + req.params.person)  
       res.send('sey hello with ' + req.params.person)
})

// get user by id app.get
app.get('/user/:userId', function (req, res) {  
     res.send('ดูขอ้มูลผู้ใช้งาน'+ req.params.userId) 
}) 
 
// get all user app.get
app.get('/users', function (req, res) {   
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด') 
}) 
 
let port = 8081 
app.listen(port, function () {  
     console.log('server running on ' + port)
}) 
// create user 
app.post('/user/', function (req, res) 
{   res.send('ทาํการสร้างผใู้ชง้าน: ' + JSON.stringify(req.body)) }) 
 
// edit user 
app.put('/user/:userId', function (req, res) 
{   res.send('ทําการแก้ไขผุ้ใช้งาน: ' + req.params.userId + ' : ' +   JSON.stringify(req.body)) 
}) 
 
// delete user 
app.delete('/user/:userId', function (req, res) 
{   res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' +    JSON.stringify(req.body))
}) 
