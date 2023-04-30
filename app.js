const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/images', express.static('images'))
app.use('/CSS', express.static('css'))
app.get ('/', (req,res) => {
    res.sendFile(__dirname+"/index.html")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })