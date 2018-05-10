const mongoose = require('mongoose');
const schema = mongoose.Schema;
const lawyearSchema = new schema({
        name: String,
        lastname: String,
        lastmother:String,
        birthdate:String,
        placebirth:String,
        nationality:String,
        dni:String,
        ce:String,
        ruc:String,
        passport:String,
        status:String,
        family:[{ type: Schema.Type.objectId, ref: 'Family'} ],
        domicileReal:{ 
            type:{ type: String },
            street:String,
            district:String,
            province:String,
            department:String
        },
        domicileProcesal:{
            type:{ type: String },
            street:String,
            district:String,
            province:String,
            department:String
        },
        domicileLaboral:{
            type:{ type: String },
            street:String,
            district:String,
            province:String,
            department:String
        },
        phones:[String],
        email:Stirng,
        facebook:String,
        update:{ type: Date, default: Date.now }
});
 
module.exports = mongoose.model('Lawyer', lawyearSchema);
