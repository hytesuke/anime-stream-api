import express from 'express';
import * as UserMiddleware from '../../middlewares/user.middleware';
const router = express.Router();


/* Login */
router.post('/login', 
    UserMiddleware.check_login,
    UserMiddleware.check_errors,
    UserMiddleware.login);

/* Register */
router.post('/register', 
    UserMiddleware.check_register, 
    UserMiddleware.check_errors, 
    UserMiddleware.register);

//router.get('/whoami', passport.authenticate('user', { session: false });

module.exports = router;