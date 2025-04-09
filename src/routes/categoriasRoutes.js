import express from 'express';

import CategoriaController from '../controllers/CategoriaControllers.js';
import validarDatos from '../middlewares/createCategorias.js';


const router = express();

try {
    router.get('/',CategoriaController.getAllCategorias);
    router.post('/',validarDatos ,CategoriaController.createCategoria);
    
} catch (error) {
    console.log(error);
    
}

router.post('/',(req,res)=>{
    console.log(req.body);
    
});

// router.get('/',(req,res)=>{

     //res.send('hola desde el inicio');
// });

export default router;