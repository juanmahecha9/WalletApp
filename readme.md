# Test angular-nodejs

El proyecto contiene el codigo fuente de un backend desarrollado en nodejs, el cual se ejecuta con el comando npm run start-dev el cual ejecuta el ambiente de prueba con babel y para poder ejecutar el proyecto compilado se ejecuta el comando npm start

## Estructura del proyeco:

El proyecto esta dividido en dos carpetas las cuales son:

1. api-hbs, la cual contiene el codigo final del proyecto integrando el frontend en el backend con lo cual se puede establecer un solo servicio para ejeccutar dicha app, este servicio por defecto se encuentra en el localhost:4000, ó en el localhost:4200 si se ejecutan en conjunto a angular.
   La interfaz de funcionamiento costa de un:

- una pagina de inicio
- una pagina de formulario la cual perimite le validar cuando los campos estan vacios o se encuentran con un erro (caso que se ve el con el correo).
- una pagina de inicio y de registro
- un perfil que muetra los datos del usuario
- una pagina que permite retirar o agrerar al balance del saldo, con la limitacion de que si el monto a retirar excede al actual no lo permite.

## Estructura del backend

El backend contiene el codigo en nodejs escrito con ecmascript 6, el cual usa como compilador a babel, la base de datos esta alojada en mongo db

# Imagenes de la interfaz

### Home

![Alt text](docs/home.png)

### Form

![Alt text](docs/form.png)

### Form Autocomplete select country, con este se procede a seleccionar el indicativo del pais

![Alt text](docs/formAutocomplete.png)

### Campos requeridos

![Alt text](docs/formRequired.png)

### Form preview

![Alt text](docs/formPreview.png)

### Envio de datos por correo

![Alt text](docs/enviodatos.png)

### inicio sesion

![Alt text](docs/inicios.png)

### inicio sesion error

![Alt text](docs/inicioSerror.png)

### login

![Alt text](docs/login.png)

### profile

![Alt text](docs/profile.png)

### remover saldo

![Alt text](docs/remove.png)

### Agregar salgo

![Alt text](docs/add.png)
![Alt text](docs/add1.png)
