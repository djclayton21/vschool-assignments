const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
//presave hash
userSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hashedPwd) => {
        if (err) return next(err);
        user.password = hashedPwd;
        next()
    })
})

//check password
userSchema.methods.checkPassword = function(pwdAttempt, callback) {
    bcrypt.compare(pwdAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}
//remove pw from user object before sending to front
userSchema.methods.withoutPassword = function(){
    const user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model("User", userSchema)