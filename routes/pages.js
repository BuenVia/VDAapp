const express = require('express')
const router = express.Router()
const Webinar = require('../models/webinar')
const Partner = require('../models/partner')
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

// Show partners
router.get('/partners', async (req, res) => {
    const partners = await Partner.find()
    
    res.render('partners', { partnerCompany: partners[1].partnerCompany })
})

// Create a new partner
router.post('/partners', async (req, res) => {
    const partner = new Partner({
        partnerCompany: req.body.partnerCompany,
        partnerEmail: req.body.partnerEmail,
        partnerPhone: req.body.partnerPhone,
        partnerWebsite: req.body.partnerWebsite
    })
    try {
        await partner.save()
        res.redirect('/partners')
    } catch (err) {
        res.send('error with loading partner')
    }
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