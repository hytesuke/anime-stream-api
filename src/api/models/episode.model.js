import mongoose, { Schema } from 'mongoose';

const EpisodeModel = new Schema({
    name: { type: String },
    number: { type: Number },
    description: { type: String },
    aired: { type: Date },
    stars: { type: Number },
    players: [{ name: String, url: String }]
}, {toJSON: { virtuals: true } });

export default mongoose.model('Episode', EpisodeModel);

