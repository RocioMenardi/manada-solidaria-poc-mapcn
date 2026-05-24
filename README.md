# Manada Solidaria - PoC Mapcn

## Objetivo

Evaluar la viabilidad técnica de utilizar el componente Mapcn para representar geográficamente reportes de animales perdidos o encontrados dentro del proyecto Manada Solidaria.

## Tecnología evaluada

Mapcn es una colección de componentes para React orientada a la creación de mapas interactivos.
Características identificadas durante la investigación:

- Utiliza MapLibre GL como motor de renderizado de mapas.
- Permite utilizar distintos proveedores de mapas compatibles con MapLibre.
- No requiere API Keys para su configuración básica.
- Integra soporte para temas claros y oscuros.
- Está diseñado para funcionar con Tailwind CSS y shadcn/ui.

## Entorno utilizado

- Node.js v24.16.0
- React
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui
- mapcn

## Instalación realizada

1. Creación del proyecto React utilizando Vite.
2. Instalación y configuración de Tailwind CSS.
3. Inicialización de shadcn/ui.
4. Instalación del componente de mapa mediante:

```bash
npx shadcn@latest add @mapcn/map
```

## Estado actual

- [x] Proyecto React funcionando.
- [x] Tailwind configurado.
- [x] shadcn/ui configurado.
- [x] mapcn instalado.
- [ ] Visualización del mapa.
- [ ] Prueba de marcadores.
- [ ] Prueba de eventos interactivos.
- [ ] Evaluación final.
