var express = require('express');
var router = express.Router();

/*GET home page. */

router.get('/information', function(req, res, next) {
    res.render('information')
  })
  router.get('/GDP', function(req, res, next) {
    res.render('GDPhtml')
  })
  router.get('/GDPdata', function(req, res, next) {
    res.render('GDPdata')
  })
  router.get('/GPG', function(req, res, next) {
    res.render('GPGhtml')
  })
  router.get('/GPGdata', function(req, res, next) {
    res.render('GPGdata')
  })
  router.get('/erklaerungen/whatisgpg', function(req, res, next) {
    res.render('whatisgpg')
  })
  router.get('/countries/Deutschland', function(req, res, next) {
    res.render('Vizsite')
  })
  router.get('/europedata', function(req, res, next) {
    res.render('europedata')
  })
  router.get('/europemapdata', function(req, res, next) {
    res.render('europemapdata')
  })
  router.get('/barplotnew', function(req, res, next) {
    res.render('barplotnew')
  })
  router.get('/countries/Frankreich', function(req, res, next) {
    res.render('francehtml')
  })
  router.get('/francedata', function(req, res, next) {
    res.render('francedata')
  })
    
  router.get('/laender2', function(req, res, next) {
    res.render('laender2')
  })
  router.get('/', function(req, res, next) {
    res.render('worldmaphtml')
})
module.exports = router; 