import models from '../models';

/* GET */
export async function findAll(req, res){
    try {
        const genres = await models.Genre.find({});
        return res.status(200).json({ status: 200, success: true, data: genres });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

export async function findOneById(req, res){
    try {
        const { id } = req.params;
        const genre = await models.Genre.findById(id);
        return res.status(200).json({ status: 200, success: true, data: genre });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* POST */
export async function create(req, res){
    try {
        const genre = new models.Genre(req.body);
        await genre.save();
        return res.status(201).json({ status: 200, success: true, data: genre });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* PUT */
export async function update(req, res){
    try {
        const { id } = req.params;

        const genre = await models.Genre.findByIdAndUpdate(id, req.body, { upsert: false, new: false });

        if(genre === null)
            return res.status(400).json({ status: 400, success: false, error: "Genre don't exist" });

        return res.status(200).json({ status: 200, success: true, data: genre });
    } catch (error){
        return res.status(400).json({ status: 400, success: false, error: error.message });
    }
}

/* DELETE */
export async function deleteOneById(req, res){
    try {
        const { id } = req.params;

        const genre = await models.Genre.findByIdAndDelete(id); 
        
        if(genre === null)
            return res.status(400).json({ status: 400, success: false, error: "Genre don't exist" });

        return res.status(200).json({ status: 200, success: true });
    } catch (error){
        return res.status(500).json({ status: 500, success: false, error: error.message });
    }
}


