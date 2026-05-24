# Manada Solidaria - Prueba de Concepto de Mapas

## Objetivo

Evaluar la viabilidad técnica de utilizar componentes de mapas interactivos para representar reportes geográficos de animales perdidos o encontrados dentro del proyecto Manada Solidaria.

## Tecnologías

- React
- Vite
- OpenStreetMap

## Funcionalidades previstas

- Visualización de mapa interactivo.
- Marcadores geográficos.
- Información asociada a cada marcador.
- Navegación y zoom.
- Evaluación de experiencia de usuario y facilidad de integración.

## Estado

En desarrollo.
## ¿Qué es Mapcn?
Mapcn es una biblioteca de componentes para React orientada a la construcción de mapas interactivos. Internamente utiliza MapLibre GL  para renderizar el mapa, el cual utiliza un documento de estilo para definir la apariencia visual del mismo, y requiere Tailwind CSS junto con shadcn/ui para su integración visual. Esto implica que la adopción de Mapcn dentro del proyecto requiere utilizar dichas tecnologías como dependencias del frontend.

## Instalación 
Ejecutar el comando para añadir el componente de mapa: npx shadcn@latest add @mapcn/map
Componente de mapa:
import { Map, MapControls } from "@/components/ui/map";
import { Card } from "@/components/ui/card";

export function MyMap() {
  return (
    <Card className="h-[320px] p-0 overflow-hidden">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls />
      </Map>
    </Card>
  );
}
