const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const martSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
    },
    images: {
        type: Array,
        default: []
    }
    
}, { timestamps: true })



const Mart = mongoose.model('Mart', martSchema);

module.exports = { Mart }