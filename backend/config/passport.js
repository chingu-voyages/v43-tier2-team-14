import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import User from "../models/userModel.js";
import { GOOGLE_ID, GOOGLE_SECRET } from "../utils/secrets.js"
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: "http://v43-tier2-team14-backend/auth/google/callback",
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
