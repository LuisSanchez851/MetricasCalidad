import express, { Request, Response } from "express";

class App {
  private app!: express.Application;

  constructor() {
    this.app = express();
    
    this.routes();
  }

  private routes() {
    this.app.get("/", (request: Request, response: Response) => {
      response.send("hola uniempresarial");
    });

    this.app.get("/", (request: Request, response: Response) => {
      response.send("i m Ready");
    });
  }
  getApp(){
    return this.app;
  }
}

export default new App().getApp();
