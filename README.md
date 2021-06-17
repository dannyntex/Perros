# CREAR UNA SENCILLA APLICACIÓN PARA OBTENER IMÁGENES DE DISTINTAS RAZAS DE PERROS

## Documentacion

### Tegnologias usadas

- React
- Redux (Redux-Toolkit)
- Sagas
- React Router
- Jest
- Enzyme
- Prettier

Como base del proyecto he usado React y redux , para la gestion de la api lo he llevado a cabo con Sagas para la gestion de los efectos secundarios. No he trabajado los Css para ahorrar tiempo , he usado Bootstrap, y poder depurar en la medido de lo posible la arquitectura del proyecto.

Se que es muy mejorable sobre todo en el control de errores que he puesto lo basico.

#### Algo que no me ha dado tiempo , tenia planeado cachear las imagenes, para ganar velocidad y evitar llamada a la api.

## FUNCIONALIDAD

El ejercicio consiste en crear un Select / Combo que nos permita seleccionar
una raza concreta de perros, y al hacerlo, nos muestre una lista de imágenes
de la raza seleccionada

## SERVICIOS / ENDPOINTS

- LISTADO DE TODAS LAS RAZAS: https://dog.ceo/api/breeds/list/all
- LISTADO DE IMÁGENES DE UNA RAZA EN CONCRETO https://dog.ceo/api/breed/<raza>/images

## RECURSOS A UTILIZAR

- Cualquier librería que te ayude a realizar el ejercicio
- Versión más reciente de ES6 (new features como spread operator o deestructuring)
- Api más reciente que conozcas de React
