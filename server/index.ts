import * as express from 'express'
import pool from './database'

const app = express()
const port = 8000

// GET posts
app.get('/posts', async (req, res) => {
  try {
    const allPosts = await pool.query('SELECT * FROM posts')
    res.json(allPosts.rows)
  } catch (err) {
    console.error(err)
  }
})

// CREATE posts
app.post('/posts', async (req, res) => {
  try {
    const { text } = req.body
    const newPost = await pool.query(
      'INSERT INTO posts (text) VALUES ($1) RETURNING *',
      [text]
    )

    res.json(newPost.rows[0])
  } catch (err) {
    console.error(err)
  }
})

app.listen(port, () => {
  console.log(`Running server on http://localhost:${port}`)
})
