# Node modules

node_modules/
 
# Logs

logs/

*.log

npm-debug.log*

yarn-debug.log*

yarn-error.log*
 
# Runtime data

pids/

*.pid

*.seed

*.pid.lock
 
# TypeScript cache and build output

dist/

build/

*.tsbuildinfo
 
# Environment variables

.env

.env.local

.env.*.local
 
# OS specific

.DS_Store

Thumbs.db
 
# IDEs

.vscode/

.idea/
 
# Coverage reports

coverage/

*.lcov
 
# Optional: Docker artifacts

docker-compose.override.yml
 
# Optional: PM2 process files

.pids/

*.pm2.log
 
# Optional: Next.js build folder (if hybrid)

.next/
 
# Optional: Test coverage from Jest

jest-coverage/

 
### **Explicación de cada sección**
 
- Ahora mejoramos el código colocando las rutas en un archivo, es decir aquí estamos modularizando
 
### **Configuramos Nodemon que nos permite mantener el servidor arriba así hagamos cambios**
- se realiza la instalación de Nodemon como dependencia de desarrollo
- npm i -D nodemon o npm i --save-dev nodemon
- crear en la raíz del proyecto un archivo llamado nodemon.json
{
    "watch": ["src"],
    "ext": "ts json",
    "ignore": ["src/**/*.spec.ts","node_modules"],
    "execMap": {
        "ts":"ts-node"
    },
    "verbose": true,
   "restartable": "rs"
   
}
 
### Configurar el scripts en el pagkage.json
"scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
 