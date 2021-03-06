import models from '../models';

/* GET */
export async function findAll(req, res){
    try {
        const episodes = await models.Episode.find({});
        return res.status(200).json({ status: 200, success: true, data: episodes });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function findOneById(req, res){
    try {
        const { id } = req.params;
        const episode = await models.Episode.findById(id);
        return res.status(200).json({ status: 200, success: true, data: episode });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}


/* POST */
export async function create(req, res){
    try {
        const episode = new models.Episode(req.body);
        await episode.save();
        return res.status(201).json({ status: 200, success: true, data: episode });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* PUT */
export async function update(req, res){
    try {
        const { id } = req.params;

        const episode = await models.Episode.findByIdAndUpdate(id, req.body, { upsert: false, new: false });

        if(episode === null)
            return res.status(400).json({ status: 400, success: false, error: "Episode don't exist" });

        return res.status(200).json({ status: 200, success: true, data: episode });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* DELETE */
export async function deleteOneById(req, res){
    try {
        const { id } = req.params;

        const episode = await models.Episode.findByIdAndDelete(id); 
        
        if(episode === null)
            return res.status(400).json({ status: 400, success: false, error: "Episode don't exist" });

        return res.status(200).json({ status: 200, success: true });
    } catch (error){
        return res.status(500).json({ status: 500, success: false, error: error.message });
    }
}


