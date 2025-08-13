### **Explicación de cada sección**
 
1. **Archivo de configuración de entorno .env**:
 
- .env
 
2. Instalamos dotenv que es una dependencia de Node.js que nos permite cargar variables de entorno desde un archivo .env a process.env.  Es recomendable usar cuando se trabaja con datos sensibles, como claves, tokens de API, credenciales de BD, puertos etc
 
   - npm install dotenv o npm i dotenv --save
 
3. Joi librería para validar datos o Se usa para definir y validar el esquema de las variables de entorno.
Instalación
 
- npm i joi