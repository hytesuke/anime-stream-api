import express from 'express';
import UserMiddleware from '../../middlewares/user.middleware';
const router = express.Router();


// /* Login */
// router.post('/login', UserMiddleware.login);
// /* Register */
// router.post('/register', UserMiddleware.register);

// router.get('/whoami', passport.authenticate('user', { session: false });

module.exports = router;