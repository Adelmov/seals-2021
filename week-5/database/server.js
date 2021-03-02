const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect("mongodb+srv://adelmov:adelmodev0@cluster0.wpekt.mongodb.net/test-database?retryWrites=true&w=majority", (err, database) => {
  if (err) return console.log(err)
  db = database.db('test-database')
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {users: result})
  })
})

app.post('/users', (req, res) => {
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/users', (req, res) => {
  db.collection('users')
  .findOneAndUpdate({name: ''}, {
    $set: {
      name: req.body.name,
      user: req.body.user,
      lastname: req.body.lastname,
      age: req.body.age,
      hobbies: req.body.hobbies
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/users', (req, res) => {
  db.collection('users').findOneAndDelete({name: req.body.name}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('User data has been deleted')
  })
})
