import mongoose, { Schema } from 'mongoose';

const ArtworkModel = new Schema({
    name: { type: String, unique: true },
    description: { type: String },
    author: { type: String },
    image: { type: String }
}, {toJSON: { virtuals: true } });


module.exports = mongoose.model('Artwork', ArtworkModel);
