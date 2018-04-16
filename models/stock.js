const mongoose = require('mongoose');

const StockSchema = mongoose.Schema({
    stockSymbol: {type: String }
});

var Stock = module.exports = mongoose.model('Stock', StockSchema);