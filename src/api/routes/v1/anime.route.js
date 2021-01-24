import express from 'express';
import * as AnimeMiddleware from '../../middlewares/anime.middleware';
const router = express.Router();

/* GET */
router.get('/animes', AnimeMiddleware.findAll);
router.get('/animes/:id', AnimeMiddleware.findOneById);

/* POST */
router.post('/animes', AnimeMiddleware.create);

/* PUT */
router.put('/animes', AnimeMiddleware.update);

/* DELETE */
router.delete('/animes/:id', AnimeMiddleware.deleteOneById);

module.exports = router;