# 🔁 Angular Shared Count App

Aplicación simple en Angular que demuestra cómo compartir y sincronizar estado (`count`) entre múltiples componentes y páginas usando `BehaviorSubject`. Ideal para entender cómo implementar comunicación reactiva entre componentes en Angular 19+.

---

## Funcionalidades Implementadas ✨

- **Visualización del valor `count`** en el componente principal y en componentes hijos (`<app-child-1>` y `<app-child-2>`).
- **Actualización reactiva del estado** desde cualquier componente: todos reflejan el mismo valor en tiempo real.
- **Persistencia del estado entre rutas**: el valor de `count` se mantiene al navegar entre `/home` y `/page2`.
- **Componentes standalone**: todo el proyecto está construido sin `NgModule`, usando la nueva arquitectura moderna de Angular.

---

## Stack Tecnológico y Conceptos Aplicados 🚀

**Angular 19:**
- `BehaviorSubject`: patrón de estado compartido reactivo.
- `| async` pipe: para suscripciones automáticas y seguras.
- Componentes standalone.
- Servicios inyectables (`providedIn: 'root'`) para mantener estado global.
- Routing entre componentes con persistencia de estado.
- Comunicación desacoplada entre componentes hermanos a través de servicios.

**RxJS:**
- Observables reactivos para transmitir el valor de `count`.
- Patrón `Observable + set()` para mantener separación entre lectura y escritura.

**Angular Material:**
- Botones (`MatButtonModule`) para acciones Add/Subtract.

---

## Enlace de la aplicación desplegada 🌐

Puedes probar la aplicación en el siguiente enlace:  
[**Ver aplicación en vivo**](https://angular-shared-count-app.netlify.app)


## Estructura del Proyecto 📁

src/
├── app/
│ ├── components/
│ │ ├── count/
│ │ ├── child-1/
│ │ ├── child-2/
│ │ ├── page-2/
│ ├── services/
│ │ └── count.service.ts
│ └── app.routes.ts


