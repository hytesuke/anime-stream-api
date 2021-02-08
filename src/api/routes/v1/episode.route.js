import express from 'express';
import passport from 'passport';
import * as EpisodeMiddleware from '../../middlewares/episode.middleware';
const router = express.Router();

/* GET */
router.get('/episodes', passport.authenticate('user', { session: false }), EpisodeMiddleware.findAll);
router.get('/episodes/:id', passport.authenticate('user', { session: false }), EpisodeMiddleware.findOneById);

/* POST */
router.post('/episodes', passport.authenticate('admin', { session: false }), EpisodeMiddleware.create);

/* PUT */
router.put('/episodes/:id', passport.authenticate('admin', { session: false }), EpisodeMiddleware.update);

/* DELETE */
router.delete('/episodes/:id', passport.authenticate('admin', { session: false }), EpisodeMiddleware.deleteOneById);

module.exports = router;