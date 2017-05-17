import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as expressJWT from 'express-jwt';


//import API/Routes
import Users from './routes/users';

// iintegrate passport configuration
require('./passport/config');

const app = express();
const authenticate = expressJWT({secret: 'SecretKey'});

//establish database connection
mongoose.connect('mongodb://admin:admin@ds143191.mlab.com:43191/ng-node-auth')

//configure the application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//set up passport 
app.use(passport.initialize());
app.use(passport.session());

//establish routes in the application
app.use('/api/users', Users);

//test route
app.get('/api/profile', authenticate, (req, res, next) => {
  res.status(200).send('you have found the magic key');
});

//catchall application endpoint
app.get('/*',(req,res,next)=>{
  res.sendFile('./public/index.html');
});

export = app;
