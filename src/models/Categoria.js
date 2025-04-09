import connection from "../Utils/db.js";

class Categoria {

    constructor(){ }

    //Metodos -> listar
    async getAll(){

        try {
            
            const [rows] = await connection.query("SELECT * FROM categorias");
            return rows;

        } catch (error) {
            
            throw new Error("Error al obtener las categorias");
        }
    }

    //Metodo -> crear categoria
     async create(nombre, descripcion) {

        connection.query("insert into categorias (nombre,descripcion) values (?,?)", [nombre, descripcion]);

        return {
            id:SpeechRecognitionResultList.insertId,
            nombre,
            descripcion
        }        
        
    }
    async getById(id){
        try {
            const [rows] = connection.query("select * from categorias where id =?",[id]);
            if (rows.length===0) {
                throw new Error ("categoria no encontrada")
            }
            return rows[0];
        } catch (error) {
            throw new Error("Error al obtener la categoria");
        }

    }
    estaRelacionadaConProductos(Categoria_id){
        
    }
    async delete(id){
        let datos=this.getById(id);
        console.log(datos);
        
    }
    
}

export default Categoria;