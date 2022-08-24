const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/', (req, res) => {
    res.json({result: "ok", data: [1,2,3,4,5]});
})

app.get('/v1/service', (req, res) => {
    res.json({msg: 'This is CORS-enabled for all origins!'});
})

app.listen(PORT, () => { 
    console.log(`Server is running. ${PORT}`)
})