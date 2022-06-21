require('dotenv').config()

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Router
const pagesRouter = require('./routes/pages')
app.use("/", pagesRouter)


app.listen(9000, (req, res) => {
    console.log('App is listening on port 9000');
})