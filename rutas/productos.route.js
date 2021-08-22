const express = require("express");
const router = express.Router();

var productos2 =[];

var productos = [
    {
        id: 1,
        name:"Yerba",
        price:99,
        fotos: "foto1"
    },
    {
        id:2,
        name:"Cafe",
        price:299,
        fotos: "foto2"
    }
];

router.get('/listar',(req,res) =>{    
    if (productos.length > 0)
        res.send(productos);
    else 
    res.send("No hay productos cargados"); 

});

router.get('/listar/:id', (req,res) => {
    let idd = parseInt(req.params.id);
    if (idd >0 && idd <= productos.length)
        res.send(productos[req.params.id-1]);
    else 
    res.send("Producto Inexistente");   
});
router.get('/delete/:id',(req,res) =>{
    res.send("Esta ruta borra el producto" + req.params.id);
})
router.put('/update/:id',(req,res) =>{
    res.send("Esta ruta actualiza el producto" + req.params.id);
})

router.post('/guardar', (req,res) => {
    productos.push({id: productos.length + 1,name: 'Harina', price: 100, foto:"foto3"});
    res.send(productos);
});

router.post('/add', (req, res, next) => {
  const producto2 = req.body;
  if(!producto2) {
    return res.status(400).json({error: 'No hay datos'});
  }
  producto2.no = productos2.length + 1;
  console.log(producto2);
  productos2.push(producto2);
  return res.status(200).json(productos2);
});


module.exports = router;