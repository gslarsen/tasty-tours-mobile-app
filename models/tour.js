const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    cityId: {type: mongoose.Schema.Types.ObjectId, ref: 'city'},
    name: String,
    image: String,
    description: String,
    locations: [{type: mongoose.Schema.Types.ObjectId, ref: 'location'}]
})

module.exports = mongoose.model('tour', TourSchema);