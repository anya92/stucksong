const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	spotifyId: String,
	username: String,
	photo: String
});

mongoose.model('User', userSchema);
