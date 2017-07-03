var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = process.env.MONGODB || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(db);

//mongodb://localhost:27017/TodoApp
module.exports = {mongoose};
