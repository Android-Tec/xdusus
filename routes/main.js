__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/index.html')
})
router.get('/api', (req, res) => {
    res.sendFile(__path + '/index.html')
})
router.get('/docs', (req, res) => {
    res.sendFile(__path + '/index.html')
})
router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Komi-San•BOT',
            namaowner: 'Android-Technology',
            instagram: 'Komi-San_BOT',
            youtube : 'Android Technology'
        }
    }
    res.json(config)
})

module.exports = router
