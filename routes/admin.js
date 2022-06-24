const express = require('express')
const router = express.Router()
const Partner = require('../models/partner')

router.get('/', async (req, res) => {
    const partners = await Partner.find()
    res.render('admin', { partners: partners })
})

router.post('/edit', async (req, res) => {
    const partnerId = req.body.partnerEdit
    const partner = await Partner.findById(partnerId)
    res.render('edit', { partner: partner })
})


module.exports = router