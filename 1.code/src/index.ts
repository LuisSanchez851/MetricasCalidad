import  express  from 'express';
import http from 'http';
//crear una instancia de express
const app = express();

const server  = http.createServer(app);
/*server.listen(4100,function(){


});*/


server.listen(4100,() => {
    console.log(`server on http://localhost:4100`);
});
