//Load express
const express = require('express')

//Create the expres app
const app = express();

const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine



//Route 1
app.get('/home', function (req, res) {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'This is the home page' })
  })

//Route 2
app.get('/about', function (req, res) {
    res.render('template', { title: 'Hey', message: '#2', content: 'This is the about page' })
  })

//Route 3
app.get('/3', function (req, res) {
    res.render('template', { title: 'Hey', message: '#3', content: 'This is the third page' })
  })
//Route 4
app.get('/4', function (req, res) {
    res.render('template', { title: 'Hey', message: '#4', content: 'This is the four page' })
  })
//Route 5
app.get('/5', function (req, res) {
    res.render('template', { title: 'Hey', message: '#5', content: 'This is the fifth page' })
  })
//Route 6
app.get('/6', function (req, res) {
    res.render('template', { title: 'Hey', message: '#6', content: 'This is the sixth page' })
  })
//Route 7
app.get('/7', function (req, res) {
    res.render('template', { title: 'Hey', message: '#7', content: 'This is the seventh page' })
  })
//Route 8
app.get('/8', function (req, res) {
    res.render('template', { title: 'Hey', message: '#8', content: 'This is the eighth page' })
  })
//Route 9
app.get('/9', function (req, res) {
    res.render('template', { title: 'Hey', message: '#9', content: 'This is the ninth page' })
  })
//Route 10
app.get('/10', function (req, res) {
    res.render('template', { title: 'Hey', message: '#10', content: 'This is the tenth page' })
  })


app.listen(3000, function() {
    console.log('Listening on port 3000')
})