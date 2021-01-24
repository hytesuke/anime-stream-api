import Anime from '../models/anime.model';

/* GET */

export async function findAll(req, res){
    try {
        const animes = await Anime.find({});
        return res.status(200).json(animes);
    } catch (error){
        return res.status(400).json(error.message);
    }
}

export async function findOneById(req, res){
    try {
        return res.status(200).json(animes);
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}

/* POST */
export async function create(req, res){
    try {
        const anime = new Anime(req.body);
        return res.status(200).json(anime);
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}

/* PUT */
export async function update(req, res){
    try {
        return res.status(200).json({
            status: 200,
            success: true
        });
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}

/* DELETE */
export async function deleteOneById(req, res){
    try {
        return res.status(200).json({
            status: 200,
            success: true
        });
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}


