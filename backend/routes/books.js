import express from "express"
import axios from "axios"
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const url = process.env.GOOGLE_BOOKAPI_URL
    const apiKey = process.env.GOOGLE_BOOKAPI
    let fetchUrl = url

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
    const response = await axios.get(`${fetchUrl}&key=${apiKey}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    res.status(200).json({ categories: data })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// router.get('/:category', async (req, res, next) => {
//   try {
//     const url = process.env.GOOGLE_BOOKAPI_URL
//     const apiKey = process.env.GOOGLE_BOOKAPI

//     const { category } = req.params

//     const resData = await fetch(`${ url }${ category }& key=${ apiKey } `)
//     const data = await resData.json()
//     res.status(200).json({ category: data })
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// })
// // langRestrict

// router.get('/:lang/:category', async (req, res, next) => {
//   try {
//     const url = process.env.GOOGLE_BOOKAPI_URL
//     const apiKey = process.env.GOOGLE_BOOKAPI

//     const { category, lang } = req.params

//     const resData = await fetch(`${ url }${ category }& langRestrict=${ lang }& key=${ apiKey } `)
//     const data = await resData.json()
//     res.status(200).json({ category: data })
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// })

// router.get('/:category/:number', async (req, res, next) => {
//   try {
//     const url = process.env.GOOGLE_BOOKAPI_URL
//     const apiKey = process.env.GOOGLE_BOOKAPI

//     const { category, number } = req.params
//     console.log({ category, number })

//     const resData = await fetch(`${ url }${ category }& maxResults=${ number }& key=${ apiKey } `)
//     const data = await resData.json()
//     res.status(200).json({ category: data })

//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// })

// router.get('/:lang/:category/:number', async (req, res, next) => {
//   try {
//     const url = process.env.GOOGLE_BOOKAPI_URL
//     const apiKey = process.env.GOOGLE_BOOKAPI

//     const { category, number, lang } = req.params
//     console.log({ category, number })

//     const resData = await fetch(`${ url }${ category }& maxResults=${ number }&& langRestrict=${ lang }& key=${ apiKey } `)
//     const data = await resData.json()
//     res.status(200).json({ category: data })

//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// })


export default router