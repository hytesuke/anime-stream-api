import mongoose, { Schema } from 'mongoose';

const GenreModel = new Schema({
    name: { type: String, unique: true, required: true },
}, { toJSON: { virtuals: true } } );

export default mongoose.model('Genre', GenreModel);
