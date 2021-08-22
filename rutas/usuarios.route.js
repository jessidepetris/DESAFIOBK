const express = require("express");
const router = express.Router();

router.get('',(req,res) =>{
    res.send("Esta ruta trae a todos los usuarios");
})

//function validar(req,res,next){
//if (!isNaN(req.query.q))
    //next (new Error("No puede ser un número"))
    //res.send("Error: No puede ser un número");
//console.log('Middleware nivel Ruta 1')
//next();
//}

router.get('/buscar',(req,res) =>{ //validar despues de buscar,
    res.send(`Se buscará el usuario que comienze con [${req.query.q}]`);
})
router.get('/delete/:id',(req,res) =>{
    res.send("Esta ruta borra el usuario" + req.params.id);
})
router.get('/update/:id',(req,res) =>{
    res.send("Esta ruta actualiza el usuario" + req.params.id);
})

module.exports = router;