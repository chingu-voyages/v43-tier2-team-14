import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import session from "express-session"
import passport from "passport";
import MongoStore from 'connect-mongo'

import dbConnection from "./utils/db.js"

import { PORT, APP_HOME, SESSION_SECRET, MONGO_URI } from "./utils/secrets.js"
import authRoutes from "./routes/auth.js"
import booksRoutes from "./routes/books.js"

dotenv.config()

const app = express()

const port = PORT || 4005

import "./config/passport.js";

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// setting up cors access for just the frontend
app.use(
  cors({
    origin: APP_HOME,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })

  // setting up session cookie with logged in user's database id
); app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  // cookie: { secure: true, maxAge: 60 * 60 * 1000 * 24 }, // 1 day
  store: MongoStore.create({ mongoUrl: MONGO_URI })
}));

// initializing passportjs instance with its session  
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", booksRoutes)
app.use('/auth', authRoutes)

app.get("/", (req, res, next) => {
  console.log(req.user)
  res.send(req.user)
})

app.listen(port, () => {
  dbConnection()
  console.log(`server started on port ${port}`)
})