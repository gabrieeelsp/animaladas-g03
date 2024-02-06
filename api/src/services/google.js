const { User } = require('../../src/db');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    'auth-google',
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3001/user/auth/google/',
        },
        async (accessToken, refreshToken, profile, cb) => {
            const googleMail = profile.emails[0].value;

            const [user, created] = await User.findOrCreate({
                where: { email: googleMail },
                defaults: {
                    name: profile.name.givenName,
                    lastName: profile.name.familyName,
                    is_verified: true,
                },
            });

            cb(null, user);
        },
    ),
);

// passport.serializeUser((user, cb) => {
//     process.nextTick(function () {
//         cb(null, { id: user.id, username: user.username });
//     });
// });

// passport.deserializeUser((user, cb) => {
//     process.nextTick(function () {
//         return cb(null, user);
//     });
// });
