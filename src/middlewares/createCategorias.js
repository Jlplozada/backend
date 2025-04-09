 const validarDatos=(req,res,next)=>{
    const {nombre,descripcion}=req.body;
    if (!nombre||nombre.trim()==="") {
        return res
        .status(400)
        .json({mensaje:"el nombre es obligatorio"})
    }    
    if (!descripcion||descripcion.trim()==="") {
        return res
        .status(400)
        .json({mensaje:"el descripcion es obligatorio"})
    }    
    console.log("paso la validacion");
    next();
    
}
export default validarDatos;