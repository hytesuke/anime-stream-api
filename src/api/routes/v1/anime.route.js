import express from 'express';
import passport from 'passport';
import * as AnimeMiddleware from '../../middlewares/anime.middleware';
const router = express.Router();

/* GET */
router.get('/animes', passport.authenticate('user', { session: false }), AnimeMiddleware.findAll);
router.get('/animes/search', passport.authenticate('user', { session: false }), AnimeMiddleware.findByQuery);
router.get('/animes/:id', passport.authenticate('user', { session: false }), AnimeMiddleware.findOneById);

/* POST */
router.post('/animes', passport.authenticate('admin', { session: false }),AnimeMiddleware.create);

/* PUT */
router.put('/animes/:id', passport.authenticate('admin', { session: false }), AnimeMiddleware.update);

/* DELETE */
router.delete('/animes/:id', passport.authenticate('admin', { session: false }), AnimeMiddleware.deleteOneById);

module.exports = router;