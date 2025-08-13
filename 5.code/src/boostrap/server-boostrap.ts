import http from "http";
import express from "express";
import { promises } from "dns";

export class ServerBootstrap {
  //atributos-propiedades-caracteristicas
  private app!: express.Application;
  //constructor
  constructor(app: express.Application) {
    this.app = app;
  }

  init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      const PORT = process.env.PORT || 4100;
      server
        .listen(PORT)
        .on("listening", () => {
          console.log(`Servidor iniciado en el puerto ${PORT}`);
          resolve(true);
        })
        .on("error", () => {
          console.error(`Error al iniciar el servidor en el puerto ${PORT}`);
          reject(false);
        });
    });
  }
}
