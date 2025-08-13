### **Explicación de cada sección**
 
1. **Empezamos a usar promesas**:
Como se deben hacer conexión a BD o a Event Broker(Apache Kafka, RabbitMQ, ActiveMQ, Nats, AWS EventBridges, etc) y a la hora de incializar todas estas conexiones ´pueden fallar, debemos saber cuál falló? o cuál se conectó?
Debo asegurarme que:
- Levanto el servidor
- Que hay conexión a la BD
- Conexión con el Event Broker
 
* Vamos a crear promesas sirven para operaciones asíncronas, puede tener estados:
 
   - Pendiente (pending): La operación aún no ha terminado.
   - Resuelta (fulfilled): La operación se completó exitosamente.
   - Rechazada (rejected): Hubo un error en la operación.
 
* Las promesas se utilizan para manejar tareas asíncronas como:
 
   - Lectura y escritura de archivos.
   - Consultas a bases de datos.
   - Peticiones HTTP.
 
2. Async - await
3. Función clásica - flecha - autoinvocada