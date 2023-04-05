import express from "express"
import fetch from "node-fetch"
import Book from "../models/bookModel.js"
import User from "../models/userModel.js"

import { GOOGLE_BOOKAPI_URL, GOOGLE_BOOKAPI } from "../utils/secrets.js"

const router = express.Router()

router.get('/get-user-books', async (req, res, next) => {
  try {
    const { userId } = req.body
    const user = await User.findOne({ _id: userId }).populate("books")
    console.log(user.books)
    res.status(200).json({ message: "User Books Fetched Successfully", books: user.books })
  } catch (error) {
    res.status(401).json({ message: error })
  }
})

router.post('/add-book', async (req, res, next) => {
  try {
    const { userId, id, title, categories, pageCount, imageLinks, description, authors } = req.body
    const isExisted = await Book.findOne({ bookId: id })
    if (isExisted) return res.status(400).json({ message: "Book Allready Existed " })

    const book = await Book.create({ bookId: id, title, categories, pageCount, imageLinks, description, authors })
    const user = await User.updateOne({ _id: userId }, { $push: { books: book._id } })
    console.log({ user, book })
    res.status(200).json({ message: "Book Added Successfully", book: book })

  } catch (error) {
    res.status(401).json({ message: error.message })
    console.error(error)
  }
})

router.delete('/remove-book', async (req, res, next) => {
  try {
    const { userId, id } = req.body
    console.log(userId, id)
    const book = await Book.deleteOne({ bookId: id })
    res.status(200).json({ message: "Book Deleted Successfully" })

  } catch (error) {
    res.status(400).json({ message: error.message })
    console.error(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const url = GOOGLE_BOOKAPI_URL
    const apiKey = GOOGLE_BOOKAPI
    const fetchUrl = `${url}/${id}?key=${apiKey}`

    console.log(fetchUrl)
    const response = await fetch(fetchUrl)
    const data = await response.json()
    console.log(data)
    res.status(200).json({ message: "Book Fetched Successfully", Book: data })
  } catch (error) {
    res.status(400).json({ message: 'Error Fetching Book' })
  }

});

router.get('/', async (req, res, next) => {
  try {
    const url = GOOGLE_BOOKAPI_URL
    const apiKey = GOOGLE_BOOKAPI
    let fetchUrl = `${url}?q=`

    if ("category" in req.query) {
      const { category } = req.query
      fetchUrl += `${category}`
    }

    if ("lang" in req.query) {
      const { lang } = req.query
      fetchUrl += `&langRestrict=${lang}`
    }

    if ("orderBy" in req.query) {
      const { orderBy } = req.query
      fetchUrl += `&orderBy=${orderBy}`
    }

    if ("limit" in req.query) {
      const { limit } = req.query
      fetchUrl += `&maxResults=${limit}`
    }
    console.log(fetchUrl)
    const response = await fetch(`${fetchUrl}&key=${apiKey}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    res.status(200).json({ categories: data })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router