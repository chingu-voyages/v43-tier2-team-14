import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from "../models/userModel.js";
import dotenv from "dotenv"
const GoogleStrategy = passportGoogle.Strategy;
dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const googleId = profile.id;
      const email = profile.emails[0].value
      const name = profile.displayName
      const picture = profile.picture
      const provider = "google";

      const currentUser = await User.findOne({ googleId: googleId })

      if (currentUser) {
        done(null, currentUser);
      } else {
        const newUser = await User.create({
          googleId: googleId,
          email: email,
          name: name,
          picture: picture,
          provider: provider
        })
        return done(null, newUser);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findById(id)
  done(null, user);
});
