const express = require('express')
const router = express.Router()
const Webinar = require('../models/webinar')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    res.render('index')
})

// Display current webinar
router.get('/webinar', async (req, res) => {
    const webinar = await Webinar.find()
    const currentWebinar = webinar[webinar.length - 1];
    res.render('webinar', currentWebinar)
})

// Create a new webinar
router.post('/webinar', async (req, res) => {
    const webinar = new Webinar({
        webinarName: req.body.webinarName, 
        webinarDate: req.body.webinarDate, 
        webinarTime: req.body.webinarTime
    })
    try {
        await webinar.save()
        res.redirect('/webinar')
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
})

router.get('/resources', (req, res) => {
    res.render('resources')
})

router.get('/partners', (req, res) => {
    res.render('partners')
})

router.get('/testimonials', (req, res) => {
    res.render('testimonials')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/admin', (req, res) => {
    res.render('admin')
})

module.exports = router