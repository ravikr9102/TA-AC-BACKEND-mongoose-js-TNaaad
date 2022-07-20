// requires
var express = require('express');
var mongoose = require('mongoose');
var user = require('./models/user');


// connect to mongodb
mongoose.connect("mongodb://localhost:27017/sample",(err) => {
    console.log(err ? err : "Connected to database" );
});

// instantiate the app
var app = express();


// middleWares
app.use(express.json());

app.post('/user',(req,res) => {
    // capture the data
    console.log(req.body);
    // save the data to database
    user.create(req.body,(err,user) => {
    res.json(user);
    });
});


// Query all the users from the database
app.get('/user',(req,res) => {
    user.find({},(err,user) => {
        console.log(err);
        res.json({ user: user})
    });
});

// Q. query a single document(user) using mongoose
app.get("/user/:id", (req, res) => {
    var userId = req.params.id;
    console.log(userId);
      //   find by using the find only  this will return the result in the form of an array of objects
  user.find({ _id: userid }, (err, user) => {
    res.json(user);
  });
  //find the document in the database by using the findOne
  user.findOne({ _id: userid }, (err, user) => {
    res.json(user);
  });
  //Find the document by using the findById
  user.findById(userid, (err, user) => {
    res.json(user);
  });
});


// Difference between the find and findOne and findById
// ***** find *******
// find returns an array of  the document . the usecase of the find is to find multiple document so it always return an array weather one match is found
// ********* Find One **********
// find returns a single document .The use case is only to reutrn a single document . in find you can pass any query and find the document but you always got a single document or the first found match
// ************ findById *************
// find by  id  is also used to  get single document . Buy here you can not pass queries here you have to find find the document only by using the  id



// on PUT request on '/users/:id', update a user
app.put('/user/:id',(req,res) => {
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body, { new: true}, (err,updateuser) => {
        console.log(err);
        res.json(updateuser)
    });
});


// delete a user using Model.findByIdAndDelete()
app.delete('/user/:id',(req,res) => {
    user.findByIdAndDelete(req.params.id,(err,deleteuser) => {
        res.send(`${deleteduser.user} was deleted`);
    });
});



// listener
app.listen(4000,() => {
    console.log('server listening on port 4k');
});
