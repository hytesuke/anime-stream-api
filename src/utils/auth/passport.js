'use strict'

import JwtStrategy from 'passport\Strategy';
import ExctractJwt from 'passport-jwt\ExtractJwt';
import User from '../../api/models/user.model';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = TOKEN_SECRET;
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

passport.use('user', new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById((jwt_payload.user_id), function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

passport.use('admin', new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById((jwt_payload.user_id), function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));