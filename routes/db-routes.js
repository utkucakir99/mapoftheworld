const express = require('express');

const dbController = require('../controllers/db-controller');

const router = express.Router();


/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(__dirname+'/public'))
  .set('views', path.join(__dirname, 'views'))
  .use(express.static(__dirname+'/views'))
  .set('view engine', 'ejs')

*/


router.get('/', function(req, res, next) {
    res.render('worldmaphtml')
})
router.get('/information', function(req, res, next) {
  res.render('information')
})
router.get('/GDP', function(req, res, next) {
  res.render('GDPhtml')
})
router.get('/data/GDPdata', function(req, res, next) {
  res.render('GDPdata')
})
router.get('/GPG', function(req, res, next) {
  res.render('GPGhtml')
})
router.get('/data/GPGdata', function(req, res, next) {
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

router.get('/laender', function(req, res, next) {
  res.render('laender2')
})

router.get('/:id', dbController.getLand)
//router.get('/', dbController.get_alle_Staaten)

/*
showTimes = () => {
    let result = '';
    const times = process.env.TIMES || 5;
    for (i = 0; i < times; i++) {
      result += i + ' ';
    }
    return result;
  };

*/

module.exports = router;


