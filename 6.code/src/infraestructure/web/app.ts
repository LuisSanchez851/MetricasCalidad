import express,{Request, Response} from 'express';

class App{
    private app!: express.Application;
    constructor (){
        this.app = express();
        this.routes();
    }

    private routes():void{
        this.app.get("/",(request: Request, response: Response)=>{
            response.send("Hola ");
        });

        this.app.get("/check",(request: Request, response: Response)=>{
            response.send("I'm Ready");
        });
    }
    getApp(){
        return this.app;
    }
}

export default new App().getApp(); 