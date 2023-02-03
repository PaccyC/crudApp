

let fileuploadRouter = require('./fileUpload');
app.use('/fileUpload', fileuploadRouter);


var session = require('express-session');

var flash = require('connect-flash');
app.use(session({
    secret : 'webslesson',
    cookie:{maxAge : 60000},
    saveUninitialized : false,
    resave : false
  }));
  
  app.use(flash());
  app.listen(3000);



  