/*Modulos*/

const express = require("express") ;
const router = express.Router();

/*Controllers*/

const Maquina = require("../controllers/maquinas") ;

/*Inicializar la clase Maquina*/

const MaquinaController = new Maquina() ;

/*Root*/
/*Mostrar Maquina*/

router.get('/', async (req, res) => {
    const maquinas = await MaquinaController.allMaquinas() ;
    res.json(maquinas) ;
});

/*Buscar por ID*/

router.get('/:_id', async (req, res) => {
    const maquina = await MaquinaController.findMaquina(req.params._id) ;
    res.json(maquina) ;
})

/*Registrar una Nueva Maquina*/

router.post('/', async (req, res) => {
    await MaquinaController.addMaquina(req.body); 

    const maquinas = await MaquinaController.allMaquinas() ;
    res.json(maquinas) ;
});

/*Modificar una Maquina*/

router.put('/:_id', async (req, res) => {
    await MaquinaController.updateMaquina(req.body, req.params._id) ;
    const maquina = await MaquinaController.findMaquina(req.params._id) ;
    res.json(maquina);
});

/*Eliminar una Maquina*/

router.delete('/:_id', async (req, res) => {
    await MaquinaController.deleteMaquina(req.params._id) ; 

    const maquinas = await MaquinaController.allMaquinas() ;
    res.json(maquinas) ;
});

module.exports = router ;