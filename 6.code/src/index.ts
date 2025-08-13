import app from './infraestructure/web/app';
import { ServerBoostrap } from './infraestructure/boostrap/server-boostrap';

const server = new ServerBoostrap(app);
/**
 * async - await


const start = async ()=>{
    try{
        const instances = [server.init()];
        await Promise.all(instances);
    }catch (error) {
        console.error("Error starting server:",error);
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
            console.error("Error starting server:", error);
        }
    }
)();




