var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('knowledgeBase', { title: 'xDoc Knowledge base' });
});

module.exports = router;
