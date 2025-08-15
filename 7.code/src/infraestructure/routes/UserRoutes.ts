import { Router } from "express";
import { UserApplication } from "../../application/UserApplication";
import { UserAdapter } from "../adapter/UserAdapter";
import { UserController } from '../controller/UserController';
import { validateUser } from "../middleware/validateUser";


//Express
const router = Router();
//Inicializacion de capas
const userAdapter = new UserAdapter();
const userApp = new UserApplication(userAdapter);
const userController = new UserController(userApp);

//Definicion de rutas ----> Endpoint ---> Especificacion de URL
router.post("/users", async (request,  response) =>{
    try {
        await userController.registerUser(request, response);
    } catch (error) {
        console.error("Error en usuario:", error);
        response.status(400).json({message:"Error en la creacion del usuario"});
    }
}

);
router.post("/register", validateUser, (request, response) =>
  userController.registerUser(request, response)
);

router.get("/users",  async(request, response) => {
    try {
        await userController.allUsers(request, response);
    } catch (error) {
        console.error("Error en usuario", error);
        response.status(400).json({message: "Error en la obtencion del usuario"});
    }
});

export default router; 