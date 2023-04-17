import express from "express"
import User from "../models/userModel.js"

import { GOOGLE_BOOKAPI_URL, GOOGLE_BOOKAPI, NYTIMES_BOOK_KEY, NYTIMES_BOOK_URL, NYTIMES_BOOK_SECRET } from "../utils/secrets.js"

const router = express.Router()

router.get('/get-cart-items', async (req, res, next) => {
  const { userId } = req.body
  console.log(userId)
});

router.post('/add-item-to-cart', async (req, res, next) => {
  const { userId, item } = req.body
  console.log({ userId, item })
});

router.post('/remove-item-from-cart', async (req, res, next) => {
  const { userId, item } = req.body
  console.log({ userId, item })

});

export default router