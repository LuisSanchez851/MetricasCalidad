import  express,{Request, Response}  from 'express';

//crear una instancia de express
const app = express();
//gestionar rutas 
app.get('/check', (request: Request, response: Response) => {
    response.send('hola uniempresarial');
});

app.get('/check', (request: Request, response: Response) => {
    response.send('i m Ready');
});

export default app;