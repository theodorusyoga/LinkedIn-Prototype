const path = require('path')
const express = require('express')
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
  });

  app.get('/profile', function(request, response) {
    response.sendFile(__dirname + '/build/index.html')
  });
  
  app.listen(PORT, function(error) {
    if (error) {
      console.error(error); 
    } else {
      console.info("==> ðŸŒŽ Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    }
  });