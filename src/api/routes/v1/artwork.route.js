import express from 'express';
import passport from 'passport';
import * as ArtworkMiddleware from '../../middlewares/artwork.middleware';
const router = express.Router();

/* GET */
router.get('/artworks', passport.authenticate('user', { session: false }), ArtworkMiddleware.findAll);
router.get('/artworks/search', passport.authenticate('user', { session: false }), ArtworkMiddleware.findByQuery);
router.get('/artworks/:id', passport.authenticate('user', { session: false }), ArtworkMiddleware.findOneById);

/* POST */
router.post('/artworks', passport.authenticate('admin', { session: false }), ArtworkMiddleware.create);

/* PUT */
router.put('/artworks/:id', passport.authenticate('admin', { session: false }), ArtworkMiddleware.update);

/* DELETE */
router.delete('/artworks/:id', passport.authenticate('admin', { session: false }), ArtworkMiddleware.deleteOneById);

module.exports = router;