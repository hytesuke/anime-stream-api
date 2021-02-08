import express from 'express';
import passport from 'passport';
import * as SeasonMiddleware from '../../middlewares/season.middleware';
const router = express.Router();

/* GET */
router.get('/seasons', passport.authenticate('user', { session: false }), SeasonMiddleware.findAll);
router.get('/seasons/:id', passport.authenticate('user', { session: false }), SeasonMiddleware.findOneById);
router.get('/seasons/:id/episodes', passport.authenticate('user', { session: false }), SeasonMiddleware.findByIdWithAllEpisodes);

/* POST */
router.post('/seasons', passport.authenticate('admin', { session: false }), SeasonMiddleware.create);

/* PUT */
router.put('/seasons/:id', passport.authenticate('admin', { session: false }), SeasonMiddleware.update);

/* DELETE */
router.delete('/seasons/:id', passport.authenticate('admin', { session: false }), SeasonMiddleware.deleteOneById);

module.exports = router;