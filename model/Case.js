const mongoose = require('mongoose');

const CasesSchema = mongoose.Schema({
    Deaths: {
        type: String,
    },
    Active: { type: String },
    Confirmed: {type: String},
    Recovered: {type: String}

});

module.exports = mongoose.model('Cases', CasesSchema);
