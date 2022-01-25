const { Db } = require('mongodb');
const mongoose = require('mongoose');

const db = require('../schema/dbschema');
const HttpError = require('../schema/http-error');

const get_alle_Staaten = async (req, res, next) => {
    let DBs;
    try {
        DBs = await db.find({});
        
    } catch(err) {
        const error = new HttpError(
            'Something went wrong, please try again later.',
            500
        );
        return next(error);
    }
    res.render('get_all_Länder', {title: 'Liste aller Länder', DBs: DBs})
  };


const getLand = async (req, res, next) => {
  const dbId = req.params.id;
  
    let DB;
    try {
      DB = await db.find({"StaatLabel": dbId});
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not find a Country.',
        500
      );
      return next(error);
    }
    if (!DB) {
      const error = new HttpError(
        'Could not find a Country for the provided id.',
        404
      );
      return next(error);
    }
  
    const population = [...new Set(DB.map((item) => item.Einwohnerzahl))];
    const sprache = [...new Set(DB.map((item) => item.LandesspracheLabel))];
    const Continent = [...new Set(DB.map((item) => item.ContinentLabel))];
    const area = [...new Set(DB.map((item) => item.area))];
    const capital = [...new Set(DB.map((item) => item.capitalLabel))];
    const currency = [...new Set(DB.map((item) => item.currencyLabel))];


    const land = {
      
      Einwohnerzahl: population,
      Landessprache: sprache,
      Kontinent: Continent,
      Landesfläche: area,
      Hauptstadt: capital,
      Währung: currency
    }
    /*
    console.log(Staat);
    console.log(population);
    console.log(sprache);
    console.log(Continent);
    console.log(area);
    console.log(capital);
    console.log(currency);
    */


    console.log(land);
    console.log("");
  
    res.render('pageforcountry', {title: req.params.id, land:land})
    //res.render('Land', {title: req.params.id, DB:DB})

  };
  
exports.get_alle_Staaten = get_alle_Staaten;
exports.getLand = getLand;







