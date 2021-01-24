import mongoose, { Schema } from 'mongoose';
import FORMAT from '../../utils/enums/format.enum';
import STATUS from '../../utils/enums/status.enum';

const AnimeModel = new Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String, default: '' },
    status: { type: String, default: STATUS.UPCOMING },
    format: { type: String, default: FORMAT.TV_SERIE },
    rank: { type: Number, default: -1 },
    stars: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    duration: { type: Number, default: 0 },
    image: { type: String, default: '' },
    keywords: { type: Array },
    genders: { type: Array },
    other_names: { type: Array },
    seasons: [{ type: Schema.Types.ObjectId }]
}, { toJSON: { virtuals: true } } );

export default mongoose.model('Anime', AnimeModel);
