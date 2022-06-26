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

router.post('/edit/update', async (req, res) => {
    // await Partner.updateOne({ _id: req.body._id }, { partnerCompany: 'a' })
    // res.render('index')
    const partnerUpdate = {
        partnerCompany: req.body.partnerCompany,
        partnerEmail: req.body.partnerEmail,
        partnerPhone: req.body.partnerPhone,
        partnerWebsite: req.body.partnerWebsite
    }
    try {
        await Partner.updateOne({ _id: req.body._id }, partnerUpdate)
        res.render('index')
    } catch (e) {
        console.log(e);
    }
})


module.exports = router