import express from "express"
import cors from "cors"
import session from "express-session"
import passport from "passport";
import MongoStore from 'connect-mongo'
import helmet from "helmet";
import https from "https"
import fs from "fs"
import dbConnection from "./utils/db.js"

import { PORT, , SESSION_SECRET, MONGO_URI } from "./utils/secrets.js"
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

// setting up cors access for just the frontend
app.use(
  cors({
    //origin: [APP_HOME,'http://localhost:3000','http://localhost:5173'],
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: false,
  })

  // setting up session cookie with logged in user's database id
); app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { secure: true, maxAge: 60 * 60 * 1000 * 24 }, // 1 day
  store: MongoStore.create({
    mongoUrl: MONGO_URI,
    ttl: 14 * 24 * 60 * 60,
    autoRemove: 'native'
  })
}));

// initializing passportjs instance with its session  
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", booksRoutes)
app.use('/auth', authRoutes)

app.get("/", (req, res, next) => {
  console.log(req.user)
  res.send({ user: req.user })
})

app.listen(port, () => {
  dbConnection()
  console.log(`SERVER HTTP server started on port ${port}`)
})
