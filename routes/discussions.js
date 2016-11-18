var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('discussions', { title: 'xDoc my tickets' });
});

module.exports = router;
