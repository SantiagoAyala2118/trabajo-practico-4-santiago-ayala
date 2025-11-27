# Glosario de conceptos y ejemplos de TypeScript empleados en este trabajo

## 1. Tipos fundamentales (primitivos)

** Definición **: Tipos básicos que trae TS/JS: number, string, boolean, null, undefined, bigint, symbol.

- Ejemplo:

```typescript
let edad: number = 21;
let nombre: string = "Santi";
let activo: boolean = true;
```

## 2. Tipo literal

** Definición **: Un tipo que solo permite valores concretos (literales). Útil para estados o flags.

- Ejemplo:

```typescript
type Direccion = "Norte" | "Sur" | "Este" | "Oeste";
let miDireccion: Direccion = "Norte";
```

## 3. Tipo unión (Union type)

** Definición **: Permite que una variable acepte uno entre varios tipos (o valores). Se usa con |.

- Ejemplo:

```typescript
let id: number | string;
id = 1;
id = "id_1";
```

## 4. Alias de tipo (type)

** Definición **: Dar un nombre a un tipo (primitivo, unión, objeto complejo) para reusar y clarificar.

- Ejemplo:

```typescript
type orderStatus = "pending" | "shipped" | "delivered";
const orderStatus: orderStatus = "pending";

console.log(orderStatus);
```

## 5. Interface

** Definición **: Describe la forma de un objeto (propiedades y tipos).

- Ejemplo:

```typescript
interface Usuario {
  nombre: string;
  edad: number;
}
const user: Usuario = { nombre: "Santi", edad: 18 };
```

## 6. Enum

** Definición **: Conjunto nombrado de constantes (genera código JS). Sirve para valores enumerados/cadenas de texto.

- Ejemplo:

```typescript
enum Color {
  Rojo,
  Verde,
  Azul,
}
let color: Color = Color.Rojo;

enum Direccion {
  Norte = "Norte",
  Sur = "Sur",
  Este = "Este",
  Oeste = "Oeste",
}
let puntoCardinal: Direcccion = Direccion.Oeste;
```

## 7. Funciones tipadas (params y retorno)

** Definición **: Especificar tipos para parámetros y para el valor devuelto. Mejora seguridad y autocompletado.

- Ejemplo:

```typescript
const sumar = (a: number, b: number): number => a + b;
```

## 8. tsconfig.json y tsc (transpilación)

** Definición **: tsconfig.json configura cómo TypeScript compila el proyecto; tsc transpila .ts → .js.

- Ejemplo: (comando)

npx tsc # compila según tsconfig.json y genera dist/

## 9. tsx / ts-node (runners en desarrollo)

** Definición **: Herramientas para ejecutar .ts sin generar .js en disco; útiles en desarrollo. tsx es rápido pero no hace type-checking por defecto.

- Ejemplo:

npx tsx src/app.ts
