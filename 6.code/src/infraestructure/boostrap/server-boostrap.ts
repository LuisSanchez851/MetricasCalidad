import http, { createServer } from 'http';
import express from 'express';

export class ServerBoostrap {
    //atributos - propiedades - caracteristicas
    private app!: express.Application;
    // constructor
    constructor(app: express.Application) {
        this.app = app;
    }

    init(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const server = http.createServer(this.app);
            const PORT = process.env.PORT || 4100;
            server.listen(PORT)
                .on("listening",()=>{
                    console.log(`Server is runing on port ${PORT}`);
                    resolve(true);   
                })
                .on("error",(err)=>{
                    console.error(`Error starting server on port ${err}`);
                    reject(false);               
                })
        });
    }
}
























