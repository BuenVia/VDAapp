const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/webinar', (req, res) => {
    res.render('webinar', { webinarName: 'The Logic of Failure', webinarDate: '01/01/2022', webinarTime: '00:00' })
})

router.get('/resources', (req, res) => {
    res.render('resources')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

module.exports = router