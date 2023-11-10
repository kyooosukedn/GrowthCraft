const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email exist, please input another email"],
    },

    password: {
        type: String,
        required: [true, "Please provide the password"],
        unique: false,
    },
});

// create a user table or collection if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);