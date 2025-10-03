# Historias de Usuario y Criterios de Aceptación
## Aplicación de Cócteles - TheCocktailDB

---

## Ticket 1: HU-01 - Filtro por primera letra

**Historia de Usuario:**
Como usuario, quiero filtrar cócteles por la primera letra del nombre, para encontrar rápidamente bebidas específicas.

**Criterios de Aceptación:**

```gherkin
Escenario: Filtrar cócteles por primera letra
  Dado que estoy en la pantalla principal
  Cuando selecciono la letra "M"
  Entonces la tabla muestra solo cócteles que comienzan con "M"

Escenario: Sin resultados para una letra
  Dado que estoy en la pantalla principal
  Cuando selecciono una letra sin cócteles asociados
  Entonces se muestra un mensaje "No se encontraron resultados"
```

---

## Ticket 2: HU-02 - Tabla de resultados

**Historia de Usuario:**
Como usuario, quiero ver una tabla con los resultados filtrados mostrando ID, imagen, nombre, categoría, tipo (alcohólico/no alcohólico), cantidad de ingredientes y fecha de modificación, para tener una visión completa de cada cóctel.

**Criterios de Aceptación:**

```gherkin
Escenario: Visualizar tabla con resultados
  Dado que he aplicado un filtro
  Cuando se cargan los resultados
  Entonces la tabla muestra las columnas: ID, imagen, nombre, categoría, tipo, ingredientes y fecha
  Y cada fila contiene datos válidos de la API
```

---

## Ticket 3: HU-03 - Navegación por ID

**Historia de Usuario:**
Como usuario, quiero hacer clic en el ID de un cóctel, para navegar a su página de detalles.

**Criterios de Aceptación:**

```gherkin
Escenario: Navegar a detalles desde ID
  Dado que veo la tabla de resultados
  Cuando hago clic en el ID de un cóctel
  Entonces soy redirigido a la página de detalles
  Y la URL contiene el ID del cóctel seleccionado
```

---

## Ticket 4: HU-04 - Modal de ingredientes

**Historia de Usuario:**
Como usuario, quiero hacer clic en la cantidad de ingredientes, para ver un modal con el listado completo de ingredientes y sus medidas.

**Criterios de Aceptación:**

```gherkin
Escenario: Abrir modal de ingredientes
  Dado que veo la tabla de resultados
  Cuando hago clic en la cantidad de ingredientes
  Entonces se abre un modal
  Y el modal muestra todos los ingredientes con sus medidas

Escenario: Cerrar modal de ingredientes
  Dado que el modal de ingredientes está abierto
  Cuando hago clic en el botón de cerrar
  Entonces el modal se cierra
```

---

## Ticket 5: HU-05 - Modal de categoría desde tabla

**Historia de Usuario:**
Como usuario, quiero hacer clic en la categoría de un cóctel, para ver un modal con imágenes de otros cócteles de esa categoría.

**Criterios de Aceptación:**

```gherkin
Escenario: Abrir modal de categoría
  Dado que veo la tabla de resultados
  Cuando hago clic en una categoría
  Entonces se abre un modal con imágenes de cócteles de esa categoría
  Y cada imagen es clicable
```

---

## Ticket 6: HU-06 - Totales en pie de tabla

**Historia de Usuario:**
Como usuario, quiero ver el total de cócteles alcohólicos y no alcohólicos en el pie de la tabla, para conocer la distribución de resultados.

**Criterios de Aceptación:**

```gherkin
Escenario: Mostrar totales de cócteles
  Dado que la tabla tiene resultados
  Cuando se cargan los datos
  Entonces se muestra el total de cócteles alcohólicos
  Y se muestra el total de cócteles no alcohólicos

Escenario: Actualizar totales al filtrar
  Dado que tengo resultados en la tabla
  Cuando aplico un nuevo filtro
  Entonces los totales se actualizan correctamente
```

---

## Ticket 7: HU-07 - Listado en modal de ingredientes

**Historia de Usuario:**
Como usuario, quiero ver un listado de ingredientes con sus medidas en un modal, para conocer la composición exacta del cóctel.

**Criterios de Aceptación:**

```gherkin
Escenario: Ver ingredientes y medidas
  Dado que el modal de ingredientes está abierto
  Entonces veo el nombre de cada ingrediente
  Y veo la medida correspondiente de cada ingrediente
```

---

## Ticket 8: HU-08 - Imágenes de ingredientes

**Historia de Usuario:**
Como usuario, quiero ver imágenes de los ingredientes en el modal, para identificarlos visualmente.

**Criterios de Aceptación:**

```gherkin
Escenario: Mostrar imágenes disponibles
  Dado que el modal de ingredientes está abierto
  Cuando la API proporciona imágenes de ingredientes
  Entonces las imágenes se muestran en el modal

Escenario: Ingredientes sin imagen
  Dado que el modal de ingredientes está abierto
  Cuando un ingrediente no tiene imagen disponible
  Entonces el modal no muestra errores y continúa funcionando
```

---

