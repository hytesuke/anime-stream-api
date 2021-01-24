import mongoose, { Schema } from 'mongoose';

const EpisodeModel = new Schema({
    name: { type: String },
    number: { type: Number },
    players: [{ name: String, url: String }]
}, {toJSON: { virtuals: true } });

module.exports = mongoose.model('Episode', EpisodeModel);
