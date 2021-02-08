import models from '../models';

/* GET */
export async function findAll(req, res){
    try {
        const seasons = await models.Season.find({});
        return res.status(200).json({ status: 200, success: true, data: seasons });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function findOneById(req, res){
    try {
        const { id } = req.params;
        const season = await models.Season.findById(id);
        return res.status(200).json({ status: 200, success: true, data: season });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function  findByIdWithAllEpisodes(req, res){
    try {
        const { id } = req.params;
        const season = await models.Season.findById(id).populate('episodes');
        return res.status(200).json({ status: 200, success: true, data: season });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}


/* POST */
export async function create(req, res){
    try {
        const season = new models.Season(req.body);
        await season.save();
        return res.status(201).json({ status: 200, success: true, data: season });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* PUT */
export async function update(req, res){
    try {
        const { id } = req.params;

        const season = await models.Season.findByIdAndUpdate(id, req.body, { upsert: false, new: false });

        if(season === null)
            return res.status(400).json({ status: 400, success: false, error: "Season don't exist" });

        return res.status(200).json({ status: 200, success: true, data: season });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* DELETE */
export async function deleteOneById(req, res){
    try {
        const { id } = req.params;

        const season = await models.Season.findByIdAndDelete(id); 
        
        if(season === null)
            return res.status(400).json({ status: 400, success: false, error: "Season don't exist" });

        return res.status(200).json({ status: 200, success: true });
    } catch (error){
        return res.status(500).json({ status: 500, success: false, error: error.message });
    }
}


