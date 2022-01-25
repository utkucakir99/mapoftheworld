const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const dbSchema = new Schema({

    StaatLabel: {type: String, required: true},
    Einwohnerzahl: {type: Number, required: true},
    LandesspracheLabel: {type: String, required: true},
    ContinentLabel: {type: String},
    area: {type: Number},
    capitalLabel: {type: String, required: true },
    currencyLabel: {type: String}
});

module.exports = mongoose.model('db', dbSchema, 'new_normal');