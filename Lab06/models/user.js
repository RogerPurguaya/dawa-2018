const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/chat')

var user_schema = new Schema({
    _id : String,
    first_name : String,
    last_name: String,
    timezone: String,
    locale : String,
    profile_pic : String
})

User = mongoose.model('user',user_schema,'users')

module.exports = {
    create: (data, callback) => {
        var item = {
            _id : data._id,
            first_name : data.first_name,
            last_name: data.last_name,
            timezone: data.timezone,
            locale : data.locale,
            profile_pic : data.profile_pic
        }
        var nuevo = new User(item).save();
        callback(item)
    }
}