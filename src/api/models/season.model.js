import mongoose, { Schema } from 'mongoose';

const SeasonModel = new Schema({
    name: { type: String },
    episodes: [{ type: Schema.Types.ObjectId }]
}, {toJSON: { virtuals: true } });

export default mongoose.model('Season', SeasonModel);
