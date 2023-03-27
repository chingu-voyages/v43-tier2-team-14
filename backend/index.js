import express from "express"
import cors from "cors"
import session from "express-session"
import passport from "passport";
import MongoStore from 'connect-mongo'
import helmet from "helmet";

import dbConnection from "./utils/db.js"

import { APP_HOME, PORT, SESSION_SECRET, MONGO_URI } from "./utils/secrets.js"
import authRoutes from "./routes/auth.js"
import booksRoutes from "./routes/books.js"

const app = express()

const port = PORT || 4000

import "./config/passport.js";

// Middlewares
app.use(helmet())
app.use(express.json())
app.use(express.static('public', { dotfiles: 'allow' }))
app.use(express.urlencoded({ extended: true }));


// setting up session cookie with logged in user's database id
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: { httpOnly: true, secure: false, maxAge: (4 * 60 * 60 * 1000) },
  store: MongoStore.create({
    mongoUrl: MONGO_URI,
    ttl: 14 * 24 * 60 * 60,
    autoRemove: 'native'
  })
}));

app.use(cors({
  origin: APP_HOME,
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${APP_HOME}`);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// initializing passportjs instance with its session  
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", booksRoutes)
app.use('/auth', authRoutes)

app.get('/api/user', (req, res, next) => {
  res.json(req.user);
  console.log(req.user)
});

app.get('/', (req, res, next) => {
  console.log('Hello World')
  res.send(200).json("hello world")
})

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(port, () => {
  dbConnection()
  console.log(`SERVER HTTP server started on port ${port}`)
})
