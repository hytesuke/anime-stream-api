const { body, validationResult } = require('express-validator/check');
import { generateJWT } from '../../utils/auth/token';
import models from '../models';

export async function login(req, res) {
    try {
        console.log(req.ip);
        const user = await models.User.findOne({ email: req.body.email });
        const token = generateJWT({ user_id: user._id }, '15m');
        console.log(token);
        return res.status(200).json({ status: 200, success: true, data: token });
    } catch (error){
        return res.status(400).json({
            status: 400,
            success: false
        });
    }
}

export async function register(req, res, next){
    try {
        const user = new models.User({ email: req.body.email, password: req.body.password });
        user.save();
        return res.status(200).json({ status: 201, success: true, data: { email: user.email } });
    } catch (error){
        return res.status(500).json({ status: 500, success: false, error: error.message });
    }
}

export async function check_errors(req, res, next){
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ status: 400, success: false, error: errors.array() });
    }
    next();
}


export const check_register = [
    body('email', 'Invalid email')
        .exists()
        .isEmail()
        .trim()
        .custom(async (value) => {
            const user = await models.User.exists({ email: value });
            if(user) throw new Error("Email already exist");
        }),
    body('password', "Password don't exist").exists().trim(),
    body('confirm', "Confirm password don't exist")
    .exists().trim()
    .custom((value, { req }) => {;
        if(value !== req.body.password)
            throw new Error("Password must match");
        return true;
    })
]

export const check_login = [
    body('email', 'Invalid email')
        .exists()
        .isEmail()
        .trim()
        .custom(async (value) => {
            const user = await models.User.exists({ email: value });
            if(!user) throw new Error("Email don't exist");
        }),
    body('password', "Password don't exist")
    .exists()
    .trim()
    .custom(async (value, { req }) => {
        const user = await models.User.findOne({ email: req.body.email });
        if(user && !user.comparePassword(value)) throw new Error("Password don't match");
    })
]

