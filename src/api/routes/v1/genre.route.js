import express from 'express';
import passport from 'passport';
import * as GenreMiddleware from '../../middlewares/genre.middleware';
const router = express.Router();

/* GET */
router.get('/genres', GenreMiddleware.findAll);
router.get('/genres/:id', GenreMiddleware.findOneById);

/* POST */
router.post('/genres', GenreMiddleware.create);

/* PUT */
router.put('/genres/:id', GenreMiddleware.update);

/* DELETE */
router.delete('/genres/:id', GenreMiddleware.deleteOneById);

module.exports = router;