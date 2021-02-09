import models from '../models';

/* GET */
export async function findAll(req, res){
    try {
        const animes = await models.Anime.find({});
        return res.status(200).json(animes);
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function findOneById(req, res){
    try {
        const { id } = req.params;
        const anime = await models.Anime.findById(id);
        return res.status(200).json({ status: 200, success: true, data: anime });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function findByQuery(req, res) {
    try {
        const { q } = req.query;
        const regex = new RegExp(q, 'i'); // i for case insensitive
        const anime = await models.Anime.find({ 
            $and: [{
                $or: [{ name: regex } , { keywords: regex }, { other_names: regex }]
            }]
        });
        return res.status(200).json({ status: 200, success: true, data: anime });
    } catch(error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* POST */
export async function create(req, res){
    console.log("ok");
    try {
        console.log(req.body);
        const anime = new models.Anime(req.body);
        console.log(anime);
        anime.save();
        return res.status(201).json({ status: 200, success: true, data: anime });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* PUT */
export async function update(req, res){
    try {
        const { id } = req.params;

        const anime = await models.Anime.findByIdAndUpdate(id, req.body, { upsert: false, new: false });

        if(anime === null)
            return res.status(400).json({ status: 400, success: false, error: "Anime don't exist" });

        return res.status(200).json({ status: 200, success: true, data: anime });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* DELETE */
export async function deleteOneById(req, res){
    try {
        const { id } = req.params;

        const anime = await models.Anime.findByIdAndDelete(id); 
        
        if(anime === null)
            return res.status(400).json({ status: 400, success: false, error: "Anime don't exist" });

        return res.status(200).json({ status: 200, success: true });
    } catch (error){
        return res.status(500).json({ status: 500, success: false, error: error.message });
    }
}


