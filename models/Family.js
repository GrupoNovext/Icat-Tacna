const mongoose = require('mongoose');
const schema = mongoose.Schema;
const hotsPotSchema = new schema({
    spouse: {
        type: { type: String },
        name: String,
        lastname: String,
    },
    mother: {
        type: { type: String },
        name: String,
        lastname: String
    },
    father: {
        type: { type: String }, 
        name: String, 
        lastname: String
    },
    children: {
        type: []
    },
    lawyerId: { type: Schema.Types.ObjectId, ref: "Lawyer" }

});
 
module.exports = mongoose.model('HotsPot', hotsPotSchema);
