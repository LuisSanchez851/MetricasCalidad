### **Explicación de cada sección**
 
1. **Primer Proyecto en Node.js con Express**:
   - Primer Proyecto paso a paso para la generación de los archivos e instalación de Framework Express
   
 
2. **Tabla de Contenidos**:
 
   - Facilita la navegación dentro del archivo README.
 
3. **Instalación de dependencias y generación de archivos**:
 
    - npm init -y
    - npm i -g typescript // Esto tiene inferencia global
    - npm install --save-dev typescript // esto tiene inferencia local en el proyecto
    - Verificar quedo instalada tsc -v
    - tsc --init
 
4. **Configuración de Archivo tsconfig**:
 
   - Descomentar rootDir, sourceMap, outDir
   - incorporar:
    "include": ["src/**/*", "src/index.ts"],
    "exclude": ["node_modules", "dist"]
 
5. Instalación de Express
    - npm i express
    - npm i -g --save-dev @types/express
    - npm install -g ts-node
    - para ejecutar los ts por consola y se ejecuta con el comando ts-node index.ts