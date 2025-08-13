import http from 'http';
import app from './app';
//crear una instancia de express

const server  = http.createServer(app);
const PORT = process.env.PORT || 4100;
/*server.listen(4100,function(){


});*/


server.listen(4100,() => {
    console.log(`server on http://localhost:${PORT}`);
});
