# AluraFlix Plataforma para ver videos y categorizarlos

## Introducción:
Este proyecto es una plataforma para ver videos y categorizarlos hecho con React.

## Descripción: 
Este proyecto tiene una pagina home, donde se pueden ver los videos agregados divididos por categorias, cada video se carga con su respectiva imagen, y al hacer click se puede reproducir, importante, solo funciona con videos de Youtube.
Boton nuevo video: esto lleva a un formulario para registrar un nuevo video.
Boton nueva categoria: Esto lleva a un formulario para registrar, eliminar, o modificar las categorias existentes.

## Características
* Uso de React y librerias de React.
* Se usa NPM.

## Dependencias:
* styled components
* react router dom
* react slick
* json server.

## Instalación

Debes tener NPM y Node instalados para poder usar correctamente este proyecto. 

### 1. Clonar el respositorio

git clone https://github.com/Jeysonab/Challenge-ONE-React-Aluraflix.git

### 2. Instalar las depencias
* npm install styled-components
* npm install react-router-dom
* npm install react-slick
* npm install json-server

## Uso:

### Usar
* npm start (En la carpeta raiz) 
* json-server --watch db.json --port 3001 (En la carpeta raiz) 

##  Descripción de la estructura de archivos del proyecto.

* public -> Archivos estáticos y plantilla html base
* src -> aquí están las imagenes, los componentes en la carpeta Components y archivos globales.
* db.json -> está es la "base de datos" que se debe iniciar en el puerto 3001 que contiene los videos y las categorias.









