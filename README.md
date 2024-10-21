# Multi-step form



## Tecnologías Utilizadas

- **Lenguaje**: TypeScript
- **Framework**: Next.js
- **Validación**: Zod
- **Estilos**: Styled-components
- **Gestión de Estado**: Zustand
- **API Simulator**: Beeceptor

## Estructura del Proyecto
```
src/
├── app/
│   ├── form/                    
│   │   ├── steps/               
│   │   │   ├── actions.tsx      # Archivo para acciones relacionadas con pasos
│   │   │   ├── page.tsx         # Página que maneja los pasos del formulario
│   │   │   └── form.tsx         # Archivo para el formulario
│   │   └── layout.tsx           # Archivo de diseño del formulario
│   ├── main-layout/              # Carpeta para el diseño principal
│       
├── components/                   # Carpeta para componentes reutilizables
│   ├── component1.tsx            # Primer componente
│   ├── component2.tsx            # Segundo componente
│   └── styles/                   # Carpeta para estilos de componentes
│       └── component.styled.tsx   # Estilos del componente
│       
├── context/                      # Carpeta para contextos de React
│   └── form-context/             # Contexto para formularios
│ 
├── constants/                    # Carpeta para constantes estáticas
│   └── staticInfo/               # Información estática
│ 
├── schemas/                      # Carpeta para esquemas
│   └── validation-schemas/       # Esquemas de validación
│ 
├── types.d.ts                    # Archivo de tipos globales





```
