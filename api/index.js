const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3002, () => {
  console.log('Example App Listening on Port 3002')
})