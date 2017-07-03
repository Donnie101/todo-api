var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://TheDude:HeyNow@ds139352.mlab.com:39352/yelpcampthedudeversion');

//mongodb://localhost:27017/TodoApp
module.exports = {mongoose};
