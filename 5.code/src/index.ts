import app from './app';
import { ServerBootstrap } from './boostrap/server-boostrap';

const server = new ServerBootstrap(app);
/**
 * async - await

const start = async () =>{
    try{
        const instances = [server.init()];
        await Promise.all(instances);
    }catch(error){
        console.error('Error al iniciar el servidor:', error);
    }
}
start();
 */
(
    async () => {
        try {
            const instances = [server.init()];
            await Promise.all(instances);
        } catch (error) {
            console.error('Error al iniciar el servidor:', error);
        }
    }
)();