## Ticket 9: HU-09 - Botón cóctel aleatorio

**Historia de Usuario:**
Como usuario, quiero acceder a un botón de cóctel aleatorio desde cualquier página, para descubrir nuevas bebidas de forma sorpresiva.

**Criterios de Aceptación:**

```gherkin
Escenario: Obtener cóctel aleatorio
  Dado que estoy en cualquier página de la aplicación
  Cuando hago clic en el botón de cóctel aleatorio
  Entonces soy redirigido a la página de detalles de un cóctel aleatorio
  Y el cóctel mostrado es diferente en cada clic
```

---

## Ticket 10: HU-10 - Información completa del cóctel

**Historia de Usuario:**
Como usuario, quiero ver la información completa de un cóctel (imagen, nombre, ingredientes, medidas, instrucciones y categoría) en su página individual, para conocer todos los detalles de preparación.

**Criterios de Aceptación:**

```gherkin
Escenario: Ver detalles completos
  Dado que accedo a la página de detalles de un cóctel
  Entonces veo la imagen del cóctel
  Y veo el nombre, ingredientes, medidas, instrucciones y categoría
  Y las instrucciones están en español por defecto
```

---

## Ticket 11: HU-11 - ID en URL

**Historia de Usuario:**
Como usuario, quiero que la URL muestre el ID del cóctel, para poder compartir o guardar el enlace específico.

**Criterios de Aceptación:**

```gherkin
Escenario: URL con ID del cóctel
  Dado que accedo a la página de detalles
  Entonces la URL contiene el ID del cóctel
  
Escenario: Acceso directo por URL
  Dado que accedo directamente a una URL con ID de cóctel
  Entonces la página carga los detalles correctos del cóctel
```

---

## Ticket 12: HU-12 - Cambio de idioma

**Historia de Usuario:**
Como usuario, quiero cambiar el idioma de las instrucciones mediante botones con banderas, para leer la receta en mi idioma preferido sin recargar la página.

**Criterios de Aceptación:**

```gherkin
Escenario: Cambiar idioma de instrucciones
  Dado que estoy en la página de detalles
  Cuando hago clic en un botón de bandera de idioma
  Entonces las instrucciones cambian al idioma seleccionado
  Y la página no se recarga

Escenario: Idioma no disponible
  Dado que estoy en la página de detalles
  Cuando selecciono un idioma no disponible para el cóctel
  Entonces se mantienen las instrucciones en el idioma actual
```

---

## Ticket 13: HU-13 - Slider de categoría

**Historia de Usuario:**
Como usuario, quiero hacer clic en la categoría del cóctel, para ver un slider navegable con imágenes y nombres de otros cócteles de la misma categoría.

**Criterios de Aceptación:**

```gherkin
Escenario: Abrir slider de categoría
  Dado que estoy en la página de detalles
  Cuando hago clic en la categoría del cóctel
  Entonces se muestra un slider
  Y el slider contiene imágenes y nombres de cócteles de esa categoría
```

---

## Ticket 14: HU-14 - Navegación del slider

**Historia de Usuario:**
Como usuario, quiero navegar por el slider de categorías (adelante/atrás), para explorar todos los cócteles disponibles.

**Criterios de Aceptación:**

```gherkin
Escenario: Navegar hacia adelante
  Dado que el slider está abierto
  Cuando hago clic en el control de avance
  Entonces se muestra el siguiente cóctel

Escenario: Navegar hacia atrás
  Dado que el slider está abierto
  Cuando hago clic en el control de retroceso
  Entonces se muestra el cóctel anterior
```

---

## Ticket 15: HU-15 - Navegación desde slider

**Historia de Usuario:**
Como usuario, quiero hacer clic en un cóctel del slider, para acceder directamente a su página individual.

**Criterios de Aceptación:**

```gherkin
Escenario: Acceder a cóctel desde slider
  Dado que el slider está abierto
  Cuando hago clic en la imagen de un cóctel
  Entonces soy redirigido a la página de detalles de ese cóctel
  Y la URL se actualiza con el ID del nuevo cóctel
```

---

## Resumen de Tickets

| Ticket | Historia de Usuario | Prioridad |
|--------|-------------------|-----------|
| Ticket 1 | Filtro por primera letra | Alta |
| Ticket 2 | Tabla de resultados | Alta |
| Ticket 3 | Navegación por ID | Alta |
| Ticket 4 | Modal de ingredientes | Alta |
| Ticket 5 | Modal de categoría desde tabla | Media |
| Ticket 6 | Totales en pie de tabla | Media |
| Ticket 7 | Listado en modal de ingredientes | Alta |
| Ticket 8 | Imágenes de ingredientes | Baja |
| Ticket 9 | Botón cóctel aleatorio | Media |
| Ticket 10 | Información completa del cóctel | Alta |
| Ticket 11 | ID en URL | Alta |
| Ticket 12 | Cambio de idioma | Media |
| Ticket 13 | Slider de categoría | Media |
| Ticket 14 | Navegación del slider | Media |
| Ticket 15 | Navegación desde slider | Media |