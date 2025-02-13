// eslint-disable-next-line no-undef
const express = require('express')
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
// added a comment
// code for deployment
app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  res.send('Ok');;
  hh
})
