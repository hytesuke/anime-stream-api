import mongoose, {
    Schema
} from 'mongoose';
import bcrypt from 'bcrypt';

const UserModel = new Schema({

    account: {
        role: {
            type: String,
            enum: ['User', 'Admin'],
            default: 'User'
        },
        isActive: {
            type: Boolean,
            default: true
        },
        // IP addr
        last_ip: {
            type: String
        },
        lists_ip: [{
            type: String
        }],
        // Token
        token_active_account: {
            type: String
        },
        token_reset_password: {
            type: String
        },
    },


    email: {
        type: String,
        required: true,
        lowercase: true,
        index: {
            unique: true
        },
    },
    password: {
        type: Number
    },
    login: {
        name: String,
    }
    
}, {
    toJSON: {
        virtuals: true
    }
});


module.exports = mongoose.model('User', UserModel);