import mongoose, { Schema } from 'mongoose';
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
            type: String,
            date: Date
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
        type: String
    },
    login: {
        name: String,
    }
    
}, {
    toJSON: {
        virtuals: true
    }
});

UserModel.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(8, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
    
});
     
UserModel.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compareSync(candidatePassword, this.password)
};

export default mongoose.model('User', UserModel);