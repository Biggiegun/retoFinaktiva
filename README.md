# SPA - MARVEL APP - Características generales.

- Aplicativo que permite encontrar super héroes de MARVEL.
- Detalle del comic accesible con un click.
- Lista de comic favoritos.


# Arquitectura de la aplicación (Capas) 

- Capa de persistencia: 
La capa de persistencia del aplicativo, está implementada en su totalidad mediante el uso de localStorage y sus métodos para enviar y traer información: setItem, getItem.

- Capa de vista (Presentación):
El aplicativo en su capa de presentación muestra una solución de tipo SPA, con un navbar -buscador incluido-, un main que contiene los componentes donde se renderizan las tarjetas con la información tanto del personaje como de los comics, y un footer a modo de pie de página descriptivo. 

- Capa de Aplicación (Lógica):
A modo de lógica la app funciona con un componente contenedor principal, por donde "salen" los demás componentes (Navbar, Footer, Cards, Modal y Favoritos). El componente cards es el componente donde se renderizan las tarjetas con la información del héroe; el componente Navbar tiene como función servir de contenedor de un buscador para filtrar resultados por nombre del héroe; en tanto Modal sirve para abrir el mismo elemento y detallar allí información de comic, tal como imagen, nombre y descripción del mismo. Por último el componente Favoritos es un contenedor para albergar comic que viene de localStorage.

La gestión de la información se realizó haciendo uso de las props y los hooks de estado y de efecto, toda vez que la solución se basó en componentes de tipo funcionales.
