const mongoose = require("mongoose") ;
const { Schema } = mongoose ;

/*Schema*/

const MaquinaSchema = new Schema({
    name: {type: String, required: true},
    mr: {type: String, required: true},
    type: {type: String, required: true},
    espec: {type: String, required: true}
})

module.exports = mongoose.model('Maquina', MaquinaSchema) ; 