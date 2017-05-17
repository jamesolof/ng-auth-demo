import * as passport from 'passport';
import * as mongoose from 'mongoose';

let LocalStrategy = require('passport-local').Strategy;

import { IUser } from '../models/user';

let User = mongoose.model<IUser>('User');

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((obj, done)=>{
    done(null, obj);
})

passport.use(new LocalStrategy((username, password, done)=>{
    User.findOne({username: username}, (err, user) => {
        if(err){
            return done(err);
        }

        if(!user){
            return done(null, false, {message: 'invalid username or password'})
        }
        if(!user.validatePassword(password)){
            return done(null, false, {message: 'invalid username or password'})
        }

        return done(null, user)
    })
}))