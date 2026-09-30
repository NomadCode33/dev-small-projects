const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})