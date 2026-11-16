# Banco de preguntas · Programación Estructurada

**UABC · Facultad de Ingeniería, Arquitectura y Diseño (FIAD)**  
**Docente: Prof. Pedro Núñez Yepiz**  
**215 preguntas · Cuatro opciones por pregunta · Una sola respuesta correcta**  
**Dificultad: 107 de nivel medio y 108 de nivel difícil**  
**Referencia de lenguaje: C11 · Fecha de elaboración: 16 de noviembre de 2026**

Ejercicios originales basados en las páginas de los temas 0 al 13 del [sitio de Programación Estructurada](https://pedroyepiz.github.io/pe/). Se evalúa la interpretación, ejecución y corrección de código mediante salidas, retornos, diagnósticos y comparación de soluciones.

## Distribución e índice

| Tema | Contenido | Preguntas | Medio | Difícil |
|---:|---|---:|---:|---:|
| 0 | [Introducción](#tema-0) | 10 | 6 | 4 |
| 1 | [Tipos de datos](#tema-1) | 20 | 12 | 8 |
| 2 | [Expresiones](#tema-2) | 15 | 8 | 7 |
| 3 | [Selección](#tema-3) | 20 | 11 | 9 |
| 4 | [Iteración](#tema-4) | 20 | 10 | 10 |
| 5 | [Funciones](#tema-5) | 20 | 9 | 11 |
| 6 | [Arreglos](#tema-6) | 20 | 10 | 10 |
| 7 | [Structs: estructuras, union y enum](#tema-7) | 15 | 7 | 8 |
| 8 | [Typedef: alias de tipos](#tema-8) | 10 | 5 | 5 |
| 9 | [Recursión](#tema-9) | 10 | 4 | 6 |
| 10 | [Multiarchivo](#tema-10) | 5 | 2 | 3 |
| 11 | [Biblioteca de funciones](#tema-11) | 10 | 5 | 5 |
| 12 | [Archivos de texto y binarios](#tema-12) | 20 | 10 | 10 |
| 13 | [Métodos de ordenación y búsqueda](#tema-13) | 20 | 8 | 12 |
| **Total** | | **215** | **107** | **108** |

[Ir a la clave de respuestas y explicaciones](#clave-de-respuestas)

## Instrucciones para el alumno

1. Selecciona una sola opción: **A, B, C o D**. Cada pregunta es independiente.
2. Antes de contestar, sigue el estado de variables, índices, condiciones y llamadas. No supongas que el código realiza lo que su nombre sugiere.
3. Cuando se pregunte por una salida, respeta el orden y los saltos de línea. No cuentes el eco de la entrada. Se ignoran únicamente los espacios al final de cada línea y el salto final.
4. Los fragmentos con instrucciones sueltas se consideran dentro de `int main(void)`. Cuando aparecen funciones auxiliares, su definición forma parte del ejercicio.
5. Supón incluidas las cabeceras estándar necesarias, excepto cuando la pregunta revise explícitamente las inclusiones, prototipos o la organización de archivos. Se usa C11, sin las reglas particulares de C++.
6. No supongas tamaños fijos de `int`, `long`, estructuras o punteros. Los tipos de ancho fijo mencionados se consideran disponibles. Para comparar letras se usa una codificación compatible con ASCII.
7. La entrada indicada es exactamente la disponible. Salvo que la pregunta analice un fallo, las operaciones de apertura, posicionamiento, escritura y lecturas solicitadas sobre datos existentes tienen éxito. Los archivos binarios permiten los desplazamientos indicados y sus posiciones caben en `long`.
8. No atribuyas una salida fija a código con comportamiento indefinido. En las preguntas de diagnóstico, distingue ese caso de un error de sintaxis o de un error lógico.

## Preguntas

Las alternativas de código son bloques completos para el contexto indicado. La clave del profesor está reunida al final.

<a id="tema-0"></a>
## Tema 0 · Introducción

**Fuente del tema:** [tema_00_introduccion.html](https://pedroyepiz.github.io/pe/pages/tema_00_introduccion.html)

### PE-T00-01 · Medio

¿Cuál es la salida exacta de este fragmento?

```c
printf("FIAD\\PE\n");
printf("\"C\":%d", 2 + 3);
```

**A.**

```text
FIAD\PE
"C":5
```

**B.**

```text
FIAD\PE
C:5
```

**C.** `FIAD\PE "C":5`

**D.**

```text
FIAD/PE
"C":5
```

---

### PE-T00-02 · Difícil

La entrada es `12 x`. ¿Qué imprime el programa? Considera que `scanf` devuelve la cantidad de conversiones realizadas.

```c
int a = 4, b = 9, leidos;
leidos = scanf("%d %d", &a, &b);
printf("%d %d %d", leidos, a, b);
```

**A.** `2 12 0`

**B.** `1 12 0`

**C.** `1 12 9`

**D.** `0 4 9`

---

### PE-T00-03 · Medio

Se declararon `int edad = 0; double altura = 0;`. ¿Qué bloque lee ambos valores correctamente para la entrada `20 1.75`?

**A.**

```c
printf("%d %lf", edad, altura);
```

**B.**

```c
scanf("%d %f", &edad, &altura);
```

**C.**

```c
scanf("%d %lf", &edad, &altura);
```

**D.**

```c
scanf("%d %lf", edad, altura);
```

---

### PE-T00-04 · Medio

Sigue la secuencia y distingue los comentarios de las instrucciones. ¿Qué imprime?

```c
int total = 10;
// total = 100;
total = total + 5;
/* total = total * 2; */
printf("%d", total);
```

**A.** `30`

**B.** `15`

**C.** `10`

**D.** `210`

---

### PE-T00-05 · Difícil

¿Qué valores quedan después de ejecutar las instrucciones en este orden?

```c
int a = 4, b = 9;
a = b;
b = a + 1;
printf("%d %d", a, b);
```

**A.** `9 5`

**B.** `9 10`

**C.** `4 10`

**D.** `10 9`

---

### PE-T00-06 · Medio

¿Qué bloque imprime exactamente dos líneas: `A=3` y, debajo, `B=4`?

**A.**

```c
printf("A=%d\nB=%d", 3, 4);
```

**B.**

```c
printf("A=%d\tB=%d", 3, 4);
```

**C.**

```c
printf("A=%d\\nB=%d", 3, 4);
```

**D.**

```c
printf("A=%d B=%d", 3, 4);
```

---

### PE-T00-07 · Difícil

Para la entrada `7 9`, ¿qué programa lee dos enteros, conserva ambos y muestra su suma?

**A.**

```c
int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    return a + b;
}
```

**B.**

```c
int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    a = b;
    printf("%d", a + b);
    return 0;
}
```

**C.**

```c
int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a + b);
    return 0;
}
```

**D.**

```c
int main(void)
{
    int a, b;
    scanf("%d %d", &a, &b);
    printf("%d", a * b);
    return 0;
}
```

---

### PE-T00-08 · Medio

¿Qué diagnóstico corresponde al programa tal como está escrito?

```c
#include <stdio.h>
int main
{
    printf("Hola");
    return 0;
}
```

**A.** El programa es válido y muestra Hola.

**B.** La definición de main carece de la lista de parámetros entre paréntesis.

**C.** El texto Hola necesita comillas simples.

**D.** return 0 debe colocarse fuera de las llaves.

---

### PE-T00-09 · Difícil

¿Qué texto alcanza a mostrarse en la consola? El valor de salida del proceso no forma parte del texto.

```c
printf("Inicio");
return 7;
printf("Fin");
```

**A.** `Inicio`

**B.** `Inicio7`

**C.** `7`

**D.** `InicioFin`

---

### PE-T00-10 · Medio

¿Qué instrucción imprime literalmente `Ruta: C:\PE`?

**A.**

```c
printf("Ruta: C:\tPE");
```

**B.**

```c
printf("Ruta: C:\nPE");
```

**C.**

```c
printf("Ruta: C:/PE");
```

**D.**

```c
printf("Ruta: C:\\PE");
```

---

<a id="tema-1"></a>
## Tema 1 · Tipos de datos

**Fuente del tema:** [tema_01_tipos_datos.html](https://pedroyepiz.github.io/pe/pages/tema_01_tipos_datos.html)

### PE-T01-01 · Medio

¿Qué se imprime? Observa el tipo de cada operando antes de la asignación.

```c
int a = 7, b = 2;
double x = a / b;
double y = (double)a / b;
printf("%.1f %.1f", x, y);
```

**A.** `3.0 3.0`

**B.** `3.0 3.5`

**C.** `3.5 3.0`

**D.** `3.5 3.5`

---

### PE-T01-02 · Medio

¿Qué valores quedan en los enteros después de las conversiones?

```c
double a = 8.9, b = -8.9;
int x = a, y = b;
printf("%d %d", x, y);
```

**A.** `8 -9`

**B.** `9 -8`

**C.** `8 -8`

**D.** `9 -9`

---

### PE-T01-03 · Difícil

¿Cuál es el resultado sin suponer que int ocupa cuatro bytes?

```c
int valores[6];
printf("%zu %zu", sizeof(valores) / sizeof(valores[0]), sizeof(char));
```

**A.** `24 8`

**B.** `6 8`

**C.** `6 1`

**D.** `24 1`

---

### PE-T01-04 · Medio

Con `double precio = 0;`, ¿qué pareja de instrucciones lee `19.5` y muestra `19.50`?

**A.**

```c
scanf("%d", &precio);
printf("%d", precio);
```

**B.**

```c
scanf("%lf", precio);
printf("%.2f", precio);
```

**C.**

```c
scanf("%lf", &precio);
printf("%.2f", precio);
```

**D.**

```c
scanf("%f", &precio);
printf("%.2f", precio);
```

---

### PE-T01-05 · Medio

Se incluyó `<stdbool.h>`. ¿Qué imprime la normalización booleana?

```c
bool a = -7, b = 0;
a = a + 4;
printf("%d %d", a, b);
```

**A.** `1 0`

**B.** `5 0`

**C.** `1 1`

**D.** `-7 0`

---

### PE-T01-06 · Difícil

La variable se declara `const double PI = 3.14159;`. ¿Qué bloque la utiliza sin intentar modificarla y calcula el área para radio 2?

**A.**

```c
double radio = 2;
++PI;
printf("%.2f", PI *radio);
```

**B.**

```c
double radio = 2;
PI = 3.14;
printf("%.2f", PI * radio * radio);
```

**C.**

```c
double radio = 2;
double area = PI * radio * radio;
printf("%.2f", area);
```

**D.**

```c
double radio = 2;
PI *= radio;
printf("%.2f", PI *radio);
```

---

### PE-T01-07 · Difícil

Se incluyó `<limits.h>`. ¿Qué imprime este cálculo de un entero sin signo?

```c
unsigned int n = UINT_MAX;
n = n + 1u;
printf("%u", n);
```

**A.** `0`

**B.** `El resultado necesariamente provoca un error de ejecución.`

**C.** `UINT_MAX`

**D.** `1`

---

### PE-T01-08 · Medio

¿Cuál es el contenido que aparece entre los delimitadores `|`?

```c
printf("|%06d|%.2f|", 42, 3.5);
```

**A.** `|    42|3.50|`

**B.** `|42|3.5|`

**C.** `|000042|3.50|`

**D.** `|420000|3.50|`

---

### PE-T01-09 · Medio

Se necesita almacenar 8000000000 y mostrarlo sin pérdida con los rangos mínimos garantizados por C11, sin suponer int de 64 bits. ¿Qué bloque cumple el propósito?

**A.**

```c
long long n = 8000000000LL;
printf("%lld", n);
```

**B.**

```c
long long n = 8000000000LL;
printf("%d", n);
```

**C.**

```c
unsigned short n = 8000000000LL;
printf("%hu", n);
```

**D.**

```c
int n = 8000000000LL;
printf("%d", n);
```

---

### PE-T01-10 · Difícil

¿Qué sucede con el valor al convertirlo explícitamente antes de sumarlo?

```c
double base = 5.75;
int total = (int)base + (int)2.75;
printf("%d", total);
```

**A.** `7.75`

**B.** `7`

**C.** `8`

**D.** `9`

---

### PE-T01-11 · Difícil

¿Qué afirmación es válida sobre el programa sin asumir una arquitectura específica?

```c
printf("%zu %zu", sizeof(long), sizeof(long long));
```

**A.** Siempre imprime 4 8, incluso en LP64.

**B.** No compila porque sizeof solo acepta variables.

**C.** Siempre imprime 8 8 porque el sistema operativo es moderno.

**D.** No hay un único par decimal garantizado por C; se consultan los tamaños de la implementación.

---

### PE-T01-12 · Medio

Con `char nombre[8];`, ¿qué bloque lee una palabra con límite y deja espacio para el terminador nulo?

**A.**

```c
scanf("%8s", nombre);
```

**B.**

```c
scanf("%7s", nombre);
```

**C.**

```c
scanf("%s", nombre);
```

**D.**

```c
scanf("%7c", nombre);
```

---

### PE-T01-13 · Medio

¿Qué se imprime después de modificar el arreglo de caracteres?

```c
char dato[] = "C";
dato[0] = 'Z';
printf("%c %zu", dato[0], sizeof(dato));
```

**A.** `Z 2`

**B.** `90 2`

**C.** `Z 1`

**D.** `C 2`

---

### PE-T01-14 · Difícil

¿Qué condición acepta exactamente los pares de valores reales cuya distancia absoluta es menor que 0.001? Se incluyó `<math.h>`.

**A.**

```c
if (fabs(x - y) < 0.001)
    printf("cerca");
```

**B.**

```c
if (x - y < 0.001)
    printf("cerca");
```

**C.**

```c
if (x < y && y < x)
    printf("cerca");
```

**D.**

```c
if (x == y + 0.001)
    printf("cerca");
```

---

### PE-T01-15 · Medio

¿Qué entero se muestra al combinar una conversión real y una booleana?

```c
double nota = 9.75;
_Bool aprobado = nota;
printf("%d %d", (int)nota, aprobado);
```

**A.** `10 0`

**B.** `9 9`

**C.** `9 1`

**D.** `10 1`

---

### PE-T01-16 · Difícil

¿Cuál es el problema de esta llamada? No se solicita predecir una salida de un programa inválido.

```c
float temperatura = 0;
scanf("%lf", &temperatura);
```

**A.** La llamada es correcta porque float y double son siempre el mismo tipo.

**B.** %lf exige double*, pero se envía float*; debe usarse %f para esta variable.

**C.** Solo falta escribir temperatura con mayúscula.

**D.** &temperatura no puede enviarse a scanf aunque el formato sea correcto.

---

### PE-T01-17 · Medio

¿Qué bloque imprime correctamente el tamaño de una variable sin asumir el tipo de size_t?

**A.**

```c
int edad = 20;
printf("%s", sizeof(edad));
```

**B.**

```c
int edad = 20;
printf("%f", sizeof(edad));
```

**C.**

```c
int edad = 20;
printf("%d", sizeof(edad));
```

**D.**

```c
int edad = 20;
printf("%zu", sizeof(edad));
```

---

### PE-T01-18 · Medio

¿Qué muestra la conversión de un carácter numérico a su valor de dígito?

```c
char digito = '7';
int numero = digito - '0';
printf("%d", numero + 2);
```

**A.** `9`

**B.** `72`

**C.** `57`

**D.** `7`

---

### PE-T01-19 · Difícil

Se dispone de `uint8_t`. ¿Qué valores se imprimen?

```c
uint8_t nivel = 255;
nivel = nivel + 2;
printf("%u", (unsigned)nivel);
```

**A.** `1`

**B.** `0`

**C.** `257`

**D.** `255`

---

### PE-T01-20 · Medio

¿Qué fragmento conserva una cantidad fraccionaria al dividir dos enteros positivos a y b, con b distinto de cero?

**A.**

```c
double r = (double)(a / b);
printf("%.2f", r);
```

**B.**

```c
double r = (double)a / b;
printf("%.2f", r);
```

**C.**

```c
double r = a / b;
printf("%.2f", r);
```

**D.**

```c
int r = (double)a / b;
printf("%d", r);
```

---

<a id="tema-2"></a>
## Tema 2 · Expresiones

**Fuente del tema:** [tema_02_expresiones.html](https://pedroyepiz.github.io/pe/pages/tema_02_expresiones.html)

### PE-T02-01 · Medio

Evalúa precedencia aritmética y comparación. ¿Qué se imprime?

```c
int r = 8 + 3 * 4 >= 20;
printf("%d", r);
```

**A.** `0`

**B.** `44`

**C.** `1`

**D.** `20`

---

### PE-T02-02 · Difícil

¿Qué resultado se obtiene con cociente y residuo de enteros negativos?

```c
int a = -17, b = 5;
printf("%d %d", a / b, a % b);
```

**A.** `-4 3`

**B.** `-3 -2`

**C.** `-3 2`

**D.** `-4 -2`

---

### PE-T02-03 · Difícil

¿Qué valores se imprimen después de la expresión con cortocircuito?

```c
int x = 0, y = 4;
int r = (x != 0) && (++y > 4);
printf("%d %d", r, y);
```

**A.** `1 4`

**B.** `1 5`

**C.** `0 4`

**D.** `0 5`

---

### PE-T02-04 · Difícil

¿Qué se imprime al emplear OR con una modificación en el segundo operando?

```c
int x = 6, y = 2;
int r = (x > 0) || (y = 10);
printf("%d %d", r, y);
```

**A.** `6 10`

**B.** `1 2`

**C.** `1 10`

**D.** `0 2`

---

### PE-T02-05 · Medio

Con `int x`, ¿qué condición acepta únicamente valores de 10 a 20, incluidos ambos extremos?

**A.**

```c
if (x > 10 && x < 20)
    printf("valido");
```

**B.**

```c
if (x >= 10 || x <= 20)
    printf("valido");
```

**C.**

```c
if (10 <= x <= 20)
    printf("valido");
```

**D.**

```c
if (x >= 10 && x <= 20)
    printf("valido");
```

---

### PE-T02-06 · Medio

¿Qué produce la comparación encadenada de C en este caso?

```c
int x = 30;
printf("%d %d", 10 <= x <= 20, x >= 10 && x <= 20);
```

**A.** `0 1`

**B.** `1 0`

**C.** `0 0`

**D.** `1 1`

---

### PE-T02-07 · Medio

¿Qué se imprime después de las dos instrucciones de incremento separadas?

```c
int x = 3, a, b;
a = x++;
b = ++x;
printf("%d %d %d", a, b, x);
```

**A.** `4 4 4`

**B.** `4 5 5`

**C.** `3 4 5`

**D.** `3 5 5`

---

### PE-T02-08 · Difícil

¿Cuál es el resultado de la asignación compuesta con una expresión entera?

```c
int x = 5;
x *= 2 + 3;
x /= 4;
printf("%d", x);
```

**A.** `25`

**B.** `5`

**C.** `6`

**D.** `7`

---

### PE-T02-09 · Difícil

¿Qué condición evita dividir entre cero y acepta cuando el cociente entero a/b supera 2?

**A.**

```c
if (b == 0 && a / b > 2)
    printf("si");
```

**B.**

```c
if (b != 0 || a / b > 2)
    printf("si");
```

**C.**

```c
if (a / b > 2 && b != 0)
    printf("si");
```

**D.**

```c
if (b != 0 && a / b > 2)
    printf("si");
```

---

### PE-T02-10 · Medio

¿Qué se imprime al combinar negación y comparaciones?

```c
int a = 4, b = 7;
printf("%d %d", !(a < b), !a < b);
```

**A.** `0 1`

**B.** `0 0`

**C.** `1 1`

**D.** `1 0`

---

### PE-T02-11 · Difícil

¿Qué diferencia producen las posiciones del casting?

```c
int a = 9, b = 4;
printf("%.2f %.2f", (double)(a / b), (double)a / b);
```

**A.** `2.25 2.00`

**B.** `2.00 2.25`

**C.** `2.25 2.25`

**D.** `2.00 2.00`

---

### PE-T02-12 · Medio

¿Qué se imprime al distinguir asignación y comparación?

```c
int x = 4;
int r = (x = 0);
printf("%d %d", x, r == 0);
```

**A.** `4 0`

**B.** `0 0`

**C.** `0 1`

**D.** `4 1`

---

### PE-T02-13 · Medio

¿Qué condición acepta exactamente los enteros que no pertenecen al intervalo cerrado [5,12]?

**A.**

```c
if (x < 5 || x > 12)
    printf("fuera");
```

**B.**

```c
if (x <= 5 || x >= 12)
    printf("fuera");
```

**C.**

```c
if (!(x >= 5 || x <= 12))
    printf("fuera");
```

**D.**

```c
if (x < 5 && x > 12)
    printf("fuera");
```

---

### PE-T02-14 · Difícil

¿Qué resultado produce la combinación de && y ||?

```c
int a = 0, b = 1, c = 0;
printf("%d %d", a &&b || !c, a && (b || !c));
```

**A.** `0 1`

**B.** `1 0`

**C.** `0 0`

**D.** `1 1`

---

### PE-T02-15 · Medio

¿Qué se imprime con división, módulo y multiplicación de la misma precedencia?

```c
int r = 20 / 3 * 2 + 20 % 3;
printf("%d", r);
```

**A.** `14`

**B.** `13`

**C.** `3`

**D.** `15`

---

<a id="tema-3"></a>
## Tema 3 · Selección

**Fuente del tema:** [tema_03_seleccion.html](https://pedroyepiz.github.io/pe/pages/tema_03_seleccion.html)

### PE-T03-01 · Medio

¿Qué imprime? Identifica a qué if pertenece el else sin agregar llaves.

```c
int x = 5, y = -1;
if (x > 0)
    if (y > 0)
        printf("A");
    else
        printf("B");
printf("C");
```

**A.** `BC`

**B.** `AC`

**C.** `C`

**D.** `ABC`

---

### PE-T03-02 · Medio

¿Qué imprime el bloque con un punto y coma inmediatamente después del if?

```c
int x = 0;
if (x > 10)
    ;
{
    x = 8;
}
printf("%d", x);
```

**A.** `8`

**B.** `10`

**C.** `No compila.`

**D.** `0`

---

### PE-T03-03 · Difícil

¿Qué salida resulta al usar una asignación como condición?

```c
int n = 0;
if (n = 3)
    printf("A%d", n);
else
    printf("B%d", n);
```

**A.** `A3`

**B.** `B3`

**C.** `B0`

**D.** `A0`

---

### PE-T03-04 · Medio

¿Cuál es la salida del switch?

```c
int op = 2;
switch (op)
{
case 1:
    printf("A");
    break;
case 2:
    printf("B");
case 3:
    printf("C");
    break;
default:
    printf("D");
}
```

**A.** `ABC`

**B.** `BCD`

**C.** `B`

**D.** `BC`

---

### PE-T03-05 · Difícil

default aparece antes de un case. ¿Qué se muestra cuando sí existe coincidencia?

```c
int op = 2;
switch (op)
{
case 1:
    printf("A");
    break;
default:
    printf("D");
case 2:
    printf("B");
    break;
}
```

**A.** `DB`

**B.** `D`

**C.** `AB`

**D.** `B`

---

### PE-T03-06 · Medio

¿Qué bloque acepta a y A como la misma opción y rechaza los demás caracteres?

**A.**

```c
switch (op)
{
case 'a':
case 'A':
    printf("si");
    break;
default:
    printf("no");
}
```

**B.**

```c
if (op == 'a' && op == 'A')
    printf("si");
else
    printf("no");
```

**C.**

```c
switch (op)
{
case 'a':
    printf("si");
    break;
case 'A':
    printf("no");
    break;
}
```

**D.**

```c
switch (op)
{
case 'a' || 'A':
    printf("si");
    break;
default:
    printf("no");
}
```

---

### PE-T03-07 · Difícil

¿Qué valor se imprime al ejecutar dos decisiones independientes?

```c
int x = 4;
if (x < 5)
    x += 3;
if (x > 5)
    x *= 2;
else
    x -= 1;
printf("%d", x);
```

**A.** `14`

**B.** `7`

**C.** `6`

**D.** `3`

---

### PE-T03-08 · Medio

Para notas válidas de 0 a 100 se desea A desde 90, B desde 80 y C en el resto. ¿Qué clasificación cubre correctamente los límites?

**A.**

```c
if (n >= 80)
    printf("B");
else if (n >= 90)
    printf("A");
else
    printf("C");
```

**B.**

```c
if (n > 90)
    printf("A");
else if (n > 80)
    printf("B");
else
    printf("C");
```

**C.**

```c
if (n >= 90)
    printf("A");
else if (n >= 80)
    printf("B");
else
    printf("C");
```

**D.**

```c
if (n >= 90)
    printf("A");
if (n >= 80)
    printf("B");
else
    printf("C");
```

---

### PE-T03-09 · Medio

¿Qué diagnóstico describe esta selección?

```c
char opcion[] = "alta";
switch (opcion)
{
case "alta":
    printf("Registrar");
    break;
}
```

**A.** Solo falta agregar default y entonces compara el texto correctamente.

**B.** La variable opcion se convierte automáticamente al número de letras.

**C.** Las comillas dobles son válidas en case si la cadena tiene cuatro caracteres.

**D.** switch requiere una expresión de tipo entero y case constantes enteras; no compara cadenas.

---

### PE-T03-10 · Difícil

¿Cuál fragmento usa una etiqueta case válida según las reglas de C11?

**A.**

```c
int limite = 2;
switch (op)
{
case limite:
    printf("dos");
    break;
}
```

**B.**

```c
enum
{
    LIMITE = 2
};
switch (op)
{
case LIMITE:
    printf("dos");
    break;
}
```

**C.**

```c
switch (op)
{
case op:
    printf("dos");
    break;
}
```

**D.**

```c
const int limite = 2;
switch (op)
{
case limite:
    printf("dos");
    break;
}
```

---

### PE-T03-11 · Medio

¿Cuál es el problema en este intento de seleccionar por temperatura?

```c
double t = 37.5;
switch (t)
{
case 37:
    printf("normal");
    break;
default:
    printf("otro");
}
```

**A.** El error es que case 37 necesita un punto decimal.

**B.** La expresión de switch es double; conviene comparar rangos con if.

**C.** default debe escribirse antes del primer case para compilar.

**D.** No hay problema: switch convierte siempre cualquier double a int.

---

### PE-T03-12 · Difícil

Se quiere rechazar toda edad fuera de 18 a 65, incluidos los extremos como válidos. ¿Qué reparación cumple la regla?

**A.**

```c
if (edad > 18 || edad < 65)
    printf("rechazar");
else
    printf("aceptar");
```

**B.**

```c
if (edad < 18 && edad > 65)
    printf("rechazar");
else
    printf("aceptar");
```

**C.**

```c
if (edad <= 18 || edad >= 65)
    printf("rechazar");
else
    printf("aceptar");
```

**D.**

```c
if (edad < 18 || edad > 65)
    printf("rechazar");
else
    printf("aceptar");
```

---

### PE-T03-13 · Difícil

Regla: una cuenta inactiva siempre recibe Bloqueada; una activa recibe Admin si es administrador, y Usuario si no. ¿Qué bloque aplica esa prioridad?

**A.**

```c
if (activo || admin)
    printf("Admin");
else
    printf("Bloqueada");
```

**B.**

```c
if (!activo)
    printf("Bloqueada");
else if (admin)
    printf("Admin");
else
    printf("Usuario");
```

**C.**

```c
if (admin)
    printf("Admin");
else if (!activo)
    printf("Bloqueada");
else
    printf("Usuario");
```

**D.**

```c
if (activo && admin)
    printf("Admin");
else
    printf("Usuario");
```

---

### PE-T03-14 · Difícil

Rastrea las modificaciones y los fall-through. ¿Cuál es el valor final?

```c
int op = 1, r = 2;
switch (op)
{
case 1:
    r += 3;
case 2:
    r *= 2;
default:
    r -= 1;
}
printf("%d", r);
```

**A.** `10`

**B.** `9`

**C.** `3`

**D.** `5`

---

### PE-T03-15 · Medio

¿Qué bloque imprime un cociente solo si el divisor es distinto de cero y muestra error en caso contrario?

**A.**

```c
if (b != 0)
    ;
printf("%d", a / b);
```

**B.**

```c
if (b == 0)
    printf("%d", a / b);
else
    printf("error");
```

**C.**

```c
if (b != 0)
    printf("%d", a / b);
else
    printf("error");
```

**D.**

```c
if (a / b)
    printf("%d", a / b);
else
    printf("error");
```

---

### PE-T03-16 · Medio

¿Qué camino se toma al anidar por la rama falsa?

```c
int beca = 0, promedio = 92;
if (beca)
    printf("Directo");
else
{
    if (promedio >= 90)
        printf("Merito");
    else
        printf("Sin apoyo");
}
```

**A.** `Merito`

**B.** `DirectoMerito`

**C.** `Directo`

**D.** `Sin apoyo`

---

### PE-T03-17 · Difícil

No hay un case que coincida con op. ¿Qué texto termina apareciendo?

```c
int op = 9;
switch (op)
{
case 1:
    printf("A");
    break;
default:
    printf("D");
case 2:
    printf("B");
case 3:
    printf("C");
    break;
}
```

**A.** `BC`

**B.** `DBC`

**C.** `D`

**D.** `ABCD`

---

### PE-T03-18 · Medio

¿Qué imprime el programa cuando la primera condición descarta una rama completa?

```c
int x = -2, y = 5;
if (x > 0)
{
    if (y > 0)
        y += 10;
}
else
{
    if (y < 0)
        y = 0;
    else
        y -= 2;
}
printf("%d", y);
```

**A.** `15`

**B.** `0`

**C.** `3`

**D.** `5`

---

### PE-T03-19 · Medio

¿Cuál es la salida con un case constante calculado?

```c
int op = 6;
switch (op)
{
case 2 * 3:
    printf("Seis");
    break;
case 7:
    printf("Siete");
    break;
default:
    printf("Otro");
}
```

**A.** `Otro`

**B.** `SeisSiete`

**C.** `Seis`

**D.** `No compila porque case contiene una multiplicación.`

---

### PE-T03-20 · Difícil

Se debe mostrar Invalida fuera de 0..100, Aprobada desde 60 y Reprobada en los otros valores válidos. ¿Qué bloque clasifica correctamente cualquier nota entera?

**A.**

```c
if (n < 0 && n > 100)
    printf("Invalida");
else if (n >= 60)
    printf("Aprobada");
else
    printf("Reprobada");
```

**B.**

```c
if (n >= 60)
    printf("Aprobada");
else if (n < 0 || n > 100)
    printf("Invalida");
else
    printf("Reprobada");
```

**C.**

```c
if (n <= 0 || n >= 100)
    printf("Invalida");
else if (n > 60)
    printf("Aprobada");
else
    printf("Reprobada");
```

**D.**

```c
if (n < 0 || n > 100)
    printf("Invalida");
else if (n >= 60)
    printf("Aprobada");
else
    printf("Reprobada");
```

---

<a id="tema-4"></a>
## Tema 4 · Iteración

**Fuente del tema:** [tema_04_iteracion.html](https://pedroyepiz.github.io/pe/pages/tema_04_iteracion.html)

### PE-T04-01 · Medio

¿Qué suma y qué valor del contador se imprimen al terminar?

```c
int i = 1, suma = 0;
while (i <= 5)
{
    suma += i;
    i += 2;
}
printf("%d %d", suma, i);
```

**A.** `15 6`

**B.** `9 7`

**C.** `6 7`

**D.** `9 5`

---

### PE-T04-02 · Medio

¿Qué imprime la comparación entre precondición y postcondición?

```c
int a = 5, b = 5;
while (a < 3)
    a++;
do
{
    b++;
} while (b < 3);
printf("%d %d", a, b);
```

**A.** `6 6`

**B.** `5 5`

**C.** `3 3`

**D.** `5 6`

---

### PE-T04-03 · Medio

¿Qué valor alcanza el acumulador al omitir una iteración?

```c
int suma = 0;
for (int i = 1; i <= 6; i++)
{
    if (i == 4)
        continue;
    suma += i;
}
printf("%d", suma);
```

**A.** `17`

**B.** `6`

**C.** `21`

**D.** `10`

---

### PE-T04-04 · Difícil

¿Cuántas veces se ejecuta el incremento de c?

```c
int c = 0;
for (int i = 1; i <= 4; i++)
    for (int j = 0; j < i; j++)
        c++;
printf("%d", c);
```

**A.** `6`

**B.** `4`

**C.** `16`

**D.** `10`

---

### PE-T04-05 · Difícil

¿Cuál es la salida cuando break está dentro del ciclo interior?

```c
int c = 0;
for (int i = 0; i < 3; i++)
{
    for (int j = 0; j < 4; j++)
    {
        if (j == 2)
            break;
        c++;
    }
}
printf("%d", c);
```

**A.** `12`

**B.** `6`

**C.** `3`

**D.** `2`

---

### PE-T04-06 · Medio

¿Qué bloque suma exactamente los enteros del 1 al n, inclusive, para todo n>=1?

**A.**

```c
int s = 1;
for (int i = 1; i <= n; i++)
    s += i;
printf("%d", s);
```

**B.**

```c
int s = 0;
for (int i = 1; i < n; i++)
    s += i;
printf("%d", s);
```

**C.**

```c
int s = 0;
for (int i = 1; i <= n; i++)
    s += i;
printf("%d", s);
```

**D.**

```c
int s = 0;
for (int i = 0; i <= n; i++)
    s = i;
printf("%d", s);
```

---

### PE-T04-07 · Difícil

La bandera detiene la búsqueda. ¿Qué contador final se imprime?

```c
int i = 1, encontrado = 0;
while (i <= 8 && !encontrado)
{
    if (i * i > 10)
        encontrado = 1;
    i++;
}
printf("%d %d", i, encontrado);
```

**A.** `4 1`

**B.** `5 1`

**C.** `9 0`

**D.** `8 1`

---

### PE-T04-08 · Medio

¿Qué valores aparecen al terminar este ciclo descendente?

```c
int i, s = 0;
for (i = 7; i > 0; i -= 3)
    s += i;
printf("%d %d", s, i);
```

**A.** `11 -2`

**B.** `12 1`

**C.** `15 0`

**D.** `12 -2`

---

### PE-T04-09 · Difícil

¿Cuál es el defecto que impide llegar normalmente a printf? Supón que la ejecución no se interrumpe externamente.

```c
int i = 0;
while (i < 5)
{
    if (i == 2)
        continue;
    i++;
}
printf("%d", i);
```

**A.** i llega a 5 porque continue incrementa automáticamente el contador.

**B.** Cuando i llega a 2, continue evita su incremento y el ciclo repite indefinidamente.

**C.** continue sale completamente del while y se imprime 2.

**D.** El programa tiene un error de sintaxis porque continue no existe en while.

---

### PE-T04-10 · Difícil

Se desea un máximo de tres intentos y detenerse al acertar. Cada llamada a `acertar()` devuelve 0 o 1. ¿Qué bloque llama a acertar como máximo tres veces y nunca después de un éxito?

**A.**

```c
int ok = 0;
for (int i = 0; i <= 3 && !ok; i++)
    ok = acertar();
```

**B.**

```c
int ok = 0;
for (int i = 0; i < 3 && ok; i++)
    ok = acertar();
```

**C.**

```c
int ok = 0;
for (int i = 0; i < 3 && !ok; i++)
    ok = acertar();
```

**D.**

```c
int ok = 0;
for (int i = 0; i < 3 || !ok; i++)
    ok = acertar();
```

---

### PE-T04-11 · Medio

¿Cuál es la salida cuando el cuerpo del for está vacío?

```c
int i;
for (i = 0; i < 4; i++)
    ;
printf("%d", i);
```

**A.** `0`

**B.** `4`

**C.** `3`

**D.** `0 1 2 3`

---

### PE-T04-12 · Difícil

¿Cuántos pares pasan el filtro?

```c
int c = 0;
for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= 3; j++)
    {
        if (i == j)
            continue;
        if (i + j > 3)
            c++;
    }
printf("%d", c);
```

**A.** `4`

**B.** `6`

**C.** `3`

**D.** `2`

---

### PE-T04-13 · Medio

¿Cuál es el resultado del procesamiento de dígitos?

```c
int n = 507, suma = 0;
while (n > 0)
{
    suma += n % 10;
    n /= 10;
}
printf("%d %d", suma, n);
```

**A.** `57 0`

**B.** `12 5`

**C.** `507 0`

**D.** `12 0`

---

### PE-T04-14 · Difícil

¿Qué bloque cuenta los dígitos decimales de cualquier n>=0, contando al cero como un dígito?

**A.**

```c
int c = 0;
do
{
    c++;
    n /= 10;
} while (n > 0);
printf("%d", c);
```

**B.**

```c
int c = 0;
do
{
    c++;
    n %= 10;
} while (n > 0);
printf("%d", c);
```

**C.**

```c
int c = 1;
do
{
    c++;
    n /= 10;
} while (n > 0);
printf("%d", c);
```

**D.**

```c
int c = 0;
while (n > 0)
{
    c++;
    n /= 10;
}
printf("%d", c);
```

---

### PE-T04-15 · Medio

¿Qué secuencia se imprime antes de que la condición deje de cumplirse?

```c
int x = 1;
while (x < 10)
{
    printf("%d ", x);
    x *= 2;
}
```

**A.** `1 3 5 7 9`

**B.** `2 4 8`

**C.** `1 2 4 8`

**D.** `1 2 4 8 16`

---

### PE-T04-16 · Difícil

¿Cuál es el resultado al modificar el contador también dentro del cuerpo?

```c
int c = 0;
for (int i = 0; i < 6; i++)
{
    c++;
    if (i % 2 == 0)
        i++;
}
printf("%d", c);
```

**A.** `4`

**B.** `3`

**C.** `2`

**D.** `6`

---

### PE-T04-17 · Medio

¿Qué ciclo imprime 5 4 3 2 1 exactamente una vez cada número?

**A.**

```c
for (int i = 5; i > 1; i--)
    printf("%d ", i);
```

**B.**

```c
for (int i = 1; i <= 5; i++)
    printf("%d ", i);
```

**C.**

```c
for (int i = 5; i >= 1; i--)
    printf("%d ", i);
```

**D.**

```c
for (int i = 5; i >= 1; i -= 2)
    printf("%d ", i);
```

---

### PE-T04-18 · Difícil

¿Qué efecto tiene continue en la actualización de un for?

```c
int i, s = 0;
for (i = 0; i < 5; i++)
{
    if (i < 3)
        continue;
    s += i;
}
printf("%d %d", s, i);
```

**A.** `0 0`

**B.** `10 5`

**C.** `7 5`

**D.** `7 4`

---

### PE-T04-19 · Medio

La entrada es `4 7 0 9`. ¿Qué imprime el ciclo con centinela? El 9 permanece sin procesar.

```c
int n, suma = 0, c = 0;
scanf("%d", &n);
while (n != 0)
{
    suma += n;
    c++;
    scanf("%d", &n);
}
printf("%d %d", suma, c);
```

**A.** `11 2`

**B.** `20 3`

**C.** `11 3`

**D.** `20 4`

---

### PE-T04-20 · Difícil

¿Qué bloque recorre una cuadrícula de 3 filas y 4 columnas y cuenta exactamente sus 12 celdas?

**A.**

```c
int c = 0, j = 0;
for (int i = 0; i < 3; i++)
    for (; j < 4; j++)
        c++;
printf("%d", c);
```

**B.**

```c
int c = 0;
for (int i = 0; i < 3; i++)
    for (int j = 0; j < i; j++)
        c++;
printf("%d", c);
```

**C.**

```c
int c = 0;
for (int i = 0; i < 3; i++)
    for (int j = 0; j < 4; j++)
        c++;
printf("%d", c);
```

**D.**

```c
int c = 0;
for (int i = 0; i <= 3; i++)
    for (int j = 0; j < 4; j++)
        c++;
printf("%d", c);
```

---

<a id="tema-5"></a>
## Tema 5 · Funciones

**Fuente del tema:** [tema_05_funciones.html](https://pedroyepiz.github.io/pe/pages/tema_05_funciones.html)

### PE-T05-01 · Medio

¿Qué devuelve la composición de llamadas? Las funciones no imprimen por sí mismas.

```c
int suma(int a, int b)
{
    return a + b;
}
int doble(int x)
{
    return 2 * x;
}

int main(void)
{
    printf("%d", doble(suma(3, 4)));
    return 0;
}
```

**A.** `10`

**B.** `14`

**C.** `24`

**D.** `7`

---

### PE-T05-02 · Medio

¿Qué valor conserva la variable del llamador después del paso por valor?

```c
void cambiar(int x)
{
    x = 20;
}

int main(void)
{
    int x = 6;
    cambiar(x);
    printf("%d", x);
    return 0;
}
```

**A.** `20`

**B.** `0`

**C.** `6`

**D.** `26`

---

### PE-T05-03 · Difícil

La función convierte su resultado al tipo de retorno. ¿Qué se imprime?

```c
int entero(int a, int b)
{
    return (double)a / b;
}
double real(int a, int b)
{
    return (double)a / b;
}

int main(void)
{
    printf("%d %.1f", entero(7, 2), real(7, 2));
    return 0;
}
```

**A.** `3 3.0`

**B.** `3 3.5`

**C.** `4 3.5`

**D.** `4 4.0`

---

### PE-T05-04 · Medio

Para dos enteros entre -1000 y 1000, ¿qué definición calcula y devuelve el promedio real sin perder la fracción?

**A.**

```c
int promedio(int a, int b)
{
    return (a + b) / 2.0;
}
```

**B.**

```c
double promedio(int a, int b)
{
    return (a + b) / 2;
}
```

**C.**

```c
void promedio(int a, int b)
{
    printf("%.1f", (a + b) / 2.0);
}
```

**D.**

```c
double promedio(int a, int b)
{
    return (a + b) / 2.0;
}
```

---

### PE-T05-05 · Difícil

¿Qué salida muestra el alcance de las variables locales?

```c
int calcular(int x)
{
    int y = 3;
    x += y;
    return x;
}

int main(void)
{
    int x = 10;
    printf("%d ", calcular(x));
    printf("%d", x);
    return 0;
}
```

**A.** `13 10`

**B.** `10 13`

**C.** `13 13`

**D.** `3 10`

---

### PE-T05-06 · Difícil

¿Qué función intercambia correctamente dos enteros originales, incluso cuando sus valores son distintos?

**A.**

```c
void cambiar(int *a, int *b)
{
    int *t = a;
    a = b;
    b = t;
}
```

**B.**

```c
void cambiar(int *a, int *b)
{
    *a = *b;
    *b = *a;
}
```

**C.**

```c
void cambiar(int a, int b)
{
    int t = a;
    a = b;
    b = t;
}
```

**D.**

```c
void cambiar(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}
```

---

### PE-T05-07 · Medio

¿Qué se imprime después de modificar una variable mediante su dirección?

```c
void aumentar(int *p, int cantidad)
{
    *p += cantidad;
}

int main(void)
{
    int n = 4;
    aumentar(&n, 3);
    printf("%d", n);
    return 0;
}
```

**A.** `7`

**B.** `3`

**C.** `4`

**D.** `12`

---

### PE-T05-08 · Difícil

Los dos parámetros apuntan al mismo objeto. ¿Cuál es el valor final?

```c
void ajustar(int *a, int *b)
{
    *a += 2;
    *b *= 2;
}

int main(void)
{
    int x = 3;
    ajustar(&x, &x);
    printf("%d", x);
    return 0;
}
```

**A.** `10`

**B.** `6`

**C.** `5`

**D.** `8`

---

### PE-T05-09 · Medio

¿Qué llamada utiliza correctamente la función mostrada para modificar el entero n?

```c
void incrementar(int *p)
{
    (*p)++;
}
int n = 5;
```

**A.**

```c
incrementar(&n);
```

**B.**

```c
incrementar(n);
```

**C.**

```c
incrementar(*n);
```

**D.**

```c
n = incrementar(&n);
```

---

### PE-T05-10 · Medio

¿Qué parte del procedimiento void se ejecuta con un dato inválido?

```c
void mostrar(int n)
{
    if (n < 0)
    {
        printf("Error");
        return;
    }
    printf("Dato");
}

int main(void)
{
    mostrar(-2);
    printf("Fin");
    return 0;
}
```

**A.** `ErrorFin`

**B.** `ErrorDatoFin`

**C.** `Error`

**D.** `DatoFin`

---

### PE-T05-11 · Difícil

La declaración visible es `int contar(int a, int b);`. ¿Qué definición corresponde a ese contrato?

**A.**

```c
void contar(int inicio, int fin)
{
    printf("%d", fin - inicio + 1);
}
```

**B.**

```c
int contar(double inicio, double fin)
{
    return fin - inicio + 1;
}
```

**C.**

```c
int contar(int inicio, int fin)
{
    return fin - inicio + 1;
}
```

**D.**

```c
int contar(int inicio)
{
    return inicio;
}
```

---

### PE-T05-12 · Difícil

¿Qué valores se devuelven por los parámetros de salida?

```c
void dividir(int a, int b, int *c, int *r)
{
    *c = a / b;
    *r = a % b;
}

int main(void)
{
    int c = -1, r = -1;
    dividir(23, 4, &c, &r);
    printf("%d %d", c, r);
    return 0;
}
```

**A.** `5 0`

**B.** `5 3`

**C.** `23 4`

**D.** `6 -1`

---

### PE-T05-13 · Difícil

Se desea una función reutilizable que indique con retorno si n pertenece al intervalo cerrado [min,max], con min<=max. ¿Qué definición cumple el contrato?

**A.**

```c
int en_rango(int n, int min, int max)
{
    return n >= min && n <= max;
}
```

**B.**

```c
void en_rango(int n, int min, int max)
{
    printf("%d", n >= min && n <= max);
}
```

**C.**

```c
int en_rango(int n, int min, int max)
{
    return n >= min || n <= max;
}
```

**D.**

```c
int en_rango(int n, int min, int max)
{
    return min < n && n < max;
}
```

---

### PE-T05-14 · Medio

¿Qué se imprime cuando el llamador ignora el retorno de la primera llamada?

```c
int mas_uno(int x)
{
    return x + 1;
}

int main(void)
{
    int x = 5;
    mas_uno(x);
    printf("%d %d", x, mas_uno(x));
    return 0;
}
```

**A.** `5 6`

**B.** `5 5`

**C.** `6 6`

**D.** `6 7`

---

### PE-T05-15 · Difícil

¿Qué se imprime después de redirigir solo la copia local de un puntero?

```c
void redirigir(int *p, int *q)
{
    p = q;
    (*p)++;
}

int main(void)
{
    int a = 2, b = 8;
    redirigir(&a, &b);
    printf("%d %d", a, b);
    return 0;
}
```

**A.** `9 8`

**B.** `3 8`

**C.** `2 9`

**D.** `8 9`

---

### PE-T05-16 · Medio

Con la declaración `void reporte(void);`, ¿qué uso ejecuta el reporte sin tratarlo como una expresión con valor?

**A.**

```c
int r = reporte();
```

**B.**

```c
printf("%d", reporte());
```

**C.**

```c
if (reporte() > 0)
    printf("ok");
```

**D.**

```c
reporte();
```

---

### PE-T05-17 · Difícil

¿Qué efecto tiene una salida anticipada sobre la variable apuntada?

```c
void aplicar(int *n, int factor)
{
    if (factor < 0)
        return;
    *n *= factor;
}

int main(void)
{
    int n = 5;
    aplicar(&n, -3);
    aplicar(&n, 2);
    printf("%d", n);
    return 0;
}
```

**A.** `5`

**B.** `4`

**C.** `10`

**D.** `7`

---

### PE-T05-18 · Difícil

Con a>=0, b>=0 y punteros de salida válidos y distintos, ¿qué función devuelve 0 y deja intactas las salidas si b es cero, y en otro caso escribe cociente y resto y devuelve 1?

**A.**

```c
int dividir(int a, int b, int *c, int *r)
{
    *c = a / b;
    *r = a % b;
    if (b == 0)
        return 0;
    return 1;
}
```

**B.**

```c
int dividir(int a, int b, int *c, int *r)
{
    if (b != 0)
        return 0;
    *c = a / b;
    *r = a % b;
    return 1;
}
```

**C.**

```c
int dividir(int a, int b, int *c, int *r)
{
    if (b == 0)
    {
        *c = 0;
        *r = 0;
        return 0;
    }
    *c = a / b;
    *r = a % b;
    return 1;
}
```

**D.**

```c
int dividir(int a, int b, int *c, int *r)
{
    if (b == 0)
        return 0;
    *c = a / b;
    *r = a % b;
    return 1;
}
```

---

### PE-T05-19 · Medio

¿Qué imprime el programa al usar funciones con una responsabilidad cada una?

```c
int mayor(int a, int b)
{
    if (a > b)
        return a;
    return b;
}
int cuadrado(int n)
{
    return n * n;
}

int main(void)
{
    int a = 4, b = 9;
    int m = mayor(a, b);
    printf("%d %d", m, cuadrado(m));
    return 0;
}
```

**A.** `4 16`

**B.** `9 18`

**C.** `9 81`

**D.** `13 169`

---

### PE-T05-20 · Difícil

¿Qué error de interfaz presenta este programa en C11?

```c
int calcular(int n);
int calcular(double n)
{
    return (int)(n * 2);
}
int main(void)
{
    return calcular(3);
}
```

**A.** Los nombres de los parámetros están repetidos y eso está prohibido.

**B.** No hay conflicto: C sobrecarga automáticamente calcular por el tipo del argumento.

**C.** El prototipo y la definición declaran parámetros de tipos incompatibles.

**D.** Una función int no puede contener un casting a int.

---

<a id="tema-6"></a>
## Tema 6 · Arreglos

**Fuente del tema:** [tema_06_arreglos.html](https://pedroyepiz.github.io/pe/pages/tema_06_arreglos.html)

### PE-T06-01 · Medio

¿Qué valores se imprimen después de una inicialización parcial?

```c
int v[5] = {4, 7};
printf("%d %d %d", v[0], v[2], v[4]);
```

**A.** `No se puede determinar: las posiciones restantes no se inicializan.`

**B.** `4 7 7`

**C.** `4 7 0`

**D.** `4 0 0`

---

### PE-T06-02 · Difícil

El arreglo se modifica durante el recorrido. ¿Cuál es su contenido final?

```c
int v[] = {1, 2, 3, 4};
for (int i = 1; i < 4; i++)
    v[i] += v[i - 1];
for (int i = 0; i < 4; i++)
    printf("%d ", v[i]);
```

**A.** `1 2 3 4`

**B.** `2 4 6 8`

**C.** `1 3 5 7`

**D.** `1 3 6 10`

---

### PE-T06-03 · Medio

¿Qué se modifica en el llamador al enviar un arreglo y un entero?

```c
void modificar(int v[], int n)
{
    v[0] = 8;
    n = 9;
}

int main(void)
{
    int v[] = {3, 4}, n = 2;
    modificar(v, n);
    printf("%d %d", v[0], n);
    return 0;
}
```

**A.** `3 9`

**B.** `8 9`

**C.** `3 2`

**D.** `8 2`

---

### PE-T06-04 · Difícil

¿Por qué este cálculo no permite obtener en general el número de elementos enviado?

```c
void mostrar(int v[])
{
    size_t n = sizeof(v) / sizeof(v[0]);
    printf("%zu", n);
}
int datos[12];
/* llamada: mostrar(datos); */
```

**A.** El problema se resuelve cambiando size_t por int sin tocar la interfaz.

**B.** El cálculo funciona y siempre imprime 12.

**C.** sizeof(v) siempre vale cero cuando se recibe un arreglo.

**D.** Dentro de la función v es un parámetro ajustado a puntero; debe recibirse también la cantidad.

---

### PE-T06-05 · Medio

¿Qué cadena y longitud quedan después de copiar y concatenar?

```c
char texto[20];
strcpy(texto, "FIAD");
strcat(texto, "-PE");
printf("%s %zu", texto, strlen(texto));
```

**A.** `-PE 3`

**B.** `FIAD-PE 8`

**C.** `FIADPE 6`

**D.** `FIAD-PE 7`

---

### PE-T06-06 · Difícil

Distingue capacidad del arreglo y longitud visible. ¿Qué se imprime?

```c
char texto[] = {'A', 'B', '\0', 'C', '\0'};
printf("%zu %zu %s", sizeof(texto), strlen(texto), texto);
```

**A.** `5 2 AB`

**B.** `5 5 ABC`

**C.** `4 2 AB`

**D.** `5 4 ABC`

---

### PE-T06-07 · Difícil

La entrada es `ABCDE` seguida de Enter. ¿Qué lee cada operación si ambas tienen éxito?

```c
char s[4];
int c;
fgets(s, sizeof(s), stdin);
c = getchar();
printf("[%s] %c", s, c);
```

**A.** `[ABC] D`

**B.** `[ABC] E`

**C.** `[ABCD] E`

**D.**

```text
[ABCDE] 

```

---

### PE-T06-08 · Difícil

La entrada es `20` seguida de Enter y después `Ana` seguida de Enter. ¿Qué imprime?

```c
int edad;
char nombre[20];
scanf("%d", &edad);
fgets(nombre, sizeof(nombre), stdin);
nombre[strcspn(nombre, "\n")] = '\0';
printf("%d [%s]", edad, nombre);
```

**A.** `0 [Ana]`

**B.** `20 [Ana]`

**C.** `20 [20]`

**D.** `20 []`

---

### PE-T06-09 · Medio

Solo se pregunta por el signo de strcmp, no por una magnitud específica. ¿Qué se imprime?

```c
char a[] = "ANA", b[] = "ANA", c[] = "ANB";
printf("%d %d", strcmp(a, b) == 0, strcmp(a, c) < 0);
```

**A.** `1 0`

**B.** `1 1`

**C.** `0 1`

**D.** `0 0`

---

### PE-T06-10 · Medio

¿Qué bloque obtiene la longitud de una cadena válida s sin contar su terminador y sin modificarla?

**A.**

```c
int n = 0;
do
{
    n++;
} while (s[n - 1] != '\0');
printf("%d", n);
```

**B.**

```c
int n = 0;
while (s[n] != '\0')
    n++;
printf("%d", n);
```

**C.**

```c
int n = 0;
while (s[n] != '\0')
{
    s[n] = '\0';
    n++;
}
printf("%d", n);
```

**D.**

```c
int n = 0;
while (s[n] == '\0')
    n++;
printf("%d", n);
```

---

### PE-T06-11 · Medio

¿Qué suma produce el recorrido de la diagonal principal?

```c
int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
int s = 0;
for (int i = 0; i < 3; i++)
    s += m[i][i];
printf("%d", s);
```

**A.** `15`

**B.** `12`

**C.** `45`

**D.** `18`

---

### PE-T06-12 · Difícil

Para `int m[2][3]` y `int t[3][2]`, ¿qué bloque construye la transpuesta sin salir de los límites?

**A.**

```c
for (int i = 0; i <= 2; i++)
    for (int j = 0; j <= 3; j++)
        t[j][i] = m[i][j];
```

**B.**

```c
for (int i = 0; i < 3; i++)
    for (int j = 0; j < 2; j++)
        t[j][i] = m[i][j];
```

**C.**

```c
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 3; j++)
        t[j][i] = m[i][j];
```

**D.**

```c
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 3; j++)
        t[i][j] = m[i][j];
```

---

### PE-T06-13 · Medio

¿Qué cadenas se imprimen después de copiar solamente una fila del arreglo?

```c
char dias[3][10] = {"Lunes", "Martes", "Jueves"};
strcpy(dias[1], dias[0]);
printf("%s %s", dias[1], dias[2]);
```

**A.** `Martes Jueves`

**B.** `Martes Lunes`

**C.** `Lunes Jueves`

**D.** `Lunes Lunes`

---

### PE-T06-14 · Difícil

Se tiene `char destino[6] = "Hola";`. ¿Qué bloque puede ejecutarse sin desbordar el arreglo?

**A.**

```c
strcat(destino, "PE");
```

**B.**

```c
strcat(destino, "!!");
```

**C.**

```c
strcat(destino, "!");
```

**D.**

```c
strcpy(destino, "Saludos");
```

---

### PE-T06-15 · Medio

¿Cuál es el diagnóstico correcto? No se debe inventar una salida para el acceso inválido.

```c
int v[4] = {1, 2, 3, 4};
printf("%d", v[4]);
```

**A.** Imprime siempre 0 porque todos los arreglos terminan en cero.

**B.** Imprime siempre 4 porque el tamaño también es un índice válido.

**C.** El índice está fuera del arreglo y la evaluación tiene comportamiento indefinido.

**D.** No compila: C comprueba siempre todos los índices en compilación.

---

### PE-T06-16 · Difícil

¿Qué bloque invierte un arreglo v de n elementos sin deshacer luego los intercambios?

**A.**

```c
for (int i = 0; i < n / 2; i++)
{
    int t = v[i];
    v[i] = v[n - i];
    v[n - i] = t;
}
```

**B.**

```c
for (int i = 0; i < n / 2; i++)
{
    v[i] = v[n - 1 - i];
    v[n - 1 - i] = v[i];
}
```

**C.**

```c
for (int i = 0; i < n / 2; i++)
{
    int t = v[i];
    v[i] = v[n - 1 - i];
    v[n - 1 - i] = t;
}
```

**D.**

```c
for (int i = 0; i < n; i++)
{
    int t = v[i];
    v[i] = v[n - 1 - i];
    v[n - 1 - i] = t;
}
```

---

### PE-T06-17 · Difícil

Si no existe un cero dentro de las n posiciones válidas, ¿qué defecto tiene el orden de la condición?

```c
int i = 0;
while (v[i] != 0 && i < n)
    i++;
```

**A.** La única corrección necesaria es sustituir && por ||.

**B.** No hay defecto: && siempre evalúa primero la condición que contiene el tamaño.

**C.** Cuando i llega a n, se intenta leer v[n] antes de comprobar el límite; debe probarse i<n primero.

**D.** El arreglo se amplía automáticamente para almacenar el centinela.

---

### PE-T06-18 · Difícil

El índice se calcula con un valor del propio arreglo. ¿Qué se imprime?

```c
int v[] = {2, 0, 1};
v[v[0]] = 7;
printf("%d %d %d", v[0], v[1], v[2]);
```

**A.** `2 7 1`

**B.** `7 0 1`

**C.** `7 0 7`

**D.** `2 0 7`

---

### PE-T06-19 · Medio

¿Qué parte del arreglo se modifica al pasar una dirección interior?

```c
void subir(int a[], int n)
{
    for (int i = 0; i < n; i++)
        a[i] += 10;
}

int main(void)
{
    int v[] = {5, 6, 7, 8};
    subir(v + 1, 2);
    for (int i = 0; i < 4; i++)
        printf("%d ", v[i]);
    return 0;
}
```

**A.** `15 16 17 18`

**B.** `15 16 7 8`

**C.** `5 6 17 18`

**D.** `5 16 17 8`

---

### PE-T06-20 · Medio

¿Qué ocurre al eliminar el salto de línea cuando la cadena no contiene ninguno?

```c
char s[10] = "Ana";
s[strcspn(s, "\n")] = '\0';
printf("%s %zu", s, strlen(s));
```

**A.** `An 2`

**B.** `Ana 3`

**C.**

```text
 0
```

**D.** `Ana 4`

---

<a id="tema-7"></a>
## Tema 7 · Structs: estructuras, union y enum

**Fuente del tema:** [tema_07_structs.html](https://pedroyepiz.github.io/pe/pages/tema_07_structs.html)

### PE-T07-01 · Medio

¿Qué valores conserva cada copia de la estructura?

```c
typedef struct
{
    int edad;
    char nombre[8];
} Alumno;

int main(void)
{
    Alumno a = {20, "Ana"};
    Alumno b = a;
    b.edad = 25;
    b.nombre[0] = 'E';
    printf("%d %s %d %s", a.edad, a.nombre, b.edad, b.nombre);
    return 0;
}
```

**A.** `25 Ena 25 Ena`

**B.** `20 Ena 25 Ena`

**C.** `20 Ana 20 Ana`

**D.** `20 Ana 25 Ena`

---

### PE-T07-02 · Medio

¿Qué edad queda al pasar una estructura por valor?

```c
typedef struct
{
    int edad;
} Alumno;
void actualizar(Alumno a)
{
    a.edad = 30;
}

int main(void)
{
    Alumno a = {19};
    actualizar(a);
    printf("%d", a.edad);
    return 0;
}
```

**A.** `49`

**B.** `0`

**C.** `19`

**D.** `30`

---

### PE-T07-03 · Medio

¿Qué valor se imprime después de modificar mediante un puntero a estructura?

```c
typedef struct
{
    int edad;
} Alumno;
void actualizar(Alumno *a)
{
    a->edad += 2;
}

int main(void)
{
    Alumno a = {19};
    actualizar(&a);
    printf("%d", a.edad);
    return 0;
}
```

**A.** `19`

**B.** `0`

**C.** `2`

**D.** `21`

---

### PE-T07-04 · Difícil

Con las declaraciones mostradas, ¿qué instrucción copia el apellido al campo correcto?

```c
typedef struct
{
    char appat[12];
} Nombre;
typedef struct
{
    Nombre nombre;
    int edad;
} Alumno;
Alumno alumno;
```

**A.**

```c
strcpy(alumno->nombre.appat, "LOPEZ");
```

**B.**

```c
alumno.nombre.appat = "LOPEZ";
```

**C.**

```c
strcpy(alumno.nombre.appat, "LOPEZ");
```

**D.**

```c
strcpy(alumno.appat, "LOPEZ");
```

---

### PE-T07-05 · Medio

Solo se lee el miembro escrito más recientemente. ¿Qué imprime?

```c
typedef union
{
    int entero;
    float decimal;
} Dato;

int main(void)
{
    Dato d;
    d.entero = 18;
    d.decimal = 2.5f;
    printf("%.1f", d.decimal);
    return 0;
}
```

**A.** `20.5`

**B.** `2.5`

**C.** `18.0`

**D.** `0.0`

---

### PE-T07-06 · Difícil

¿Qué valores enteros corresponden a las constantes de la enumeración?

```c
typedef enum
{
    INACTIVO = 0,
    ACTIVO = 4,
    PAUSA,
    FINAL = 9
} Estado;

int main(void)
{
    printf("%d %d %d", ACTIVO, PAUSA, FINAL);
    return 0;
}
```

**A.** `4 5 9`

**B.** `1 2 3`

**C.** `4 4 9`

**D.** `4 5 6`

---

### PE-T07-07 · Difícil

¿Qué conclusión es correcta sin suponer alineación ni tamaños de la plataforma?

```c
struct Registro
{
    char marca;
    int clave;
};
printf("%zu", sizeof(struct Registro));
```

**A.** El tamaño es la cantidad de campos: 2.

**B.** El tamaño debe ser exactamente sizeof(int), porque char comparte su memoria.

**C.** El tamaño es siempre 5 bytes, aun si int ocupa dos bytes.

**D.** El tamaño puede incluir relleno; no se garantiza que sea sizeof(char)+sizeof(int).

---

### PE-T07-08 · Difícil

Con un arreglo de n registros, ¿qué bloque suma únicamente las edades de los activos?

**A.**

```c
int s = 0;
for (int i = 0; i < n; i++)
    if (g[i].status == 0)
        s += g[i].edad;
printf("%d", s);
```

**B.**

```c
int s = 0;
for (int i = 0; i < n; i++)
    if (g[i].status = 1)
        s += g[i].edad;
printf("%d", s);
```

**C.**

```c
int s = 0;
for (int i = 1; i < n; i++)
    if (g[i].status == 1)
        s += g[i].edad;
printf("%d", s);
```

**D.**

```c
int s = 0;
for (int i = 0; i < n; i++)
    if (g[i].status == 1)
        s += g[i].edad;
printf("%d", s);
```

---

### PE-T07-09 · Medio

¿Qué problema presenta la asignación del nombre después de declarar el registro?

```c
typedef struct
{
    char nombre[20];
    int edad;
} Alumno;
Alumno a;
a.nombre = "Pedro";
```

**A.** La solución es convertir edad en double.

**B.** Solo falta poner & antes del texto Pedro.

**C.** La asignación es válida y siempre reserva un arreglo más grande.

**D.** El miembro es un arreglo y no admite esa asignación; puede usarse strcpy con capacidad suficiente.

---

### PE-T07-10 · Difícil

¿Qué efecto tiene asignar una estructura anidada completa?

```c
typedef struct
{
    int dia, mes;
} Fecha;
typedef struct
{
    Fecha fecha;
    int edad;
} Alumno;

int main(void)
{
    Alumno a = {{8, 3}, 20};
    Alumno b = a;
    b.fecha.dia = 10;
    printf("%d %d", a.fecha.dia, b.fecha.dia);
    return 0;
}
```

**A.** `8 8`

**B.** `10 10`

**C.** `10 8`

**D.** `8 10`

---

### PE-T07-11 · Difícil

¿Qué diagnóstico corresponde a la comparación de dos registros?

```c
typedef struct
{
    int clave, edad;
} Alumno;
Alumno a = {1, 20}, b = {1, 20};
if (a == b)
    printf("iguales");
```

**A.** C no define == entre estructuras; hay que comparar los campos pertinentes.

**B.** Imprime iguales porque las estructuras tienen los mismos valores.

**C.** Compara automáticamente solo el primer campo.

**D.** Compara sus direcciones y siempre produce falso.

---

### PE-T07-12 · Medio

Con `Alumno *p = &grupo[2];`, ¿qué bloque actualiza la edad del tercer registro?

```c
typedef struct
{
    int edad;
} Alumno;
Alumno grupo[4] = {{10}, {11}, {12}, {13}};
Alumno *p = &grupo[2];
```

**A.**

```c
p->edad = 24;
```

**B.**

```c
(*p->edad) = 24;
```

**C.**

```c
grupo[3].edad = 24;
```

**D.**

```c
p.edad = 24;
```

---

### PE-T07-13 · Difícil

Ambos parámetros señalan el mismo registro. ¿Qué edad queda?

```c
typedef struct
{
    int edad;
} Alumno;
void ajustar(Alumno *a, Alumno *b)
{
    a->edad += 2;
    b->edad *= 2;
}

int main(void)
{
    Alumno a = {10};
    ajustar(&a, &a);
    printf("%d", a.edad);
    return 0;
}
```

**A.** `20`

**B.** `24`

**C.** `12`

**D.** `22`

---

### PE-T07-14 · Medio

Una función recibe una estructura por valor y devuelve la copia actualizada. ¿Qué llamada conserva el cambio en a?

```c
typedef struct
{
    int edad;
} Alumno;
Alumno cumplir(Alumno a)
{
    a.edad++;
    return a;
}
Alumno a = {20};
```

**A.**

```c
cumplir(a);
```

**B.**

```c
a.edad = cumplir(a);
```

**C.**

```c
a = cumplir(a);
```

**D.**

```c
cumplir(&a);
```

---

### PE-T07-15 · Difícil

El campo tipo indica el miembro activo: ENTERO o REAL. ¿Qué bloque muestra el miembro que corresponde a cada variante?

```c
enum
{
    ENTERO,
    REAL
};
typedef struct
{
    int tipo;
    union
    {
        int entero;
        float real;
    } dato;
} Registro;
Registro r; /* tipo y miembro correspondiente ya inicializados */
```

**A.**

```c
if (r.tipo = ENTERO)
    printf("%d", r.dato.entero);
else
    printf("%.1f", r.dato.real);
```

**B.**

```c
printf("%d %.1f", r.dato.entero, r.dato.real);
```

**C.**

```c
if (r.tipo == ENTERO)
    printf("%.1f", r.dato.real);
else
    printf("%d", r.dato.entero);
```

**D.**

```c
if (r.tipo == ENTERO)
    printf("%d", r.dato.entero);
else
    printf("%.1f", r.dato.real);
```

---

<a id="tema-8"></a>
## Tema 8 · Typedef: alias de tipos

**Fuente del tema:** [tema_08_typedef.html](https://pedroyepiz.github.io/pe/pages/tema_08_typedef.html)

### PE-T08-01 · Medio

Un alias conserva las operaciones y conversiones del tipo base. ¿Qué se imprime?

```c
typedef int Tkey;
typedef double Tpromedio;

int main(void)
{
    Tkey a = 9, b = 4;
    Tpromedio r = a / b;
    printf("%.1f", r);
    return 0;
}
```

**A.** `9.4`

**B.** `3.0`

**C.** `2.0`

**D.** `2.25`

---

### PE-T08-02 · Medio

¿Qué declaración usa correctamente el alias de la estructura sin inventar otra etiqueta?

```c
typedef struct Alumno
{
    int edad;
} sTalum;
```

**A.**

```c
sTalum struct alumno = {20};
```

**B.**

```c
sTalum alumno = {20};
```

**C.**

```c
struct alumno sTalum = {20};
```

**D.**

```c
struct sTalum alumno = {20};
```

---

### PE-T08-03 · Difícil

El alias representa un arreglo completo. ¿Qué cantidad se imprime?

```c
typedef int Tvector[3];

int main(void)
{
    Tvector datos = {3, 4, 5};
    printf("%zu %d", sizeof(datos) / sizeof(datos[0]), datos[2]);
    return 0;
}
```

**A.** `3 4`

**B.** `1 5`

**C.** `12 5`

**D.** `3 5`

---

### PE-T08-04 · Difícil

¿Qué valor cambia al combinar un alias y un puntero al tipo original?

```c
typedef int Tkey;

int main(void)
{
    Tkey clave = 12;
    int *p = &clave;
    *p = 18;
    printf("%d", clave);
    return 0;
}
```

**A.** `12`

**B.** `0`

**C.** `No compila: un alias siempre crea un tipo incompatible.`

**D.** `18`

---

### PE-T08-05 · Medio

Se necesitan nombres Tkey y Tflag como alias separados de int. ¿Qué bloque declara ambos y permite inicializarlos?

**A.**

```c
typedef int Tkey;
typedef int Tflag;
Tkey clave = 2;
Tflag activo = 1;
```

**B.**

```c
typedef int Tkey;
Tkey = Tflag;
Tflag activo = 1;
```

**C.**

```c
int typedef = Tkey;
int typedef = Tflag;
```

**D.**

```c
typedef Tkey int;
typedef Tflag int;
Tkey clave = 2;
```

---

### PE-T08-06 · Difícil

El mismo archivo tipos.h se incluye directamente y a través de otra cabecera. ¿Qué versión protege correctamente la definición de la estructura?

**A.**

```c
#define TIPOS_H
typedef struct
{
    int clave;
} sTalum;
```

**B.**

```c
#ifndef TIPOS_H
typedef struct
{
    int clave;
} sTalum;
#endif
```

**C.**

```c
#ifdef TIPOS_H
#define TIPOS_H
typedef struct
{
    int clave;
} sTalum;
#endif
```

**D.**

```c
#ifndef TIPOS_H
#define TIPOS_H
typedef struct
{
    int clave;
} sTalum;
#endif
```

---

### PE-T08-07 · Medio

La llave debe poder representar 8000000000 de manera garantizada. ¿Qué cambio central del alias y de su salida es coherente?

**A.**

```c
typedef short Tkey;
Tkey k = 8000000000LL;
printf("%hd", k);
```

**B.**

```c
typedef long long Tkey;
Tkey k = 8000000000LL;
printf("%lld", k);
```

**C.**

```c
typedef long long Tkey;
Tkey k = 8000000000LL;
printf("%d", k);
```

**D.**

```c
typedef char Tkey;
Tkey k = 8000000000LL;
printf("%c", k);
```

---

### PE-T08-08 · Difícil

¿Qué se imprime al usar dos variables declaradas con un alias de puntero?

```c
typedef int *Tpuntero;

int main(void)
{
    int x = 3, y = 7;
    Tpuntero a = &x, b = &y;
    *a += *b;
    printf("%d %d", x, y);
    return 0;
}
```

**A.** `10 10`

**B.** `10 7`

**C.** `3 10`

**D.** `No compila porque b no es puntero.`

---

### PE-T08-09 · Difícil

Se requiere un contador sin signo exactamente de 32 bits y la implementación proporciona uint32_t. ¿Qué alias expresa ese requisito?

```c
#include <stdint.h>
```

**A.**

```c
typedef unsigned long Tcontador;
```

**B.**

```c
typedef int32_t Tcontador;
```

**C.**

```c
typedef uint32_t Tcontador;
```

**D.**

```c
typedef unsigned int Tcontador;
```

---

### PE-T08-10 · Medio

El nombre sigue una convención, pero el compilador obedece a la declaración. ¿Qué imprime?

```c
typedef int sTnom;

int main(void)
{
    sTnom dato = 5;
    printf("%d", dato + 2);
    return 0;
}
```

**A.** `5`

**B.** `2`

**C.** `No compila: todo nombre que empieza por sT debe ser una estructura.`

**D.** `7`

---

<a id="tema-9"></a>
## Tema 9 · Recursión

**Fuente del tema:** [tema_09_recursion.html](https://pedroyepiz.github.io/pe/pages/tema_09_recursion.html)

### PE-T09-01 · Medio

¿Qué valor devuelve la recursión con su caso base?

```c
int factorial(int n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

int main(void)
{
    printf("%d", factorial(5));
    return 0;
}
```

**A.** `120`

**B.** `15`

**C.** `0`

**D.** `24`

---

### PE-T09-02 · Difícil

¿En qué orden se imprime antes y después de cada llamada?

```c
void traza(int n)
{
    if (n == 0)
        return;
    printf("%d ", n);
    traza(n - 1);
    printf("%d ", n);
}

int main(void)
{
    traza(3);
    return 0;
}
```

**A.** `1 2 3 3 2 1`

**B.** `3 2 1 1 2 3`

**C.** `3 2 1 0 1 2 3`

**D.** `3 2 1 3 2 1`

---

### PE-T09-03 · Medio

¿Qué resultado produce la reducción por división entera?

```c
int suma_digitos(int n)
{
    if (n == 0)
        return 0;
    return n % 10 + suma_digitos(n / 10);
}

int main(void)
{
    printf("%d", suma_digitos(508));
    return 0;
}
```

**A.** `508`

**B.** `8`

**C.** `13`

**D.** `58`

---

### PE-T09-04 · Difícil

Cada llamada tiene su propia variable local. ¿Qué se imprime al regresar?

```c
void f(int n)
{
    int local = n * 10;
    if (n == 0)
        return;
    f(n - 1);
    printf("%d ", local);
}

int main(void)
{
    f(3);
    return 0;
}
```

**A.** `30 20 10`

**B.** `10 20 30`

**C.** `10 10 10`

**D.** `30 30 30`

---

### PE-T09-05 · Difícil

Se cuenta cada entrada, incluidos los casos base. ¿Cuántas llamadas y qué resultado se imprimen?

```c
int llamadas = 0;
int fib(int n)
{
    int a, b;
    llamadas++;
    if (n <= 1)
        return n;
    a = fib(n - 1);
    b = fib(n - 2);
    return a + b;
}

int main(void)
{
    int r = fib(4);
    printf("%d %d", llamadas, r);
    return 0;
}
```

**A.** `7 3`

**B.** `5 3`

**C.** `9 5`

**D.** `9 3`

---

### PE-T09-06 · Medio

¿Qué función calcula factorial para todos los n de 0 a 7, incluido 0!=1?

**A.**

```c
int fact(int n)
{
    if (n == 0)
        return 1;
    return n * fact(n + 1);
}
```

**B.**

```c
int fact(int n)
{
    if (n == 0)
        return 1;
    return n * fact(n - 1);
}
```

**C.**

```c
int fact(int n)
{
    if (n == 1)
        return 1;
    return n * fact(n - 1);
}
```

**D.**

```c
int fact(int n)
{
    if (n == 0)
        return 0;
    return n * fact(n - 1);
}
```

---

### PE-T09-07 · Difícil

¿Qué defecto aparece con la llamada f(5)? No se solicita una salida tras agotar recursos.

```c
int f(int n)
{
    if (n == 0)
        return 0;
    return 1 + f(n - 2);
}
```

**A.** No compila porque no pueden restarse dos unidades en una llamada recursiva.

**B.** La sucesión 5,3,1,-1,... no alcanza cero; el algoritmo no garantiza terminar y acabará fallando al continuar.

**C.** Se detiene en n=1 aunque no exista ese caso base.

**D.** Devuelve siempre 3 porque cualquier negativo se convierte automáticamente en cero.

---

### PE-T09-08 · Difícil

Para n>=0 se desea contar cuántas divisiones enteras entre dos hacen falta para llegar a cero. ¿Qué función cumple el contrato, con cuenta(0)=0?

**A.**

```c
int cuenta(int n)
{
    if (n <= 1)
        return 0;
    return 1 + cuenta(n / 2);
}
```

**B.**

```c
int cuenta(int n)
{
    if (n == 0)
        return 0;
    return 1 + cuenta(n / 2);
}
```

**C.**

```c
int cuenta(int n)
{
    if (n == 0)
        return 1;
    return 1 + cuenta(n / 2);
}
```

**D.**

```c
int cuenta(int n)
{
    if (n == 0)
        return 0;
    return cuenta(n / 2);
}
```

---

### PE-T09-09 · Difícil

¿Qué devuelve la potencia recursiva que reutiliza un subresultado?

```c
int potencia(int a, int n)
{
    int p;
    if (n == 0)
        return 1;
    p = potencia(a, n / 2);
    if (n % 2 == 0)
        return p * p;
    return a * p * p;
}

int main(void)
{
    printf("%d", potencia(3, 5));
    return 0;
}
```

**A.** `81`

**B.** `15`

**C.** `243`

**D.** `729`

---

### PE-T09-10 · Medio

Contando la llamada inicial y la del caso base, ¿cuántas entradas a g se ejecutan?

```c
int entradas = 0;
void g(int n)
{
    entradas++;
    if (n == 0)
        return;
    g(n / 2);
}

int main(void)
{
    g(20);
    printf("%d", entradas);
    return 0;
}
```

**A.** `6`

**B.** `5`

**C.** `4`

**D.** `20`

---

<a id="tema-10"></a>
## Tema 10 · Multiarchivo

**Fuente del tema:** [tema_10_multiarchivo.html](https://pedroyepiz.github.io/pe/pages/tema_10_multiarchivo.html)

### PE-T10-01 · Medio

main.c llama a doble y operaciones.c contiene su única definición. operaciones.h tiene el prototipo. ¿Qué comando GCC compila y enlaza ambos fuentes para generar el ejecutable programa?

```c
/* operaciones.h */
int doble(int);
/* operaciones.c */
#include "operaciones.h"
int doble(int x)
{
    return 2 * x;
}
/* main.c */
#include "operaciones.h"
int main(void)
{
    return doble(3);
}
```

**A.**

```bash
gcc main.c -o programa
```

**B.**

```bash
gcc -c main.c operaciones.c
```

**C.**

```bash
gcc main.c operaciones.c -o programa
```

**D.**

```bash
gcc operaciones.c -o programa
```

---

### PE-T10-02 · Difícil

Se compilan y enlazan main.c y apoyo.c. Ambos incluyen la cabecera mostrada. ¿Qué defecto presenta esta organización?

```c
/* util.h */
#ifndef UTIL_H
#define UTIL_H
int doble(int x)
{
    return 2 * x;
}
#endif
/* main.c */
#include "util.h"
int usar(void);
int main(void)
{
    return doble(usar());
}
/* apoyo.c */
#include "util.h"
int usar(void)
{
    return doble(1);
}
```

**A.** Las guardas impiden también las definiciones entre archivos distintos, así que no existe conflicto.

**B.** El problema es que una función no puede llamar a otra definida en un archivo distinto.

**C.** Una cabecera no puede contener nunca un prototipo de función.

**D.** La función externa doble queda definida en dos unidades de traducción; conviene dejar el prototipo en .h y una definición en .c.

---

### PE-T10-03 · Medio

Solo se construye el comando; no se ejecuta ningún programa externo. ¿Qué texto se imprime?

```c
char comando[100];
char ciudad[] = "Baja California";
int grupos = 3;
sprintf(comando, "reporte.exe \"%s\" %d", ciudad, grupos);
printf("%s", comando);
```

**A.** `reporte.exe "%s" %d`

**B.** `reporte.exe Baja California 3`

**C.** `reporte.exe "Baja" "California" 3`

**D.** `reporte.exe "Baja California" 3`

---

### PE-T10-04 · Difícil

Un alumno interpreta el retorno de system como la cantidad de argumentos. ¿Cuál es la revisión correcta?

```c
int r = system("reporte.exe 10 20");
printf("Argumentos enviados: %d", r);
```

**A.** r debe valer 3 porque también se cuenta el ejecutable.

**B.** r informa sobre el resultado de ejecutar el comando, según la implementación; no cuenta argumentos.

**C.** r debe valer 2 porque hay dos números en la cadena.

**D.** r es siempre la longitud en caracteres de la cadena.

---

### PE-T10-05 · Difícil

La implementación de operaciones.c contiene `double mitad(int n) { return n/2.0; }`. ¿Qué contenido de operaciones.h anuncia la misma interfaz a main.c?

**A.**

```c
#ifndef OPERACIONES_H
#define OPERACIONES_H
double mitad(double n);
#endif
```

**B.**

```c
#ifndef OPERACIONES_H
#define OPERACIONES_H
void mitad(int n);
#endif
```

**C.**

```c
#ifndef OPERACIONES_H
#define OPERACIONES_H
double mitad(int n);
#endif
```

**D.**

```c
#ifndef OPERACIONES_H
#define OPERACIONES_H
int mitad(int n);
#endif
```

---

<a id="tema-11"></a>
## Tema 11 · Biblioteca de funciones

**Fuente del tema:** [tema_11_biblioteca_funciones.html](https://pedroyepiz.github.io/pe/pages/tema_11_biblioteca_funciones.html)

### PE-T11-01 · Medio

Se revisan aquí las inclusiones reales, sin suponer cabeceras agregadas. ¿Qué bloque declara las funciones usadas y muestra la longitud de Hola?

**A.**

```c
#include <stdio.h>
int main(void)
{
    printf("%zu", strlen("Hola"));
    return 0;
}
```

**B.**

```c
#include <stdio.h>
#include <string.h>
int main(void)
{
    printf("%zu", strlen("Hola"));
    return 0;
}
```

**C.**

```c
#include <string.h>
int main(void)
{
    printf("%zu", strlen("Hola"));
    return 0;
}
```

**D.**

```c
#include <math.h>
int main(void)
{
    printf("%zu", strlen("Hola"));
    return 0;
}
```

---

### PE-T11-02 · Difícil

Esta adaptación de la validación solo convierte con atoi y revisa rango. La entrada es `12abc`. ¿Qué devuelve?

```c
int leer(int min, int max)
{
    char s[30];
    int n;
    do
    {
        fgets(s, sizeof(s), stdin);
        n = atoi(s);
    } while (n < min || n > max);
    return n;
}

int main(void)
{
    printf("%d", leer(1, 20));
    return 0;
}
```

**A.** `12`

**B.** `20`

**C.** `0`

**D.** `No puede devolver ningún valor porque abc siempre obliga a repetir.`

---

### PE-T11-03 · Medio

La entrada contiene `Ana` y luego fin de archivo, sin salto de línea. ¿Qué muestra esta modificación defectuosa del lector?

```c
void leer_cadena(char s[], int tam)
{
    int i = 0;
    fgets(s, tam, stdin);
    while (s[i] != '\0')
        i++;
    if (i > 0)
        s[i - 1] = '\0';
}

int main(void)
{
    char s[20];
    leer_cadena(s, 20);
    printf("[%s]", s);
    return 0;
}
```

**A.** `[An]`

**B.** `[Ana]`

**C.** `[A]`

**D.** `[]`

---

### PE-T11-04 · Difícil

s tiene capacidad para n caracteres y n>=2. ¿Qué función elimina el salto cuando está presente, conserva el último carácter cuando no lo está y maneja una lectura fallida?

**A.**

```c
int leer(char s[], int n)
{
    if (fgets(s, n, stdin) == NULL)
        return 0;
    s[strcspn(s, "\n")] = '\0';
    return 1;
}
```

**B.**

```c
int leer(char s[], int n)
{
    if (fgets(s, n, stdin) == NULL)
        return 1;
    s[0] = '\0';
    return 0;
}
```

**C.**

```c
int leer(char s[], int n)
{
    if (fgets(s, n, stdin) == NULL)
        return 0;
    s[strlen(s)] = '\n';
    return 1;
}
```

**D.**

```c
int leer(char s[], int n)
{
    fgets(s, n, stdin);
    s[strlen(s) - 1] = '\0';
    return 1;
}
```

---

### PE-T11-05 · Medio

Se usa la biblioteca matemática. ¿Qué resultado se imprime?

```c
double d = sqrt(81.0) + pow(2.0, 3.0);
printf("%.1f", d);
```

**A.** `72.0`

**B.** `11.0`

**C.** `17.0`

**D.** `89.0`

---

### PE-T11-06 · Medio

Las funciones de ctype devuelven cero o un valor distinto de cero. ¿Qué imprime este uso portable de isdigit?

```c
int a = isdigit((unsigned char)'5') != 0;
int b = isdigit((unsigned char)'X') != 0;
printf("%d %d", a, b);
```

**A.** `0 1`

**B.** `1 0`

**C.** `5 0`

**D.** `1 1`

---

### PE-T11-07 · Difícil

La entrada contiene `-1`, `25` y `18`, cada uno en su propia línea. ¿Qué valor devuelve y cuántas lecturas ejecuta?

```c
int leer_edad(int min, int max, int *lecturas)
{
    char s[30];
    int n;
    do
    {
        fgets(s, sizeof(s), stdin);
        (*lecturas)++;
        n = atoi(s);
    } while (n < min || n > max);
    return n;
}

int main(void)
{
    int lecturas = 0;
    int edad = leer_edad(1, 20, &lecturas);
    printf("%d %d", edad, lecturas);
    return 0;
}
```

**A.** `18 3`

**B.** `18 2`

**C.** `-1 1`

**D.** `25 2`

---

### PE-T11-08 · Medio

Se quiere leer un carácter desde la entrada estándar con una función de ISO C, sin depender de conio.h. ¿Qué bloque cumple ese propósito?

**A.**

```c
#include <conio.h>
int c = getch();
```

**B.**

```c
#include <stdio.h>
int c = getchar();
```

**C.**

```c
#include <stdlib.h>
int c = system("pause");
```

**D.**

```c
#include <conio.h>
int c = kbhit();
```

---

### PE-T11-09 · Difícil

Analiza la expansión de la macro antes de evaluar la expresión. ¿Qué se imprime?

```c
#define DOBLE(x) x * 2

int main(void)
{
    int a = 3;
    printf("%d", DOBLE(a + 1));
    return 0;
}
```

**A.** `6`

**B.** `5`

**C.** `8`

**D.** `7`

---

### PE-T11-10 · Difícil

Para expresiones sin efectos laterales, ¿qué macro calcula el cuadrado de toda la expresión y funciona como operando en otra división?

**A.**

```c
#define CUADRADO(x) (x) * (x)
```

**B.**

```c
#define CUADRADO(x) ((x) * (x))
```

**C.**

```c
#define CUADRADO(x) x *x
```

**D.**

```c
#define CUADRADO(x) (x * x)
```

---

<a id="tema-12"></a>
## Tema 12 · Archivos de texto y binarios

**Fuente del tema:** [tema_12_archivos.html](https://pedroyepiz.github.io/pe/pages/tema_12_archivos.html)

### PE-T12-01 · Medio

Supón que todas las operaciones tienen éxito. ¿Qué recupera y muestra el archivo temporal?

```c
FILE *f = tmpfile();
int a = 0, b = 0;
fprintf(f, "%d %d", 12, 8);
rewind(f);
fscanf(f, "%d %d", &a, &b);
printf("%d", a + b);
fclose(f);
```

**A.** `20`

**B.** `0`

**C.** `128`

**D.** `12`

---

### PE-T12-02 · Medio

¿Qué bloque copia un flujo byte a byte hasta EOF sin guardar el resultado de fgetc en un char?

**A.**

```c
int c;
while ((c = fgetc(origen)) == EOF)
    fputc(c, destino);
```

**B.**

```c
int c;
while ((c = fgetc(origen)) != EOF)
    fputc(c, destino);
```

**C.**

```c
char c;
while ((c = fgetc(origen)) != EOF)
    fputc(c, destino);
```

**D.**

```c
int c;
while ((c = fgetc(origen)) != 0)
    fputc(c, destino);
```

---

### PE-T12-03 · Medio

El archivo contiene cuatro valores int. ¿Qué devuelve fread y cuál es el segundo valor leído?

```c
FILE *f = tmpfile();
int datos[] = {10, 20, 30, 40}, leidos[3] = {0};
fwrite(datos, sizeof(int), 4, f);
rewind(f);
size_t n = fread(leidos, sizeof(int), 3, f);
printf("%zu %d", n, leidos[1]);
fclose(f);
```

**A.** `4 20`

**B.** `3 30`

**C.** `3 20`

**D.** `12 20`

---

### PE-T12-04 · Difícil

La posición de registro se cuenta desde cero. ¿Qué contenido final se imprime?

```c
FILE *f = tmpfile();
int v[] = {10, 20, 30}, x = 99;
fwrite(v, sizeof(int), 3, f);
fseek(f, (long)sizeof(int), SEEK_SET);
fwrite(&x, sizeof(x), 1, f);
rewind(f);
fread(v, sizeof(int), 3, f);
printf("%d %d %d", v[0], v[1], v[2]);
fclose(f);
```

**A.** `99 20 30`

**B.** `10 20 99`

**C.** `10 20 30`

**D.** `10 99 30`

---

### PE-T12-05 · Difícil

Después de leer un entero, el cursor avanza un entero adicional con SEEK_CUR. ¿Qué valor se recupera?

```c
FILE *f = tmpfile();
int v[] = {5, 10, 15, 20}, x = 0;
fwrite(v, sizeof(int), 4, f);
rewind(f);
fread(&x, sizeof(x), 1, f);
fseek(f, (long)sizeof(int), SEEK_CUR);
fread(&x, sizeof(x), 1, f);
printf("%d", x);
fclose(f);
```

**A.** `15`

**B.** `10`

**C.** `5`

**D.** `20`

---

### PE-T12-06 · Medio

En este archivo binario con registros de longitud fija, ¿cuántos registros se calculan?

```c
typedef struct
{
    int clave, edad;
} Registro;

int main(void)
{
    FILE *f = tmpfile();
    Registro v[3] = {{1, 20}, {2, 21}, {3, 22}};
    fwrite(v, sizeof(Registro), 3, f);
    fseek(f, 0, SEEK_END);
    long cantidad = ftell(f) / (long)sizeof(Registro);
    printf("%ld", cantidad);
    fclose(f);
    return 0;
}
```

**A.** `3`

**B.** `24`

**C.** `Depende de si int ocupa cuatro u ocho bytes.`

**D.** `6`

---

### PE-T12-07 · Difícil

¿Cuál es el defecto de este patrón de lectura de registros?

```c
Registro r;
while (!feof(f))
{
    fread(&r, sizeof(r), 1, f);
    mostrar(r);
}
```

**A.** feof anticipa si el siguiente registro existe, así que el patrón es siempre correcto.

**B.** La solución es quitar fclose del programa.

**C.** Puede llamar a mostrar tras una lectura fallida; se debe condicionar el ciclo al retorno de fread.

**D.** fread devuelve necesariamente EOF cuando falla y eso hace terminar el while automáticamente.

---

### PE-T12-08 · Medio

¿Qué partes de la línea recuperan las dos conversiones %s?

```c
FILE *f = tmpfile();
char a[10], b[10];
fputs("ANA LOPEZ\n", f);
rewind(f);
fscanf(f, "%9s %9s", a, b);
printf("[%s][%s]", a, b);
fclose(f);
```

**A.** `[ANA LOPEZ][]`

**B.** `[ANA][ANA]`

**C.** `[][LOPEZ]`

**D.** `[ANA][LOPEZ]`

---

### PE-T12-09 · Medio

¿Qué longitudes se imprimen antes y después de limpiar la línea leída?

```c
FILE *f = tmpfile();
char s[20];
fputs("Ana\n", f);
rewind(f);
fgets(s, sizeof(s), f);
printf("%zu ", strlen(s));
s[strcspn(s, "\n")] = '\0';
printf("%zu", strlen(s));
fclose(f);
```

**A.** `5 4`

**B.** `4 3`

**C.** `4 4`

**D.** `3 3`

---

### PE-T12-10 · Medio

El segundo fopen usa un modo que trunca. ¿Qué cantidad de elementos puede leer inmediatamente?

```c
FILE *f = fopen("prueba.dat", "wb");
int x = 42, y = 0;
fwrite(&x, sizeof(x), 1, f);
fclose(f);
f = fopen("prueba.dat", "w+b");
size_t n = fread(&y, sizeof(y), 1, f);
printf("%zu %d", n, y);
fclose(f);
```

**A.** `0 42`

**B.** `1 42`

**C.** `0 0`

**D.** `1 0`

---

### PE-T12-11 · Difícil

El archivo se reabre en modo append binario. ¿Qué contenido se obtiene después del intento de escribir desde el inicio?

```c
FILE *f = fopen("letras.dat", "wb");
fwrite("ABC", 1, 3, f);
fclose(f);
f = fopen("letras.dat", "ab");
fseek(f, 0, SEEK_SET);
fwrite("Z", 1, 1, f);
fclose(f);
f = fopen("letras.dat", "rb");
char s[5] = {0};
fread(s, 1, 4, f);
printf("%s", s);
fclose(f);
```

**A.** `ABCZ`

**B.** `ZABC`

**C.** `ABC`

**D.** `ZBC`

---

### PE-T12-12 · Medio

El archivo alumnos.dat ya existe. Se necesita modificar registros en cualquier posición y conservar el resto del contenido. ¿Qué apertura corresponde?

**A.**

```c
FILE *f = fopen("alumnos.dat", "w+b");
```

**B.**

```c
FILE *f = fopen("alumnos.dat", "rb");
```

**C.**

```c
FILE *f = fopen("alumnos.dat", "r+b");
```

**D.**

```c
FILE *f = fopen("alumnos.dat", "ab");
```

---

### PE-T12-13 · Difícil

El índice está ordenado por clave, pero guarda números de registro del archivo original. ¿Qué registro se obtiene?

```c
typedef struct
{
    int clave;
    char nombre;
} Registro;
typedef struct
{
    int clave;
    long posicion;
} Indice;

int main(void)
{
    FILE *f = tmpfile();
    Registro datos[] = {{30, 'C'}, {10, 'A'}, {20, 'B'}}, r;
    Indice idx[] = {{10, 1}, {20, 2}, {30, 0}};
    fwrite(datos, sizeof(Registro), 3, f);
    int p = 1;
    fseek(f, idx[p].posicion * (long)sizeof(Registro), SEEK_SET);
    fread(&r, sizeof(r), 1, f);
    printf("%d %c", r.clave, r.nombre);
    fclose(f);
    return 0;
}
```

**A.** `20 A`

**B.** `30 C`

**C.** `10 A`

**D.** `20 B`

---

### PE-T12-14 · Difícil

Ya se leyó el segundo registro en r y el cursor quedó justo después de él. ¿Qué bloque cambia solo ese registro a inactivo? f es un flujo binario de actualización.

**A.**

```c
r.status = 0;
rewind(f);
fwrite(&r, sizeof(r), 1, f);
```

**B.**

```c
r.status = 0;
fseek(f, -(long)sizeof(r), SEEK_CUR);
fwrite(&r, sizeof(r), 1, f);
```

**C.**

```c
r.status = 0;
fseek(f, 0, SEEK_END);
fwrite(&r, sizeof(r), 1, f);
```

**D.**

```c
r.status = 0;
fwrite(&r, sizeof(r), 1, f);
```

---

### PE-T12-15 · Difícil

Al empaquetar, solo se copian registros activos. ¿Qué cantidad y última clave quedan en el archivo nuevo?

```c
typedef struct
{
    int clave, status;
} Registro;

int main(void)
{
    FILE *origen = tmpfile(), *destino = tmpfile();
    Registro v[] = {{10, 1}, {20, 0}, {30, 1}}, r = {0};
    fwrite(v, sizeof(r), 3, origen);
    rewind(origen);
    int cantidad = 0;
    while (fread(&r, sizeof(r), 1, origen) == 1)
        if (r.status == 1)
        {
            fwrite(&r, sizeof(r), 1, destino);
            cantidad++;
        }
    fseek(destino, -(long)sizeof(r), SEEK_END);
    fread(&r, sizeof(r), 1, destino);
    printf("%d %d", cantidad, r.clave);
    fclose(origen);
    fclose(destino);
    return 0;
}
```

**A.** `2 30`

**B.** `1 10`

**C.** `3 30`

**D.** `2 20`

---

### PE-T12-16 · Difícil

¿Qué ciclo procesa exclusivamente registros completos y termina al fallar la siguiente lectura?

```c
typedef struct
{
    int clave, status;
} Registro;
Registro r;
```

**A.**

```c
while (fread(&r, sizeof(r), 1, f) == sizeof(r))
    procesar(r);
```

**B.**

```c
while (fread(&r, sizeof(r), 1, f) == 0)
    procesar(r);
```

**C.**

```c
while (!feof(f))
{
    fread(&r, sizeof(r), 1, f);
    procesar(r);
}
```

**D.**

```c
while (fread(&r, sizeof(r), 1, f) == 1)
    procesar(r);
```

---

### PE-T12-17 · Medio

Después de fwrite en un archivo temporal de actualización, se desea leer el primer entero escrito. ¿Qué secuencia posiciona correctamente el flujo?

```c
FILE *f = tmpfile();
int x = 25, y = 0;
fwrite(&x, sizeof(x), 1, f);
```

**A.**

```c
fclose(f);
fread(&y, sizeof(y), 1, f);
```

**B.**

```c
fflush(f);
fread(&y, sizeof(y), 1, f);
```

**C.**

```c
fseek(f, 0, SEEK_END);
fread(&y, sizeof(y), 1, f);
```

**D.**

```c
rewind(f);
fread(&y, sizeof(y), 1, f);
```

---

### PE-T12-18 · Medio

¿Qué revisión corresponde al uso del flujo después de cerrarlo?

```c
FILE *f = fopen("datos.dat", "rb");
if (f != NULL)
{
    fclose(f);
    int c = fgetc(f);
    printf("%d", c);
}
```

**A.** fclose regresa el cursor al inicio y por eso se lee el primer carácter.

**B.** fgetc usa un flujo ya cerrado y no tiene un resultado definido; debe leerse antes de fclose o abrirse de nuevo.

**C.** fgetc devuelve siempre EOF y esa es una forma correcta de verificar el cierre.

**D.** El código es correcto si el archivo tiene menos de 100 bytes.

---

### PE-T12-19 · Difícil

Se solicitan tres elementos de dos bytes, pero el archivo solo contiene cinco bytes. ¿Qué devuelve fread y cuál es el cuarto byte completo leído?

```c
FILE *f = tmpfile();
unsigned char origen[] = {10, 20, 30, 40, 50}, b[6] = {0};
fwrite(origen, 1, 5, f);
rewind(f);
size_t n = fread(b, 2, 3, f);
printf("%zu %u", n, (unsigned)b[3]);
fclose(f);
```

**A.** `2 40`

**B.** `2 50`

**C.** `3 40`

**D.** `5 40`

---

### PE-T12-20 · Difícil

Tras empaquetar, quedan las claves 10 y 30 en posiciones 0 y 1. El índice viejo de la clave 30 sigue apuntando a 2. ¿Qué imprime esta consulta?

```c
typedef struct
{
    int clave, status;
} Registro;

int main(void)
{
    FILE *f = tmpfile();
    Registro v[] = {{10, 1}, {30, 1}}, r = {-1, 0};
    fwrite(v, sizeof(r), 2, f);
    long posicion_vieja = 2;
    fseek(f, posicion_vieja * (long)sizeof(r), SEEK_SET);
    size_t leidos = fread(&r, sizeof(r), 1, f);
    printf("%zu %d", leidos, r.clave);
    fclose(f);
    return 0;
}
```

**A.** `1 10`

**B.** `1 30`

**C.** `0 30`

**D.** `0 -1`

---

<a id="tema-13"></a>
## Tema 13 · Métodos de ordenación y búsqueda

**Fuente del tema:** [tema_13_ordenacion_busqueda.html](https://pedroyepiz.github.io/pe/pages/tema_13_ordenacion_busqueda.html)

### PE-T13-01 · Medio

Solo se ejecuta una pasada de burbuja, de izquierda a derecha. ¿Cómo queda el arreglo?

```c
int v[] = {4, 1, 3, 2};
for (int j = 0; j < 3; j++)
    if (v[j] > v[j + 1])
    {
        int t = v[j];
        v[j] = v[j + 1];
        v[j + 1] = t;
    }
for (int j = 0; j < 4; j++)
    printf("%d ", v[j]);
```

**A.** `1 3 2 4`

**B.** `1 4 2 3`

**C.** `1 2 3 4`

**D.** `4 1 2 3`

---

### PE-T13-02 · Medio

Solo se ejecuta la primera selección del mínimo. ¿Qué arreglo resulta?

```c
int v[] = {5, 3, 4, 1, 2}, menor = 0;
for (int j = 1; j < 5; j++)
    if (v[j] < v[menor])
        menor = j;
int t = v[0];
v[0] = v[menor];
v[menor] = t;
for (int j = 0; j < 5; j++)
    printf("%d ", v[j]);
```

**A.** `1 5 4 3 2`

**B.** `2 3 4 1 5`

**C.** `1 2 3 4 5`

**D.** `1 3 4 5 2`

---

### PE-T13-03 · Medio

El prefijo 2,5 ya está ordenado. ¿Qué resultado produce insertar el elemento de índice 2?

```c
int v[] = {2, 5, 3, 8};
int dato = v[2], j = 1;
while (j >= 0 && v[j] > dato)
{
    v[j + 1] = v[j];
    j--;
}
v[j + 1] = dato;
for (int i = 0; i < 4; i++)
    printf("%d ", v[i]);
```

**A.** `2 3 5 8`

**B.** `2 3 3 8`

**C.** `2 5 3 8`

**D.** `3 2 5 8`

---

### PE-T13-04 · Difícil

Se ejecuta únicamente el salto 2 de Shell Sort. ¿Qué arreglo intermedio queda?

```c
int v[] = {8, 5, 6, 3, 4, 1}, salto = 2;
for (int i = salto; i < 6; i++)
{
    int dato = v[i], j = i;
    while (j >= salto && v[j - salto] > dato)
    {
        v[j] = v[j - salto];
        j -= salto;
    }
    v[j] = dato;
}
for (int i = 0; i < 6; i++)
    printf("%d ", v[i]);
```

**A.** `4 1 6 3 8 5`

**B.** `1 3 4 5 6 8`

**C.** `6 3 4 1 8 5`

**D.** `4 3 6 1 8 5`

---

### PE-T13-05 · Difícil

Esta partición usa el último elemento como pivote. ¿Qué posición y arreglo imprime?

```c
int v[] = {4, 2, 5, 1, 3}, i = -1, pivote = v[4];
for (int j = 0; j < 4; j++)
    if (v[j] <= pivote)
    {
        i++;
        int t = v[i];
        v[i] = v[j];
        v[j] = t;
    }
int t = v[i + 1];
v[i + 1] = v[4];
v[4] = t;
printf("%d: ", i + 1);
for (int j = 0; j < 5; j++)
    printf("%d ", v[j]);
```

**A.** `0: 3 2 5 1 4`

**B.** `2: 1 2 3 4 5`

**C.** `3: 2 1 4 3 5`

**D.** `2: 2 1 3 4 5`

---

### PE-T13-06 · Difícil

Se fusionan dos mitades de registros ordenadas por clave ascendente. La salida también debe ser ascendente y conservar el orden original entre claves iguales. ¿Qué bloque cumple ambas condiciones, dando prioridad a la izquierda en los empates?

**A.**

```c
if (izq[i].clave >= der[j].clave)
    salida[k++] = izq[i++];
else
    salida[k++] = der[j++];
```

**B.**

```c
if (izq[i].clave <= der[j].clave)
    salida[k++] = izq[i++];
else
    salida[k++] = der[j++];
```

**C.**

```c
if (izq[i].clave < der[j].clave)
    salida[k++] = izq[i++];
else
    salida[k++] = der[j++];
```

**D.**

```c
if (izq[i].clave > der[j].clave)
    salida[k++] = izq[i++];
else
    salida[k++] = der[j++];
```

---

### PE-T13-07 · Difícil

El arreglo inicial ya es un max-heap. Se extrae solo el máximo y se repara el heap restante. ¿Cómo queda?

```c
int v[] = {7, 4, 6, 1, 2}, n = 5;
int t = v[0];
v[0] = v[n - 1];
v[n - 1] = t;
n--;
int i = 0;
while (2 * i + 1 < n)
{
    int h = 2 * i + 1;
    if (h + 1 < n && v[h + 1] > v[h])
        h++;
    if (v[i] >= v[h])
        break;
    t = v[i];
    v[i] = v[h];
    v[h] = t;
    i = h;
}
for (int j = 0; j < 5; j++)
    printf("%d ", v[j]);
```

**A.** `6 4 2 1 7`

**B.** `1 2 4 6 7`

**C.** `4 2 6 1 7`

**D.** `7 4 6 1 2`

---

### PE-T13-08 · Medio

La búsqueda secuencial retorna al encontrar una coincidencia. ¿Qué índice entrega con repetidos?

```c
int buscar(int v[], int n, int x)
{
    for (int i = 0; i < n; i++)
        if (v[i] == x)
            return i;
    return -1;
}

int main(void)
{
    int v[] = {8, 3, 8, 8};
    printf("%d", buscar(v, 4, 8));
    return 0;
}
```

**A.** `2`

**B.** `1`

**C.** `0`

**D.** `3`

---

### PE-T13-09 · Medio

¿Qué retorna esta búsqueda cuando el valor no aparece?

```c
int buscar(int v[], int n, int x)
{
    for (int i = 0; i < n; i++)
        if (v[i] == x)
            return i;
    return -1;
}

int main(void)
{
    int v[] = {4, 7, 2};
    printf("%d", buscar(v, 3, 9));
    return 0;
}
```

**A.** `2`

**B.** `-1`

**C.** `0`

**D.** `3`

---

### PE-T13-10 · Difícil

Cuenta una consulta cada vez que se inspecciona v[m]. ¿Qué índice y cantidad de consultas se imprimen?

```c
int v[] = {2, 4, 6, 8, 10, 12, 14, 16, 18};
int ini = 0, fin = 8, consultas = 0, pos = -1;
while (ini <= fin)
{
    int m = ini + (fin - ini) / 2;
    consultas++;
    if (v[m] == 18)
    {
        pos = m;
        break;
    }
    if (v[m] < 18)
        ini = m + 1;
    else
        fin = m - 1;
}
printf("%d %d", pos, consultas);
```

**A.** `8 3`

**B.** `9 4`

**C.** `8 9`

**D.** `8 4`

---

### PE-T13-11 · Difícil

Con v={2,4} y x=3, ¿por qué esta búsqueda puede no terminar?

```c
int ini = 0, fin = 1;
while (ini <= fin)
{
    int m = ini + (fin - ini) / 2;
    if (v[m] == x)
        break;
    if (v[m] < x)
        ini = m;
    else
        fin = m - 1;
}
```

**A.** El tamaño dos impide cualquier búsqueda binaria, aunque se actualicen bien los límites.

**B.** El error es usar <=; cambiarlo por < encuentra siempre cualquier valor.

**C.** Cuando m=ini=0, asignar ini=m deja el mismo intervalo; debe avanzarse a m+1.

**D.** La búsqueda termina necesariamente en dos iteraciones porque el arreglo está ordenado.

---

### PE-T13-12 · Difícil

El código se ejecuta sobre un arreglo desordenado. ¿Qué valor devuelve realmente, aunque 8 sí exista?

```c
int binaria(int v[], int n, int x)
{
    int ini = 0, fin = n - 1;
    while (ini <= fin)
    {
        int m = ini + (fin - ini) / 2;
        if (v[m] == x)
            return m;
        if (v[m] < x)
            ini = m + 1;
        else
            fin = m - 1;
    }
    return -1;
}

int main(void)
{
    int v[] = {8, 2, 6, 4};
    printf("%d", binaria(v, 4, 8));
    return 0;
}
```

**A.** `-1`

**B.** `1`

**C.** `0`

**D.** `3`

---

### PE-T13-13 · Medio

En una pasada de burbuja que debe ordenar de mayor a menor, ¿qué bloque intercambia los vecinos que están en orden incorrecto?

**A.**

```c
if (v[j] > v[j + 1])
{
    int t = v[j];
    v[j] = v[j + 1];
    v[j + 1] = t;
}
```

**B.**

```c
if (v[j] < v[j + 1])
{
    v[j] = v[j + 1];
    v[j + 1] = v[j];
}
```

**C.**

```c
if (v[j] == v[j + 1])
{
    int t = v[j];
    v[j] = v[j + 1];
    v[j + 1] = t;
}
```

**D.**

```c
if (v[j] < v[j + 1])
{
    int t = v[j];
    v[j] = v[j + 1];
    v[j + 1] = t;
}
```

---

### PE-T13-14 · Difícil

Se ordenan registros por matrícula ascendente y se debe mantener cada nombre unido a su matrícula. ¿Qué bloque cumple ambas condiciones?

**A.**

```c
for (int i = 0; i < n - 1; i++)
    for (int j = i + 1; j < n; j++)
        if (v[j].matri < v[i].matri)
        {
            v[i] = v[j];
            v[j] = v[i];
        }
```

**B.**

```c
for (int i = 0; i < n - 1; i++)
    for (int j = i + 1; j < n; j++)
        if (v[j].matri < v[i].matri)
        {
            int t = v[i].matri;
            v[i].matri = v[j].matri;
            v[j].matri = t;
        }
```

**C.**

```c
for (int i = 0; i < n - 1; i++)
    for (int j = i + 1; j < n; j++)
        if (v[j].matri < v[i].matri)
        {
            Registro t = v[i];
            v[i] = v[j];
            v[j] = t;
        }
```

**D.**

```c
for (int i = 0; i < n - 1; i++)
    for (int j = i + 1; j < n; j++)
        if (v[j].matri > v[i].matri)
        {
            Registro t = v[i];
            v[i] = v[j];
            v[j] = t;
        }
```

---

### PE-T13-15 · Difícil

Sobre un arreglo ordenado con repetidos, se debe devolver el índice de la primera coincidencia o -1 si no existe. ¿Qué función cumple ese contrato?

**A.**

```c
int primera(int v[], int n, int x)
{
    int l = 0, r = n - 1, p = -1;
    while (l <= r)
    {
        int m = l + (r - l) / 2;
        if (v[m] <= x)
        {
            if (v[m] == x)
                p = m;
            l = m + 1;
        }
        else
            r = m - 1;
    }
    return p;
}
```

**B.**

```c
int primera(int v[], int n, int x)
{
    int l = 0, r = n - 1;
    while (l <= r)
    {
        int m = l + (r - l) / 2;
        if (v[m] == x)
            return m;
        if (v[m] < x)
            l = m + 1;
        else
            r = m - 1;
    }
    return -1;
}
```

**C.**

```c
int primera(int v[], int n, int x)
{
    int l = 0, r = n - 1, p = 0;
    while (l <= r)
    {
        int m = l + (r - l) / 2;
        if (v[m] >= x)
        {
            if (v[m] == x)
                p = m;
            r = m - 1;
        }
        else
            l = m + 1;
    }
    return p;
}
```

**D.**

```c
int primera(int v[], int n, int x)
{
    int l = 0, r = n - 1, p = -1;
    while (l <= r)
    {
        int m = l + (r - l) / 2;
        if (v[m] >= x)
        {
            if (v[m] == x)
                p = m;
            r = m - 1;
        }
        else
            l = m + 1;
    }
    return p;
}
```

---

### PE-T13-16 · Medio

El contador registra comparaciones de vecinos en la burbuja sin salida anticipada. ¿Cuántas realiza?

```c
int n = 5, c = 0;
for (int i = 0; i < n - 1; i++)
    for (int j = 0; j < n - 1 - i; j++)
        c++;
printf("%d", c);
```

**A.** `20`

**B.** `10`

**C.** `25`

**D.** `4`

---

### PE-T13-17 · Difícil

El arreglo ya está ordenado y la bandera permite salir. ¿Qué cantidad de comparaciones y pasadas se imprime?

```c
int v[] = {1, 2, 3, 4, 5}, c = 0, pasadas = 0, cambio = 1;
for (int i = 0; i < 4 && cambio; i++)
{
    cambio = 0;
    pasadas++;
    for (int j = 0; j < 4 - i; j++)
    {
        c++;
        if (v[j] > v[j + 1])
        {
            int t = v[j];
            v[j] = v[j + 1];
            v[j + 1] = t;
            cambio = 1;
        }
    }
}
printf("%d %d", c, pasadas);
```

**A.** `10 4`

**B.** `5 1`

**C.** `4 1`

**D.** `4 4`

---

### PE-T13-18 · Difícil

Los arreglos a y b están ordenados y c tiene capacidad n+m. ¿Qué bloque fusiona todos los elementos sin perder los sobrantes?

**A.**

```c
while (i < n && j < m)
{
    if (a[i] <= b[j])
        c[k++] = a[i++];
    else
        c[k++] = b[j++];
}
while (i < n)
    c[k++] = a[i++];
```

**B.**

```c
while (i < n && j < m)
{
    if (a[i] <= b[j])
        c[k++] = a[i];
    else
        c[k++] = b[j];
    i++;
    j++;
}
while (i < n)
    c[k++] = a[i++];
while (j < m)
    c[k++] = b[j++];
```

**C.**

```c
while (i < n && j < m)
{
    if (a[i] > b[j])
        c[k++] = a[i++];
    else
        c[k++] = b[j++];
}
while (i < n)
    c[k++] = a[i++];
while (j < m)
    c[k++] = b[j++];
```

**D.**

```c
while (i < n && j < m)
{
    if (a[i] <= b[j])
        c[k++] = a[i++];
    else
        c[k++] = b[j++];
}
while (i < n)
    c[k++] = a[i++];
while (j < m)
    c[k++] = b[j++];
```

---

### PE-T13-19 · Medio

Estos contadores ilustran recorridos cuadrados frente a reducción por mitades. ¿Qué valores se imprimen?

```c
int n = 8, a = 0, b = 0;
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        a++;
for (int k = n; k > 1; k /= 2)
    b++;
printf("%d %d", a, b);
```

**A.** `16 4`

**B.** `64 3`

**C.** `8 3`

**D.** `64 4`

---

### PE-T13-20 · Difícil

particionar coloca el pivote en su posición definitiva p, con izq<=p<=der. ¿Qué definición de quick ordena ambos lados y garantiza reducir los intervalos?

```c
int particionar(int v[], int izq, int der);
```

**A.**

```c
void quick(int v[], int izq, int der)
{
    if (izq < der)
    {
        int p = particionar(v, izq, der);
        quick(v, izq, p - 1);
        quick(v, p, der);
    }
}
```

**B.**

```c
void quick(int v[], int izq, int der)
{
    if (izq < der)
    {
        int p = particionar(v, izq, der);
        quick(v, izq, p);
        quick(v, p + 1, der);
    }
}
```

**C.**

```c
void quick(int v[], int izq, int der)
{
    if (izq < der)
    {
        int p = particionar(v, izq, der);
        quick(v, izq, p - 1);
        quick(v, p + 1, der);
    }
}
```

**D.**

```c
void quick(int v[], int izq, int der)
{
    if (izq < der)
    {
        int p = particionar(v, izq, der);
        quick(v, izq, p - 1);
    }
}
```

---

<a id="clave-de-respuestas"></a>
## Clave de respuestas y explicaciones

**Sección del profesor.** Cada identificador corresponde a una pregunta del banco. La letra es la única opción correcta dentro del contexto y los supuestos indicados.

### Clave · Tema 0 · Introducción

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T00-01 | **A** | En C, `\\` representa una diagonal invertida, `\n` cambia de línea y `\"` imprime una comilla. La suma produce 5. |
| PE-T00-02 | **C** | La primera conversión guarda 12; la segunda falla ante x y conserva b=9. Solo se cuenta una conversión. |
| PE-T00-03 | **C** | scanf necesita las direcciones de ambas variables; para un double corresponde %lf. printf solo muestra datos. |
| PE-T00-04 | **B** | Las dos asignaciones comentadas no se ejecutan. Solo se suma 5 al valor inicial 10. |
| PE-T00-05 | **B** | a recibe el valor 9. Después b se calcula usando el nuevo a, por lo que resulta 10. |
| PE-T00-06 | **A** | La secuencia `\n` produce el salto de línea. `\\n` imprime los caracteres diagonal y n. |
| PE-T00-07 | **C** | Hay que leer en dos direcciones distintas y enviar a printf la expresión a+b. Un valor de retorno de main no se imprime en consola. |
| PE-T00-08 | **B** | Una definición de función necesita paréntesis: int main(void). El formato de printf y el retorno están bien. |
| PE-T00-09 | **A** | return termina main inmediatamente. El 7 es el estado de terminación y la segunda llamada a printf no se ejecuta. |
| PE-T00-10 | **D** | Cada diagonal invertida que se quiere mostrar se escribe como `\\` en el literal de C. |

### Clave · Tema 1 · Tipos de datos

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T01-01 | **B** | a/b usa división entera y entrega 3 antes de convertirlo a double. El casting de a permite obtener 3.5. |
| PE-T01-02 | **C** | La conversión de un valor real representable a int descarta la fracción hacia cero, sin redondear. |
| PE-T01-03 | **C** | La razón de tamaños cuenta los seis elementos cualquiera que sea sizeof(int). En C, sizeof(char) es siempre 1. |
| PE-T01-04 | **C** | scanf requiere %lf para double y su dirección. En printf, %.2f presenta dos decimales del argumento double. |
| PE-T01-05 | **A** | Al convertirse a bool, cualquier valor distinto de cero se almacena como 1. Tanto -7 como el posterior 5 se normalizan a 1. |
| PE-T01-06 | **C** | Una constante puede leerse en expresiones. Asignar, multiplicar con *= o incrementar PI intenta modificarla. |
| PE-T01-07 | **A** | La aritmética unsigned se reduce módulo UINT_MAX+1. Sumar uno al máximo produce cero de manera definida. |
| PE-T01-08 | **C** | 06d completa un ancho de seis con ceros a la izquierda. .2f presenta exactamente dos decimales. |
| PE-T01-09 | **A** | long long garantiza rango suficiente y %lld coincide con él. int no garantiza ese rango y los otros formatos o tipos no cumplen el contrato. |
| PE-T01-10 | **B** | Cada casting se aplica por separado: 5.75 pasa a 5 y 2.75 pasa a 2. La suma entera es 7. |
| PE-T01-11 | **D** | La página distingue LP64 de LLP64. sizeof acepta tipos y variables; los tamaños exactos de long no son universales. |
| PE-T01-12 | **B** | El ancho 7 permite hasta siete caracteres más el terminador. %c no agrega por sí mismo el terminador de una cadena. |
| PE-T01-13 | **A** | El carácter cambia a Z. El arreglo conserva dos posiciones: una para el carácter y otra para el nulo. |
| PE-T01-14 | **A** | El valor absoluto cubre diferencias positivas y negativas. La resta sin fabs acepta diferencias negativas de cualquier magnitud. |
| PE-T01-15 | **C** | La conversión a int descarta .75; la conversión a _Bool produce 1 porque 9.75 es distinto de cero. |
| PE-T01-16 | **B** | Los tipos de destino de scanf deben coincidir exactamente con el formato. %lf corresponde a double*, y %f a float*. |
| PE-T01-17 | **D** | sizeof devuelve size_t y el especificador correspondiente es %zu. Los demás formatos no describen ese argumento. |
| PE-T01-18 | **A** | Los códigos de los dígitos decimales son consecutivos en C. Restar el código de 0 obtiene 7; sumar 2 produce 9. |
| PE-T01-19 | **A** | La suma se promueve para calcular 257 y al asignar al entero sin signo de 8 bits se reduce módulo 256: queda 1. |
| PE-T01-20 | **B** | La conversión debe ocurrir antes de dividir y el destino debe conservar la fracción. |

### Clave · Tema 2 · Expresiones

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T02-01 | **C** | Primero 3*4=12, luego 8+12=20 y finalmente 20>=20 produce 1. |
| PE-T02-02 | **B** | La división entera trunca hacia cero: -3. El residuo satisface a=(a/b)*b+a%b: -17=(-3)*5+(-2). |
| PE-T02-03 | **C** | El primer operando de && es falso. No se evalúa ++y y el resultado lógico es 0. |
| PE-T02-04 | **B** | x>0 es verdadero y \|\| omite su segundo operando. Por ello y sigue en 2; el resultado lógico se normaliza a 1. |
| PE-T02-05 | **D** | Se necesitan dos comparaciones unidas por &&. La comparación encadenada evalúa primero 10<=x y compara su 0 o 1 con 20. |
| PE-T02-06 | **B** | 10<=30 produce 1 y luego 1<=20 produce 1. La condición de rango con && es falsa para 30. |
| PE-T02-07 | **D** | El posincremento entrega 3 y después deja x=4. El preincremento lo eleva a 5 antes de asignarlo a b. |
| PE-T02-08 | **C** | x*=2+3 equivale aquí a multiplicar por 5: x=25. La división entera entre 4 deja 6. |
| PE-T02-09 | **D** | El chequeo b!=0 debe ser el primer operando de &&. Si es falso, el cortocircuito omite la división. |
| PE-T02-10 | **A** | !(4<7) niega un verdadero y produce 0. En !a<b primero !4 es 0 y luego 0<7 es verdadero. |
| PE-T02-11 | **B** | El primer casting llega después de la división entera y solo convierte el 2. El segundo convierte un operando antes de dividir. |
| PE-T02-12 | **C** | La asignación guarda 0 en x y su expresión vale 0; después r==0 produce 1. |
| PE-T02-13 | **A** | Estar fuera significa ser menor que 5 o mayor que 12. Los extremos pertenecen al intervalo y no deben aceptarse. |
| PE-T02-14 | **B** | && tiene mayor precedencia que \|\|. La primera expresión termina como 0\|\|1; en la segunda el primer a falso hace falso todo el &&. |
| PE-T02-15 | **A** | Los operadores de ese nivel se agrupan de izquierda a derecha: 20/3=6, 6*2=12 y 20%3=2; total 14. |

### Clave · Tema 3 · Selección

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T03-01 | **A** | El else se asocia con el if sin else más cercano: y>0. Esa condición es falsa y produce B; después se imprime C. |
| PE-T03-02 | **A** | El punto y coma es el cuerpo vacío del if. El bloque posterior es independiente y asigna 8 incondicionalmente. |
| PE-T03-03 | **A** | n=3 guarda 3 y la expresión tiene valor 3, que se interpreta como verdadero. Es válido en C aunque suele advertir de un posible error. |
| PE-T03-04 | **D** | La ejecución comienza en case 2 y cae a case 3 por falta de break. El break de case 3 termina el switch. |
| PE-T03-05 | **D** | La coincidencia con case 2 lleva directamente a esa etiqueta, sin ejecutar el default situado antes. |
| PE-T03-06 | **A** | Dos etiquetas case consecutivas pueden compartir el bloque. La expresión constante a\|\|A vale 1 y no significa dos alternativas. |
| PE-T03-07 | **A** | El primer if cambia x a 7. El segundo es independiente y vuelve a evaluar el valor actualizado, por lo que lo duplica. |
| PE-T03-08 | **C** | Se revisa primero el umbral más alto y se usa >= para incluir 90 y 80. Los else mantienen una única clasificación. |
| PE-T03-09 | **D** | Un arreglo de char no es la expresión entera requerida. Para contenidos de cadenas se pueden usar condiciones con strcmp. |
| PE-T03-10 | **B** | Una constante de enumeración es una expresión constante entera. En C11 una variable const int no cumple por sí sola ese requisito. |
| PE-T03-11 | **B** | La expresión controladora de switch debe ser de tipo entero. No hay una conversión automática que haga válido ese switch. |
| PE-T03-12 | **D** | Los dos conjuntos exteriores se unen con OR. Las comparaciones estrictas mantienen 18 y 65 como edades aceptadas. |
| PE-T03-13 | **B** | La inactividad se evalúa primero, de modo que un administrador inactivo también queda bloqueado. |
| PE-T03-14 | **B** | Se entra en case 1 y, al no haber break, se ejecutan las tres operaciones: 2+3=5, 5*2=10 y 10-1=9. |
| PE-T03-15 | **C** | La división debe quedar dentro de la rama que confirmó b!=0. Comprobar primero a/b ya podría dividir entre cero. |
| PE-T03-16 | **A** | beca vale cero y se entra al else. Allí 92>=90 es verdadero, por lo que se imprime Merito. |
| PE-T03-17 | **B** | Sin coincidencia se empieza en default. Después se sigue por las instrucciones de case 2 y case 3 hasta encontrar break. |
| PE-T03-18 | **C** | x>0 es falso. En la rama else, y<0 también es falso y se resta 2 al valor 5. |
| PE-T03-19 | **C** | 2*3 es una expresión constante entera válida y equivale a case 6. El break evita continuar. |
| PE-T03-20 | **D** | Primero se valida el dominio, después se clasifica. Así una nota 120 no se aprueba y los límites 0,60,100 se tratan correctamente. |

### Clave · Tema 4 · Iteración

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T04-01 | **B** | Se acumulan 1,3,5 y luego i pasa a 7, donde falla la condición. La suma es 9. |
| PE-T04-02 | **D** | while no entra porque 5<3 es falso. do-while incrementa una vez antes de revisar su condición. |
| PE-T04-03 | **A** | Se suman 1,2,3,5,6. continue omite únicamente la suma correspondiente al 4. |
| PE-T04-04 | **D** | El ciclo interior se ejecuta 1,2,3 y 4 veces, respectivamente. La suma triangular es 10. |
| PE-T04-05 | **B** | Cada ciclo interior incrementa para j=0 y j=1 y termina al llegar a 2. El ciclo exterior continúa sus tres vueltas. |
| PE-T04-06 | **C** | El acumulador debe iniciar en cero y los índices incluir ambos extremos 1 y n. |
| PE-T04-07 | **B** | i=4 es el primer valor cuyo cuadrado supera 10. Se activa la bandera y aún se ejecuta i++, dejando 5. |
| PE-T04-08 | **D** | El cuerpo usa 7,4,1; su suma es 12. La última actualización deja i=-2 y entonces termina. |
| PE-T04-09 | **B** | En un while, continue regresa a evaluar la condición y no ejecuta una actualización automática. i permanece en 2. |
| PE-T04-10 | **C** | Se combinan el límite i<3 y la bandera !ok mediante &&. Las otras formas permiten cuatro llamadas, prolongan el ciclo o no entran. |
| PE-T04-11 | **B** | El punto y coma es un cuerpo vacío. La actualización continúa hasta que i=4; printf se ejecuta una sola vez después. |
| PE-T04-12 | **A** | Se excluye la diagonal. Cumplen la suma los pares (1,3),(2,3),(3,1),(3,2): cuatro en total. |
| PE-T04-13 | **D** | Los residuos recuperan 7,0 y 5; la división entera reduce n hasta cero. La suma es 12. |
| PE-T04-14 | **A** | do-while cuenta una vez incluso para n=0. Dividir por 10 elimina progresivamente el último dígito. |
| PE-T04-15 | **C** | El cuerpo muestra el valor antes de duplicarlo. Al llegar a 16, la condición x<10 ya es falsa. |
| PE-T04-16 | **B** | El cuerpo se inicia con i=0,2,4. Cada una de esas vueltas incrementa i internamente y otra vez en la actualización del for. |
| PE-T04-17 | **C** | Se inicia en 5, se incluye el límite 1 y se decrementa de uno en uno. |
| PE-T04-18 | **C** | En un for, continue conduce a la actualización i++. Solo se suman 3 y 4; al finalizar i vale 5. |
| PE-T04-19 | **A** | Se procesan únicamente 4 y 7. El 0 termina el ciclo antes de sumarse y evita leer el 9. |
| PE-T04-20 | **C** | El contador interior se reinicia en cada fila y ambos límites excluyen el tamaño. Así se ejecuta 3*4=12 veces. |

### Clave · Tema 5 · Funciones

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T05-01 | **B** | suma(3,4) devuelve 7, que se convierte en el argumento de doble. El resultado final es 14. |
| PE-T05-02 | **C** | El parámetro x es una copia del argumento. Modificar esa copia no cambia la variable local de main. |
| PE-T05-03 | **B** | Ambas expresiones calculan 3.5, pero entero convierte el resultado a int al devolverlo. real conserva la fracción. |
| PE-T05-04 | **D** | El divisor real evita división entera y el retorno double conserva la fracción. Imprimir dentro de una función void no devuelve un promedio. |
| PE-T05-05 | **A** | La función trabaja con una copia que termina en 13 y la devuelve. La variable x del llamador sigue valiendo 10. |
| PE-T05-06 | **D** | Hay que conservar el primer valor antes de sobrescribirlo y escribir mediante *a y *b. Intercambiar las copias locales de los punteros no cambia los enteros. |
| PE-T05-07 | **A** | p recibe la dirección de n. La suma mediante *p actualiza directamente el objeto original a 7. |
| PE-T05-08 | **A** | Las instrucciones están secuenciadas: primero x pasa de 3 a 5 y después el mismo objeto se multiplica por 2. |
| PE-T05-09 | **A** | La función recibe int* y devuelve void: se envía &n y no se intenta asignar un resultado. |
| PE-T05-10 | **A** | return sin valor termina solamente mostrar. El flujo vuelve a main, que todavía imprime Fin. |
| PE-T05-11 | **C** | Los nombres de parámetros pueden cambiar; deben mantenerse el tipo de retorno, la cantidad y los tipos de los parámetros. |
| PE-T05-12 | **B** | 23/4 es 5 con división entera y 23%4 es 3. Las escrituras a través de los punteros actualizan c y r. |
| PE-T05-13 | **A** | El retorno debe ser un valor lógico utilizable por el llamador y las comparaciones deben incluir los extremos. |
| PE-T05-14 | **A** | Devolver un resultado no asigna automáticamente la variable original. La primera llamada se descarta y la segunda devuelve 6. |
| PE-T05-15 | **C** | p=q modifica la copia local de p. Su nueva dirección es la de b; incrementar *p modifica b y deja a intacta. |
| PE-T05-16 | **D** | Una función void se puede llamar como una instrucción. No proporciona un valor para asignarlo, imprimirlo o compararlo. |
| PE-T05-17 | **C** | La primera llamada sale antes de escribir. La segunda multiplica el valor 5 por 2 y lo deja en 10. |
| PE-T05-18 | **D** | La validación debe ejecutarse antes de las operaciones y salir sin escribir ante b=0. Después se escriben ambos resultados y se informa éxito. |
| PE-T05-19 | **C** | mayor devuelve 9, y el mismo valor se envía a cuadrado, que devuelve 81. |
| PE-T05-20 | **C** | C no ofrece esta sobrecarga. El parámetro anunciado como int debe coincidir con el tipo de la definición. |

### Clave · Tema 6 · Arreglos

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T06-01 | **D** | La inicialización parcial de un arreglo inicializa en cero los elementos restantes. No es lo mismo que declararlo sin inicializador. |
| PE-T06-02 | **D** | Cada suma utiliza el elemento anterior ya modificado. Las acumulaciones sucesivas dan 3,6 y 10. |
| PE-T06-03 | **D** | El parámetro de arreglo permite acceder al arreglo original. n se recibe por valor y su asignación local no cambia el n del llamador. |
| PE-T06-04 | **D** | sizeof(v) mide el puntero del parámetro, no los 12 enteros originales. La cantidad se debe pasar por separado. |
| PE-T06-05 | **D** | strcpy establece FIAD y strcat agrega -PE al final. strlen cuenta siete caracteres, sin incluir el nulo. |
| PE-T06-06 | **A** | El arreglo tiene cinco char. Las funciones de cadena se detienen en el primer nulo, por lo que solo ven AB. |
| PE-T06-07 | **A** | fgets puede almacenar a lo sumo tres caracteres y el nulo. Deja D,E y el salto en la entrada; getchar consume D. |
| PE-T06-08 | **D** | scanf consume el entero y deja el salto. fgets lee ese salto pendiente y, al eliminarlo, la cadena queda vacía. |
| PE-T06-09 | **B** | Las primeras cadenas tienen el mismo contenido. ANA precede a ANB al comparar los últimos caracteres; ambas condiciones son verdaderas. |
| PE-T06-10 | **B** | El recorrido debe detenerse antes de contar el nulo y limitarse a leer. La última alternativa altera la cadena aunque pueda contar caracteres. |
| PE-T06-11 | **A** | Se leen m[0][0]=1, m[1][1]=5 y m[2][2]=9. La suma es 15. |
| PE-T06-12 | **C** | Al transponer se intercambian fila y columna. Los límites del origen son dos filas y tres columnas, ambos exclusivos. |
| PE-T06-13 | **C** | Se copia el contenido de la fila cero a la fila uno. La fila dos sigue conteniendo Jueves. |
| PE-T06-14 | **C** | Hola! ocupa cinco caracteres y un nulo: seis posiciones. Las otras operaciones necesitan siete o más. |
| PE-T06-15 | **C** | Los índices válidos son 0,1,2 y 3. C no garantiza un diagnóstico de compilación ni un valor para v[4]. |
| PE-T06-16 | **C** | Solo se intercambia media colección y se conserva un temporal. Recorrer todo intercambia cada pareja dos veces. |
| PE-T06-17 | **C** | && evalúa primero su operando izquierdo. La comprobación i<n debe preceder al acceso para que el cortocircuito lo proteja. |
| PE-T06-18 | **D** | v[0] vale 2, de modo que el destino es v[2]. Ninguna de las otras posiciones se modifica. |
| PE-T06-19 | **D** | El parámetro comienza en la posición uno del arreglo original. Sus dos elementos son v[1] y v[2]. |
| PE-T06-20 | **B** | strcspn devuelve la longitud 3 al no hallar el salto. Se vuelve a escribir el nulo en su misma posición y no se pierde la última letra. |

### Clave · Tema 7 · Structs: estructuras, union y enum

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T07-01 | **D** | La asignación de estructuras copia también el arreglo miembro. Cambiar los campos de b no cambia los de a. |
| PE-T07-02 | **C** | El parámetro es una copia completa. La asignación dentro de actualizar no modifica el objeto a de main. |
| PE-T07-03 | **D** | a->edad accede al campo del objeto señalado, por lo que el incremento queda visible en el llamador. |
| PE-T07-04 | **C** | Se requiere la ruta alumno.nombre.appat y una copia de cadena. alumno es una variable normal, no un puntero. |
| PE-T07-05 | **B** | La escritura en decimal reutiliza la memoria de la unión. Leer decimal inmediatamente después recupera el valor 2.5f. |
| PE-T07-06 | **A** | Después de ACTIVO=4, PAUSA toma el siguiente valor: 5. FINAL tiene una asignación explícita a 9. |
| PE-T07-07 | **D** | Los campos de un struct tienen almacenamiento propio y pueden existir bytes de relleno por alineación. Se consulta con sizeof. |
| PE-T07-08 | **D** | Se revisan todas las posiciones desde cero y se compara el estado sin cambiarlo. |
| PE-T07-09 | **D** | La asignación individual a un arreglo char no existe en C. Eso no impide inicializarlo al declarar la estructura o copiarlo con funciones de cadenas. |
| PE-T07-10 | **D** | La copia incluye los campos de la estructura Fecha. La modificación del día de b no se propaga al día de a. |
| PE-T07-11 | **A** | Los operandos struct no admiten el operador == de C. La igualdad lógica debe definirse comparando campos; no conviene inferirla de bytes de relleno. |
| PE-T07-12 | **A** | El índice 2 identifica el tercer elemento y -> permite acceder al campo de la estructura apuntada. |
| PE-T07-13 | **B** | Primero el único registro pasa a 12. El segundo parámetro señala el mismo objeto y lo multiplica por dos. |
| PE-T07-14 | **C** | La estructura devuelta debe asignarse de nuevo al objeto original. La llamada sola descarta el resultado. |
| PE-T07-15 | **D** | El indicador selecciona qué representación contiene un valor válido. No se deben tratar ambos miembros como si conservaran valores independientes. |

### Clave · Tema 8 · Typedef: alias de tipos

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T08-01 | **C** | Los operandos siguen siendo int porque Tkey es un alias. La división entrega 2 antes de convertirse al tipo double del resultado. |
| PE-T08-02 | **B** | sTalum es el nombre del alias; la etiqueta real es Alumno. struct sTalum nombraría otra etiqueta que no se ha definido. |
| PE-T08-03 | **D** | Tvector conserva el tipo arreglo de tres enteros. En ese ámbito sizeof(datos)/sizeof(datos[0]) da 3. |
| PE-T08-04 | **D** | Tkey e int son el mismo tipo para compatibilidad. Por ello int* puede señalar clave y modificarla. |
| PE-T08-05 | **A** | Cada typedef nombra un tipo existente con un alias nuevo. Los otros fragmentos no forman las declaraciones de tipo requeridas. |
| PE-T08-06 | **D** | La primera inclusión define la macro dentro de la condición #ifndef. Las siguientes inclusiones omiten la definición protegida. |
| PE-T08-07 | **B** | El rango de long long es suficiente y %lld corresponde al tipo base. Cambiar el alias también exige revisar interfaces y formatos. |
| PE-T08-08 | **B** | El alias completo representa int*. Tanto a como b son punteros; la asignación mediante *a modifica únicamente x. |
| PE-T08-09 | **C** | uint32_t expresa el ancho exacto y la ausencia de signo. unsigned int y unsigned long no garantizan 32 bits en todas las implementaciones. |
| PE-T08-10 | **D** | Aunque contradiga la convención de clase, el código declara sTnom como alias de int. Los prefijos no cambian las reglas del lenguaje. |

### Clave · Tema 9 · Recursión

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T09-01 | **A** | Las llamadas llegan a factorial(0)=1 y al regresar multiplican 1*2*3*4*5: 120. |
| PE-T09-02 | **B** | La primera impresión ocurre al descender: 3,2,1. La segunda ocurre al regresar desde el caso base: 1,2,3. |
| PE-T09-03 | **C** | Los últimos dígitos son 8,0 y 5. La reducción n/10 conduce a cero y la suma resulta 13. |
| PE-T09-04 | **B** | Cada marco conserva su local. Como printf está después de la llamada, se imprimen los locales de n=1,2,3 en ese orden. |
| PE-T09-05 | **D** | El conteo cumple C(n)=1+C(n-1)+C(n-2), con C(0)=C(1)=1. Así C(4)=9 y fib(4)=3. |
| PE-T09-06 | **B** | El caso n=0 debe devolver 1 y la reducción debe decrementar n. Detenerse solo en 1 no cubre la entrada cero. |
| PE-T09-07 | **B** | Restar dos conserva la paridad. Desde un impar no se llega a cero; antes de producir un resultado válido se agotarán recursos o se llegará a un desbordamiento. |
| PE-T09-08 | **B** | Cada llamada no base cuenta una división y reduce n. Para n=1 se necesita una división adicional para llegar a cero. |
| PE-T09-09 | **C** | La reducción usa n=5,2,1,0. Las potencias parciales son 1,3,9 y finalmente 3*9*9=243. |
| PE-T09-10 | **A** | Las entradas reciben 20,10,5,2,1 y 0. El marco del caso base también cuenta, para un total de seis. |

### Clave · Tema 10 · Multiarchivo

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T10-01 | **C** | Se deben incluir los dos .c en el enlace. -c genera objetos sin enlazar y la cabecera no sustituye la definición del otro módulo. |
| PE-T10-02 | **D** | Las guardas evitan repetición dentro de cada unidad de traducción, no entre main.c y apoyo.c. Las dos definiciones externas de doble entran en conflicto. |
| PE-T10-03 | **D** | sprintf sustituye los formatos dentro del arreglo. Las comillas escapadas forman parte de la cadena y agrupan el nombre con espacios. |
| PE-T10-04 | **B** | El retorno de system está relacionado con la ejecución del comando. argc pertenece a la interfaz del programa que recibe argumentos y es otro concepto. |
| PE-T10-05 | **C** | La interfaz compartida debe conservar el retorno double y el parámetro int. Una declaración incompatible en otro módulo no se arregla durante el enlace. |

### Clave · Tema 11 · Biblioteca de funciones

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T11-01 | **B** | printf se declara en stdio.h y strlen en string.h. En C11 no se debe llamar a estas funciones sin su declaración. |
| PE-T11-02 | **A** | atoi convierte el prefijo numérico 12 y no valida que todo el texto sea un entero. Como 12 está dentro del rango, la función lo acepta. |
| PE-T11-03 | **A** | La adaptación borra siempre el último carácter, aunque no sea un salto de línea. Con Ana elimina la a; debe comprobar el carácter antes de borrarlo. |
| PE-T11-04 | **A** | La función verifica primero el retorno de fgets y usa strcspn para ubicar el salto o el nulo existente. Supone n>=2 y espacio suficiente en s. |
| PE-T11-05 | **C** | sqrt(81)=9 y pow(2,3)=8; la suma es 17. En GCC de algunos sistemas la biblioteca matemática se enlaza con -lm. |
| PE-T11-06 | **B** | La comparación !=0 normaliza el resultado sin asumir que isdigit devuelve exactamente 1. El casting es la forma segura de clasificar un char. |
| PE-T11-07 | **A** | Los dos primeros valores quedan fuera de 1..20 y provocan reintentos. El tercer valor se acepta después de tres lecturas. |
| PE-T11-08 | **B** | getchar está en stdio.h y lee desde la entrada estándar. getch/kbhit no son ISO C; system ejecuta un comando y no cumple esa interfaz. |
| PE-T11-09 | **B** | La expansión textual es a+1*2. La multiplicación ocurre antes de la suma y da 3+2=5; los paréntesis de la llamada no se conservan automáticamente. |
| PE-T11-10 | **B** | Se requieren paréntesis alrededor de cada argumento y del resultado completo. Sin el envoltorio exterior, 100/CUADRADO(2+3) se agrupa incorrectamente. |

### Clave · Tema 12 · Archivos de texto y binarios

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T12-01 | **A** | fprintf escribe las representaciones textuales. rewind regresa al inicio y fscanf convierte ambos números antes de sumarlos. |
| PE-T12-02 | **B** | El retorno int de fgetc permite distinguir los valores de byte del indicador EOF. Cero puede ser un byte de datos y no es el fin de archivo. |
| PE-T12-03 | **C** | fread devuelve cantidad de elementos completos del tamaño solicitado, no bytes. Se leen tres enteros y el segundo es 20. |
| PE-T12-04 | **D** | El desplazamiento de un entero desde el inicio apunta al segundo registro. La escritura lo sustituye sin desplazar los otros. |
| PE-T12-05 | **A** | La primera lectura consume el 5. El desplazamiento desde la posición actual salta el 10 y deja la siguiente lectura sobre el 15. |
| PE-T12-06 | **A** | El tamaño total es tres veces sizeof(Registro). Dividir por ese mismo tamaño obtiene 3 sin asumir los bytes de los campos o del relleno. |
| PE-T12-07 | **C** | El indicador de fin se activa después de intentar leer más allá del final. Solo deben procesarse registros cuando fread devuelve 1. |
| PE-T12-08 | **D** | %s lee una palabra y se detiene ante espacio en blanco. La segunda conversión retoma la siguiente palabra. |
| PE-T12-09 | **B** | fgets conserva el salto si cabe en el destino. Inicialmente hay cuatro caracteres; sustituir el salto por nulo deja tres. |
| PE-T12-10 | **C** | w+b crea o trunca el archivo antes de usarlo para lectura y escritura. No queda ningún registro y y conserva su inicialización. |
| PE-T12-11 | **A** | En modo append las escrituras se fuerzan al final aun después de fseek. La Z se agrega a los tres bytes existentes. |
| PE-T12-12 | **C** | r+b abre un binario existente para actualización sin truncarlo ni forzar todas las escrituras al final. |
| PE-T12-13 | **D** | El elemento de índice con subíndice 1 corresponde a clave 20 y posición física 2. Se busca esa posición, no el subíndice del índice. |
| PE-T12-14 | **B** | Antes de sobrescribir debe regresarse un registro desde la posición actual. Sin el retroceso se sobrescribe el siguiente o se agrega otro. |
| PE-T12-15 | **A** | Se copian las claves 10 y 30. El destino contiene dos registros y su último registro es el de clave 30. |
| PE-T12-16 | **D** | Al pedir un registro por llamada, solo el retorno 1 confirma una lectura completa. El tamaño en bytes no es el retorno esperado. |
| PE-T12-17 | **D** | rewind establece la posición al inicio y permite cambiar de escritura a lectura. fflush no regresa el cursor; cerrar vuelve inválido el flujo. |
| PE-T12-18 | **B** | Tras fclose el puntero ya no designa un flujo abierto válido. No se debe asumir ni un byte ni EOF como resultado de ese uso. |
| PE-T12-19 | **A** | Solo se completan dos elementos de dos bytes. El cuarto byte pertenece a esos elementos completos y vale 40; el elemento parcial no se cuenta. |
| PE-T12-20 | **D** | La posición 2 ahora coincide con el final del archivo. No se lee ningún registro y r mantiene su inicialización; el índice debe reconstruirse con posición 1. |

### Clave · Tema 13 · Métodos de ordenación y búsqueda

| Pregunta | Respuesta | Explicación |
|---|:---:|---|
| PE-T13-01 | **A** | El 4 se intercambia sucesivamente con 1,3 y 2 hasta quedar al final. Una pasada no ordena necesariamente el resto. |
| PE-T13-02 | **D** | El mínimo 1 está en la posición 3. Se intercambia únicamente con el primer 5 y el resto no se ordena en esta pasada. |
| PE-T13-03 | **A** | El 5 se desplaza a la derecha y el 3 se coloca después del 2. El último 8 no participa en esta inserción. |
| PE-T13-04 | **A** | Con salto 2 se ordenan por separado las posiciones pares 8,6,4 y las impares 5,3,1. Falta la pasada de salto 1 para ordenar todo. |
| PE-T13-05 | **D** | Se trasladan primero 2 y 1 a la zona <=3. Después el pivote se coloca en el índice 2; las zonas a sus lados aún no tienen que estar ordenadas. |
| PE-T13-06 | **B** | <= elige primero el registro de la mitad izquierda en igualdad y mantiene el orden ascendente. < daría prioridad al de la derecha y perdería estabilidad. |
| PE-T13-07 | **A** | El 7 se fija al final. El 2 que subió a la raíz se intercambia con su hijo mayor 6, dejando el heap 6,4,2,1. |
| PE-T13-08 | **C** | La primera posición ya contiene 8 y se devuelve inmediatamente. Los índices se cuentan desde cero. |
| PE-T13-09 | **B** | El recorrido termina sin coincidencias y alcanza return -1. Retornar n no es la convención usada por esta función. |
| PE-T13-10 | **D** | Los índices centrales visitados son 4,6,7 y 8. La cuarta consulta encuentra 18 en el índice 8. |
| PE-T13-11 | **C** | El extremo debe excluir el elemento central ya descartado. Con ini=m se repite el mismo estado sin progreso. |
| PE-T13-12 | **A** | Visita 2,6 y 4 y descarta indebidamente la zona donde está 8. El algoritmo no funciona correctamente sin su precondición de orden ascendente. |
| PE-T13-13 | **D** | Para orden descendente, el vecino izquierdo no debe ser menor que el derecho. El temporal evita perder uno de los valores. |
| PE-T13-14 | **C** | Se compara el campo matrícula, pero se intercambia el registro completo con un temporal. Mover solo las claves separaría los nombres de sus dueños. |
| PE-T13-15 | **D** | Después de guardar una coincidencia debe seguirse buscando a la izquierda. El valor inicial -1 conserva la señal de ausencia. |
| PE-T13-16 | **B** | Las cuatro pasadas comparan 4,3,2 y 1 parejas. El total es 10, según n*(n-1)/2. |
| PE-T13-17 | **C** | La primera pasada realiza cuatro comparaciones y ningún intercambio. cambio queda en cero y evita todas las pasadas restantes. |
| PE-T13-18 | **D** | Se avanza solo el índice del elemento elegido y después se copian los sobrantes de ambas fuentes. Avanzar ambos índices a la vez pierde datos. |
| PE-T13-19 | **B** | Los ciclos anidados ejecutan 8*8=64 incrementos. La reducción visita 8,4,2 antes de llegar a 1: tres incrementos. |
| PE-T13-20 | **C** | Se excluye el pivote definitivo de las dos llamadas. Incluirlo puede repetir el intervalo cuando cae en un extremo; omitir un lado deja elementos sin ordenar. |

## Notas para aplicar el banco

- El Tema 5 contiene **20 preguntas**, de acuerdo con el último desglose solicitado.
- La dificultad se asignó según el razonamiento requerido: seguimiento directo y aplicación combinada en nivel medio; límites, efectos acumulados, alias, recursión, índices y contratos de funciones en nivel difícil.
- Los fragmentos de salida se comprobaron mediante compilación y ejecución en C11. Las alternativas y los diagnósticos también se revisaron para sostener una sola respuesta correcta.
- Las preguntas con errores intencionales sirven para analizarlos; el código defectuoso forma parte del ejercicio.

Fin del banco de preguntas.
