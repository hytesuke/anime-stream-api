import mongoose, { Schema } from 'mongoose';

const MangaModel = new Schema({
    name: { type: String, index: { unique: true }, required: true},
    authors: [{ type: String, default: null }],
    description: { type: String, default: '' },
    rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    image: { type: String, default: '' },
    firstAired: { type: Date, default: Date.now() },
    keywords: [{ type: String }],
    genres: [{ type: String }],
    other_names: [{ type: String }],
}, {toJSON: { virtuals: true } });


export default mongoose.model('Manga', MangaModel);
