import app from './app';
import { ServerBootstrap } from './boostrap/server-boostrap';

const server = new ServerBootstrap(app);
server.init();