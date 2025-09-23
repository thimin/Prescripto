import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import userModel from '../models/userModel.js';
import 'dotenv/config'

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await userModel.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.BACKEND_URL + "/api/user/google/callback",
        passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            const existingUser = await userModel.findOne({ email: profile.emails[0].value });

            if (existingUser) {
                // Check if user has a password set, if so, handle it
                if (existingUser.password) {
                    return done(null, false, { message: 'User exists with password login. Please use normal login.' });
                }
                return done(null, existingUser);
            } else {
                // If the user doesn't exist, create a new one
                const newUser = new userModel({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value,
                    password: ''
                });
                await newUser.save();
                return done(null, newUser);
            }
        } catch (error) {
            return done(error, false);
        }
    })
);