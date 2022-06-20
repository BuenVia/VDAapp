const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.render('index', { name: 'ARC Support Services'})
})

app.listen(9000, (req, res) => {
    console.log('App is listening on port 9000');
})