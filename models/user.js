const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserShema = new Schema({ 
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 30,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    phone: {
        type : String,
        required : true,
        trim: true
    },
    role:{
        type: String,
        enum:['user' , 'admin'],
        default: 'user'
    }
})


module.exports = mongoose.model("User", UserShema);