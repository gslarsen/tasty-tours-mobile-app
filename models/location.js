const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    place_id: String,
    tourId: [{type: mongoose.Schema.Types.ObjectId, ref: 'tour'}],
    locationName: String,
    address: String,
    coordinates: Object,
    phone: String,
    image: String,
    menu: String,
    summary: String
})

module.exports = mongoose.model('location', LocationSchema);