# Suite de pruebas automatizadas – El Puerto de Liverpool

Este suite de pruebas se desarollo con Cypress como herramietna de automatizacion, con metodologia BDD para lenguaje de negocio y patron de diseño POM. 
Los casos desarrollados fueron los siguientes:

- Creacion de usuario
- Búsqueda de productos
- Filtrado de productos
- Agregar a carrito

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

## Instalación

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/roddyrojasl/liverpool-suite-test-automation-cypress.git
```

### Paso 2: Instalar Node.js (obviar si ya esta instalado)

Descargar e instalar desde [nodejs.org](https://nodejs.org/)

Verifica instalacion:

```bash
node --version
npm --version
```

### Paso 3: Instalar dependencias

```bash
npm install
```

Con este único comando se instalan todas las herramientas necesarias:

- **Cypress** (v14.5.4) - herramienta de testing
- **@badeball/cypress-cucumber-preprocessor** (v23.0.0) - soporte para Gherkin (BDD)
- **TypeScript** (v5.9.3) - lenguaje de programación
- Y todas sus dependencias

## Ejecutar pruebas

### Opción 1: Modo visual (Para desarollar)

Si es la primera vez que se ejecute, se necesita realizar las configuraciones iniciales. Mas informacion [https://docs.cypress.io/app/get-started/open-the-app](https://docs.cypress.io/app/get-started/open-the-app)

```bash
npx cypress open
```

### Opción 2: Modo headless (para CI/CD)

Ejecuta todas las pruebas sin emulador, ideal para DevOps

```bash
npx cypress run
```

## Estructura del proyecto

```
cypress/
├── e2e/
│   ├── features/       # Escenarios en Gherkin (.feature)
│   ├── steps/          # Implementación de los steps
│   └── pages/          # Page Object Model (POM)
├── videos/             # Videos generados al ejecutar npx cypress run
└── support/            # Configuración global de Cypress
```

## Autor

Roddy Rojas Loyola
