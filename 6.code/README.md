### **Explicación de cada sección**
 
1. Agregar al .env las nuevas variables de entorno
- DB_HOST=localhost
- DB_PORT=3306
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=patterns_class
2. **Cofigurar mysql***
 - npm install typeorm mysql2
3. vamos a environment-vars.ts y reconfiguramos el archivo con las nuevas variables de entorno
4. Reorganización del proyecto en la arquitectura hexagonal
5. Descomentamos en el tsconfig.ts las siguientes opciones:
 -  "experimentalDecorators": true,
 -  "emitDecoratorMetadata": true,