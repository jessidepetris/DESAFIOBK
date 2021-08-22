const express = require("express");
const multer = require("multer");

const app = express();
//const router = express.Router()//;
const usuarios = require('./rutas/usuarios.route');
const productos = require('./rutas/productos.route'); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let storage = multer.diskStorage({
  destination:function(req,file,callback){
    callback(null,"uploads");
  },
  filename:function(req,file,callback){
    callback(null,file.fieldname+"-"+Date.now())
    }
})

let upload = multer({storage});

//router.get('', (req,res)=>{
// res.send("Soy ()");
//})

//router.get('/test', (req,res)=>{
//  res.send("Soy /test");
//  })

app.get('/error',(req,res,next)=>{
  res.status(500).send({Error:'Algo no está funcionando.'})
  
})

app.post('/upload',upload.single('myFile'),(req,res,next)=>{
  
  if(!req.file){
    const error = new Error("No hay archivo");
    error.httpStatusCode = 400;
    return next(error)
  }
  res.send(req.file);
  })

app.use((req,res,next)=>{
  console.log('Middelwere a nivel de aplicacion');
  next();
  })

app.use('/usuarios', usuarios);
app.use('/productos',productos);

app.use(express.static('public'));
app.listen(4000, ()=>{

  console.log("Escuchando en puerto 3000"); 
})

