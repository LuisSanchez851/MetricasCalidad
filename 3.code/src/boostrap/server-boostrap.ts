import http from 'http';
import express from 'express';

export class ServerBootstrap {
    //atributos-propiedades-caracteristicas
    private app!: express.Application;
    //constructor
    constructor(app: express.Application) {
        this.app = app;
    }

    init () {
        const server = http.createServer(this.app);
        const PORT = process.env.PORT || 4100;

        server.listen(PORT, () => {
            console.log(`Servidor iniciado en http://localhost:${PORT}`);
        });
    }
}