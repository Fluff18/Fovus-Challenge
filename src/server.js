import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

app.use(express.static('front'))

app.get('/s3Url', async (req, res) => {
    const url = generateUploadURL()
    res.send({url})
})

app.listen(8080, () => console.log("Listening on port 8080"))