# Instalar node_modules
```npm install```


## Crear el package.json donde viene la config de Node, punto de entrada de la aplicación
```npm init -y```
	
## Instalar express.js		

``` npm install express --save ```

Instalar una version en especifica
``` npm install express@4.17.1 --save ```       

# NOTA 
Node tiene un interprete de js en el backend, con el comando --> node index.js  , estaria ejecutando el aplicativo
como un servidor

## Instalar nodemon 
Para cada ves que se haga un cambio se carguen automaticamente para evitar bajar y subir el 
servidor cada ves que se haga un cambio
``` npm install -g nodemon ```

Ahora se tiene que levantar el servidor asi
``` nodemon index.js   ```

## Scripts
Crear scripts
"scripts": {
``` "start:dev": "nodemon index.js" ```
}
    
Ejecutar los scripts
``` npm run start:dev ``` 

## Database - MongoDb - MongoDbAtlas 
### MONGOOSE (ORM) = 
Encargado de crear la conexion a la base de datos, leer documentación para crear la conexion
https://mongoosejs.com/ 
	
### Instalar el ORM
``` npm i mongoose ```  

## CREAR VARIABLES DE ENTORNO **
Permite leer archivos con la extension .env	
```npm i dotenv```

## INSTALAR EL CORS 
Permite aceptar peticiones de diferentes dominions 	
```npm i cors```
