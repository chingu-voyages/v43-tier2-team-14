import express from "express"
import fetch from "node-fetch"
import { GOOGLE_BOOKAPI_URL, GOOGLE_BOOKAPI } from "../utils/secrets.js"
const router = express.Router()

router.get('/:id', async (req, res) => {
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