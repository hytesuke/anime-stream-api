'use strict'
import jwt from 'jsonwebtoken';

const JWT_SIGN_SECRET = process.env.TOKEN_SECRET;

export function decodeJWT(header){
    const token = parseAuthorization(header);
    return verifyJwt(token);
}

export function parseAuthorization(auth){
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
}

export function verifyJWT(token){
    try {
        const jwt_verify = verify(token, JWT_SIGN_SECRET);
        return jwt_verify ? jwt_verify.user_id : null;
    }
    catch(error){
        return null;
    }
}

export function generateJWT(data, expire) {
    return jwt.sign(data, JWT_SIGN_SECRET, {
        expiresIn: expire
    });
}
