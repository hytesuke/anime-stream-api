import express from 'express';
import * as SecurityController from '../../controllers/security.controller';
const router = express.Router();


/* Login */
router.post('/login', 
    SecurityController.check_login,
    SecurityController.check_errors,
    SecurityController.login);

/* Register */
router.post('/register', 
    SecurityController.check_register, 
    SecurityController.check_errors, 
    SecurityController.register);

    /* Register */
// router.post('/reset-password', 
//     SecurityController.check_password, 
//     SecurityController.check_errors, 
//     SecurityController.register);

//router.get('/whoami', passport.authenticate('user', { session: false });

module.exports = router;