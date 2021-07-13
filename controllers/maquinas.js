require("../database.js")
const Maquina = require("../models/maquinas") ;


/*Controller*/
class Maquinas {
    /*Registrar Maquina*/
    async addMaquina(body) {
        try {
            const { name, mr, type, espec } = body ;
            const newMaquina = new Maquina({name, mr, type, espec}) ;
            await newMaquina.save() ;
        } catch (err) {
            console.error(err) ;
        } ;
    } ;

    /*Buscar Maquina por ID*/
    async findMaquina(id) {
        try {
            const maquina = await Maquina.finById(id) ;
            return maquina ;
        } catch (err) {
            console.error(err) ;
        } ;
    } ;

    /*Actualizar Maquina*/
    async updateMaquina(body, id) {
        try {
            const { name, mr, type, espec } = body ;
            await Maquina.finByIdAndUpdate(id, { name, mr, type, espec }) ;
        } catch (err) {
            console.error(err) ;
        } ;
    } ;

    /*Eliminar Maquina*/
    async deleteMaquina(id) {
        try {
            await Maquina.findByIdAndDelete(id) ;
        } catch (err) {
            console.error(err) ; 
        } ;
    } ;

    /*Mostrar Todas las Maquinas*/
    async allEquipos() {
        try {
            const Maquinas = await Maquina.find();
            return maquinas ;
        } catch (err) {
            console.error(err) ; 
        } ;
    } ;
} ;

module.exports = Maquinas ;
