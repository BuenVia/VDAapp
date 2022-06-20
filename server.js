const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({ extended: true }))

// Router
const pagesRouter = require('./routes/pages')
app.use("/", pagesRouter)


app.listen(9000, (req, res) => {
    console.log('App is listening on port 9000');
})