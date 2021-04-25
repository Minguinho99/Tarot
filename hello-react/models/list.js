const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : String,
    name_short : String,
    value : String,
    value_int : Number,
    meaning_up : String,
    meaning_rev : String,
    type : String


})

var User = mongoose.model('user', userSchema);
module.exports = User;