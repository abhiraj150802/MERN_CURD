var mongoose = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');


const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String },
    phone: { type: String }
})
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin)



module.exports = mongoose.model('user', userSchema)                          

