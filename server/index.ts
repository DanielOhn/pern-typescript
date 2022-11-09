import * as express from "express"
import pool from "./database"

const app = express()
const port = 3000

// GET posts
app.post("/posts", async (req, res) => {
    try {
        const { text } = req.body;
        const newPost = await pool.query("INSERT INTO posts (text) VALUES ($1) RETURNING *", [text])

        res.json(newPost.rows[0])
    }
})

// CREATE posts

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}`)
})