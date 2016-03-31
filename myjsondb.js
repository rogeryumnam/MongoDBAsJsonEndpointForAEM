var express  = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/test', function(req, res, next) {
  res.send("This is crap!");
  next();
});

// Connect to DB
mongoose.connect('mongodb://localhost/jsonaempage');
mongoose.connection.once('open', function() {
  console.log('Connected to DB...');
  
    // Load the models (a form of dependency injection).
  app.models = require('./models/index');
  
  /*
  // Add Title Component
  new app.models.jsonforaem ({
    title : { 
      text : 'This is a Title'
    }
  }).save(function(err) {
    if (err) throw err;
    console.log("Title Component Saved Successfully...");
  });
  
  // Add Text Component
  new app.models.jsonforaem ({
    text : { 
      text : '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>'
    }
  }).save(function(err) {
    if (err) throw err;
    console.log("Text Component Saved Successfully...");
  });
  
  // Add Image Component
  new app.models.jsonforaem ({
    image : { 
      title: 'My Image', 
      fileReference: '/content/dam/geometrixx/travel/train_man_working.jpg', 
      linkUrl: 'http://www.adobe.com/au/marketing-cloud/enterprise-content-management.html', 
      alt:'alternate'
    } 
  }).save(function(err) {
    if (err) throw err;
    console.log("Image Component Saved Successfully...");
  });
  
  // Add TextImage Component
  new app.models.jsonforaem ({
    textimage : { 
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>', 
        alignment: 'right', 
        title: 'My TextImage', 
        fileReference: '/content/dam/projects/media/cover', 
        linkUrl: 'https://www.hackerrank.com/', 
        alt:'alternate'
    } 
  }).save(function(err) {
    if (err) throw err;
    console.log("TextImage Component Saved Successfully...");
  }); */

  // Load the routes -- to access data : http://localhost:3000/jsontoaem
  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });
  
  console.log('Listening on port 3000...');
  app.listen(3000);
});