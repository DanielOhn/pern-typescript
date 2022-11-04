import * as express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Running server on http://localhost:${port}`)
})