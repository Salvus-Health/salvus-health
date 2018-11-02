var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var bcrypt = require('bcrypt');
var async = require('async');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'doctor'],
        default: 'user'
    },
    firstVisit: {
        type: Boolean,
        required: true,
        default: true
    },
    visitDates: {
        type: [Number],
        default: undefined
    },
    zipCode: {
        type: Number,
    },
    doctorsVisited: {
        type: [String],
        default: undefined
    }

});

// UserSchema.set('toJSON', {
//     transform: function (doc, ret, options) {
//         delete ret.password;
//         return ret;
//     }
// });
//


UserSchema.pre('save', preSave);

async function preSave(next) {
    // var User = mongoose.model('User');
    var updateObject = this._doc;
    //
    // await User.find({email:updateObject.email}, function (err, data) {
    //      if (bcrypt.compareSync(updateObject.password, data[0].password)) {
    //          console.log("SAMEEEEEEEEE pasword");
    //          next();
    //      }
    //      else{
    //          console.log("differentPassword");
    //          next(err);
    //      }
    //  });
    var hash = bcrypt.hashSync(this.password, 10);
    // var isMod = this.isModified("password");
    if (!this.isModified("password")) return next();
    this._doc.password = hash;
    console.log("hashed password" + this._doc.password);
    next();
}

//TODO: modify so that the password can be updated
//TODO: delete incoming first visit so that this value cannot be modified
UserSchema.pre('findOneAndUpdate', function (next) {
    delete this._update.password;
    next();
});

UserSchema.pre('findByIdAndUpdate', function (next) {
    delete this._update.password;
    next();
});


UserSchema.methods.getTokenData = function () {
    return {
        id: this.id,
        email: this.email
    }
};

UserSchema.methods.verifyPassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

UserSchema.methods.equals = function (user) {
    var id1 = this._id.toString(), id2 = user._id;
    var bol = id1 == id2;
    return bol;
};

//TODO:fix method its kinda weird
UserSchema.methods.canRead = function (object) {
    var role = this.role;
    return this.equals(object) ||
        (object.owner && object.owner == this.id) ||
        this.role == "admin";
};

UserSchema.methods.canEdit = function (object) {
    return this.canRead(object); // can be extended later
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);
