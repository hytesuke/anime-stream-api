import mongoose, { Schema } from 'mongoose';
import FORMAT from '../../utils/enums/format.enum';
import STATUS from '../../utils/enums/status.enum';

const AnimeModel = new Schema({
    name: { type: String, index: { unique: true }, required: true},
    description: { type: String, default: '' },
    status: { type: String, default: STATUS.UPCOMING },
    format: { type: String, default: FORMAT.TV_SERIE },
    rank: { type: Number, default: -1 },
    stars: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    duration: { type: Number, default: 0 },
    image: { type: String, default: '' },
    aired: { type: Date, default: Date.now() },
    keywords: [{ type: String }],
    genders: [{ type: String }],
    other_names: [{ type: String }],
    seasons: [{ type: Schema.Types.ObjectId }],
}, { toJSON: { virtuals: true } } );

// AnimeModel.index({ name: 1 });

export default mongoose.model('Anime', AnimeModel);
