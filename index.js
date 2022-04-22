const express = require('express')
const app = express()

app.get('/', (res, req) => {
    return req.send('Hello World!')
})

app.listen(3000)