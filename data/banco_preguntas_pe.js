/* Banco canónico: 215 preguntas. Conserva los IDs de opciones al editar. */
(function(root,factory){
  "use strict";
  if(typeof module === "object" && module.exports) module.exports=factory();
  else root.PE_QUESTION_BANK=factory();
})(typeof globalThis !== "undefined" ? globalThis : this,function(){
  "use strict";
  return {
  "version": "1.0.0",
  "title": "Banco de preguntas · Programación Estructurada",
  "language": "C11",
  "sourceFile": "BANCO_PREGUNTAS_PROGRAMACION_ESTRUCTURADA_215.md",
  "sourceSha256": "3807da7698fdda5ca7da176383166f6deb04df284cf28341b79524e4ac8db91b",
  "topics": [
    {
      "id": 0,
      "title": "Introducción",
      "count": 10
    },
    {
      "id": 1,
      "title": "Tipos de datos",
      "count": 20
    },
    {
      "id": 2,
      "title": "Expresiones",
      "count": 15
    },
    {
      "id": 3,
      "title": "Selección",
      "count": 20
    },
    {
      "id": 4,
      "title": "Iteración",
      "count": 20
    },
    {
      "id": 5,
      "title": "Funciones",
      "count": 20
    },
    {
      "id": 6,
      "title": "Arreglos",
      "count": 20
    },
    {
      "id": 7,
      "title": "Structs: estructuras, union y enum",
      "count": 15
    },
    {
      "id": 8,
      "title": "Typedef: alias de tipos",
      "count": 10
    },
    {
      "id": 9,
      "title": "Recursión",
      "count": 10
    },
    {
      "id": 10,
      "title": "Multiarchivo",
      "count": 5
    },
    {
      "id": 11,
      "title": "Biblioteca de funciones",
      "count": 10
    },
    {
      "id": 12,
      "title": "Archivos de texto y binarios",
      "count": 20
    },
    {
      "id": 13,
      "title": "Métodos de ordenación y búsqueda",
      "count": 20
    }
  ],
  "questions": [
    {
      "id": "PE-T00-01",
      "topic": 0,
      "difficulty": "media",
      "prompt": "¿Cuál es la salida exacta de este fragmento?",
      "code": "printf(\"FIAD\\\\PE\\n\");\nprintf(\"\\\"C\\\":%d\", 2 + 3);",
      "options": [
        {
          "id": "A",
          "text": "FIAD\\PE\n\"C\":5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "FIAD\\PE\nC:5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "FIAD\\PE \"C\":5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "FIAD/PE\n\"C\":5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "En C, `\\\\` representa una diagonal invertida, `\\n` cambia de línea y `\\\"` imprime una comilla. La suma produce 5."
    },
    {
      "id": "PE-T00-02",
      "topic": 0,
      "difficulty": "dificil",
      "prompt": "La entrada es `12 x`. ¿Qué imprime el programa? Considera que `scanf` devuelve la cantidad de conversiones realizadas.",
      "code": "int a = 4, b = 9, leidos;\nleidos = scanf(\"%d %d\", &a, &b);\nprintf(\"%d %d %d\", leidos, a, b);",
      "options": [
        {
          "id": "A",
          "text": "2 12 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 12 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 12 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 4 9",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La primera conversión guarda 12; la segunda falla ante x y conserva b=9. Solo se cuenta una conversión."
    },
    {
      "id": "PE-T00-03",
      "topic": 0,
      "difficulty": "media",
      "prompt": "Se declararon `int edad = 0; double altura = 0;`. ¿Qué bloque lee ambos valores correctamente para la entrada `20 1.75`?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "printf(\"%d %lf\", edad, altura);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "scanf(\"%d %f\", &edad, &altura);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "scanf(\"%d %lf\", &edad, &altura);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "scanf(\"%d %lf\", edad, altura);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "scanf necesita las direcciones de ambas variables; para un double corresponde %lf. printf solo muestra datos."
    },
    {
      "id": "PE-T00-04",
      "topic": 0,
      "difficulty": "media",
      "prompt": "Sigue la secuencia y distingue los comentarios de las instrucciones. ¿Qué imprime?",
      "code": "int total = 10;\n// total = 100;\ntotal = total + 5;\n/* total = total * 2; */\nprintf(\"%d\", total);",
      "options": [
        {
          "id": "A",
          "text": "30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "210",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Las dos asignaciones comentadas no se ejecutan. Solo se suma 5 al valor inicial 10."
    },
    {
      "id": "PE-T00-05",
      "topic": 0,
      "difficulty": "dificil",
      "prompt": "¿Qué valores quedan después de ejecutar las instrucciones en este orden?",
      "code": "int a = 4, b = 9;\na = b;\nb = a + 1;\nprintf(\"%d %d\", a, b);",
      "options": [
        {
          "id": "A",
          "text": "9 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "10 9",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "a recibe el valor 9. Después b se calcula usando el nuevo a, por lo que resulta 10."
    },
    {
      "id": "PE-T00-06",
      "topic": 0,
      "difficulty": "media",
      "prompt": "¿Qué bloque imprime exactamente dos líneas: `A=3` y, debajo, `B=4`?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "printf(\"A=%d\\nB=%d\", 3, 4);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "printf(\"A=%d\\tB=%d\", 3, 4);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "printf(\"A=%d\\\\nB=%d\", 3, 4);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "printf(\"A=%d B=%d\", 3, 4);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "La secuencia `\\n` produce el salto de línea. `\\\\n` imprime los caracteres diagonal y n."
    },
    {
      "id": "PE-T00-07",
      "topic": 0,
      "difficulty": "dificil",
      "prompt": "Para la entrada `7 9`, ¿qué programa lee dos enteros, conserva ambos y muestra su suma?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int main(void)\n{\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    return a + b;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int main(void)\n{\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    a = b;\n    printf(\"%d\", a + b);\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int main(void)\n{\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\", a + b);\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int main(void)\n{\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"%d\", a * b);\n    return 0;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Hay que leer en dos direcciones distintas y enviar a printf la expresión a+b. Un valor de retorno de main no se imprime en consola."
    },
    {
      "id": "PE-T00-08",
      "topic": 0,
      "difficulty": "media",
      "prompt": "¿Qué diagnóstico corresponde al programa tal como está escrito?",
      "code": "#include <stdio.h>\nint main\n{\n    printf(\"Hola\");\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "El programa es válido y muestra Hola.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "La definición de main carece de la lista de parámetros entre paréntesis.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "El texto Hola necesita comillas simples.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "return 0 debe colocarse fuera de las llaves.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "Una definición de función necesita paréntesis: int main(void). El formato de printf y el retorno están bien."
    },
    {
      "id": "PE-T00-09",
      "topic": 0,
      "difficulty": "dificil",
      "prompt": "¿Qué texto alcanza a mostrarse en la consola? El valor de salida del proceso no forma parte del texto.",
      "code": "printf(\"Inicio\");\nreturn 7;\nprintf(\"Fin\");",
      "options": [
        {
          "id": "A",
          "text": "Inicio",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "Inicio7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "InicioFin",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "return termina main inmediatamente. El 7 es el estado de terminación y la segunda llamada a printf no se ejecuta."
    },
    {
      "id": "PE-T00-10",
      "topic": 0,
      "difficulty": "media",
      "prompt": "¿Qué instrucción imprime literalmente `Ruta: C:\\PE`?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "printf(\"Ruta: C:\\tPE\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "printf(\"Ruta: C:\\nPE\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "printf(\"Ruta: C:/PE\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "printf(\"Ruta: C:\\\\PE\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Cada diagonal invertida que se quiere mostrar se escribe como `\\\\` en el literal de C."
    },
    {
      "id": "PE-T01-01",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué se imprime? Observa el tipo de cada operando antes de la asignación.",
      "code": "int a = 7, b = 2;\ndouble x = a / b;\ndouble y = (double)a / b;\nprintf(\"%.1f %.1f\", x, y);",
      "options": [
        {
          "id": "A",
          "text": "3.0 3.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3.0 3.5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3.5 3.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3.5 3.5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "a/b usa división entera y entrega 3 antes de convertirlo a double. El casting de a permite obtener 3.5."
    },
    {
      "id": "PE-T01-02",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué valores quedan en los enteros después de las conversiones?",
      "code": "double a = 8.9, b = -8.9;\nint x = a, y = b;\nprintf(\"%d %d\", x, y);",
      "options": [
        {
          "id": "A",
          "text": "8 -9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 -8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "8 -8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "9 -9",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La conversión de un valor real representable a int descarta la fracción hacia cero, sin redondear."
    },
    {
      "id": "PE-T01-03",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el resultado sin suponer que int ocupa cuatro bytes?",
      "code": "int valores[6];\nprintf(\"%zu %zu\", sizeof(valores) / sizeof(valores[0]), sizeof(char));",
      "options": [
        {
          "id": "A",
          "text": "24 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "6 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "24 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La razón de tamaños cuenta los seis elementos cualquiera que sea sizeof(int). En C, sizeof(char) es siempre 1."
    },
    {
      "id": "PE-T01-04",
      "topic": 1,
      "difficulty": "media",
      "prompt": "Con `double precio = 0;`, ¿qué pareja de instrucciones lee `19.5` y muestra `19.50`?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "scanf(\"%d\", &precio);\nprintf(\"%d\", precio);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "scanf(\"%lf\", precio);\nprintf(\"%.2f\", precio);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "scanf(\"%lf\", &precio);\nprintf(\"%.2f\", precio);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "scanf(\"%f\", &precio);\nprintf(\"%.2f\", precio);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "scanf requiere %lf para double y su dirección. En printf, %.2f presenta dos decimales del argumento double."
    },
    {
      "id": "PE-T01-05",
      "topic": 1,
      "difficulty": "media",
      "prompt": "Se incluyó `<stdbool.h>`. ¿Qué imprime la normalización booleana?",
      "code": "bool a = -7, b = 0;\na = a + 4;\nprintf(\"%d %d\", a, b);",
      "options": [
        {
          "id": "A",
          "text": "1 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "-7 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Al convertirse a bool, cualquier valor distinto de cero se almacena como 1. Tanto -7 como el posterior 5 se normalizan a 1."
    },
    {
      "id": "PE-T01-06",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "La variable se declara `const double PI = 3.14159;`. ¿Qué bloque la utiliza sin intentar modificarla y calcula el área para radio 2?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "double radio = 2;\n++PI;\nprintf(\"%.2f\", PI *radio);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "double radio = 2;\nPI = 3.14;\nprintf(\"%.2f\", PI * radio * radio);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "double radio = 2;\ndouble area = PI * radio * radio;\nprintf(\"%.2f\", area);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "double radio = 2;\nPI *= radio;\nprintf(\"%.2f\", PI *radio);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Una constante puede leerse en expresiones. Asignar, multiplicar con *= o incrementar PI intenta modificarla."
    },
    {
      "id": "PE-T01-07",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "Se incluyó `<limits.h>`. ¿Qué imprime este cálculo de un entero sin signo?",
      "code": "unsigned int n = UINT_MAX;\nn = n + 1u;\nprintf(\"%u\", n);",
      "options": [
        {
          "id": "A",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "El resultado necesariamente provoca un error de ejecución.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "UINT_MAX",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "La aritmética unsigned se reduce módulo UINT_MAX+1. Sumar uno al máximo produce cero de manera definida."
    },
    {
      "id": "PE-T01-08",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Cuál es el contenido que aparece entre los delimitadores `|`?",
      "code": "printf(\"|%06d|%.2f|\", 42, 3.5);",
      "options": [
        {
          "id": "A",
          "text": "|    42|3.50|",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "|42|3.5|",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "|000042|3.50|",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "|420000|3.50|",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "06d completa un ancho de seis con ceros a la izquierda. .2f presenta exactamente dos decimales."
    },
    {
      "id": "PE-T01-09",
      "topic": 1,
      "difficulty": "media",
      "prompt": "Se necesita almacenar 8000000000 y mostrarlo sin pérdida con los rangos mínimos garantizados por C11, sin suponer int de 64 bits. ¿Qué bloque cumple el propósito?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "long long n = 8000000000LL;\nprintf(\"%lld\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "long long n = 8000000000LL;\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "unsigned short n = 8000000000LL;\nprintf(\"%hu\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int n = 8000000000LL;\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "long long garantiza rango suficiente y %lld coincide con él. int no garantiza ese rango y los otros formatos o tipos no cumplen el contrato."
    },
    {
      "id": "PE-T01-10",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "¿Qué sucede con el valor al convertirlo explícitamente antes de sumarlo?",
      "code": "double base = 5.75;\nint total = (int)base + (int)2.75;\nprintf(\"%d\", total);",
      "options": [
        {
          "id": "A",
          "text": "7.75",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "9",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Cada casting se aplica por separado: 5.75 pasa a 5 y 2.75 pasa a 2. La suma entera es 7."
    },
    {
      "id": "PE-T01-11",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "¿Qué afirmación es válida sobre el programa sin asumir una arquitectura específica?",
      "code": "printf(\"%zu %zu\", sizeof(long), sizeof(long long));",
      "options": [
        {
          "id": "A",
          "text": "Siempre imprime 4 8, incluso en LP64.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "No compila porque sizeof solo acepta variables.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Siempre imprime 8 8 porque el sistema operativo es moderno.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "No hay un único par decimal garantizado por C; se consultan los tamaños de la implementación.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "La página distingue LP64 de LLP64. sizeof acepta tipos y variables; los tamaños exactos de long no son universales."
    },
    {
      "id": "PE-T01-12",
      "topic": 1,
      "difficulty": "media",
      "prompt": "Con `char nombre[8];`, ¿qué bloque lee una palabra con límite y deja espacio para el terminador nulo?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "scanf(\"%8s\", nombre);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "scanf(\"%7s\", nombre);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "scanf(\"%s\", nombre);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "scanf(\"%7c\", nombre);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "El ancho 7 permite hasta siete caracteres más el terminador. %c no agrega por sí mismo el terminador de una cadena."
    },
    {
      "id": "PE-T01-13",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué se imprime después de modificar el arreglo de caracteres?",
      "code": "char dato[] = \"C\";\ndato[0] = 'Z';\nprintf(\"%c %zu\", dato[0], sizeof(dato));",
      "options": [
        {
          "id": "A",
          "text": "Z 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "90 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Z 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "C 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El carácter cambia a Z. El arreglo conserva dos posiciones: una para el carácter y otra para el nulo."
    },
    {
      "id": "PE-T01-14",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "¿Qué condición acepta exactamente los pares de valores reales cuya distancia absoluta es menor que 0.001? Se incluyó `<math.h>`.",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (fabs(x - y) < 0.001)\n    printf(\"cerca\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (x - y < 0.001)\n    printf(\"cerca\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (x < y && y < x)\n    printf(\"cerca\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (x == y + 0.001)\n    printf(\"cerca\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "El valor absoluto cubre diferencias positivas y negativas. La resta sin fabs acepta diferencias negativas de cualquier magnitud."
    },
    {
      "id": "PE-T01-15",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué entero se muestra al combinar una conversión real y una booleana?",
      "code": "double nota = 9.75;\n_Bool aprobado = nota;\nprintf(\"%d %d\", (int)nota, aprobado);",
      "options": [
        {
          "id": "A",
          "text": "10 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "9 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "10 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La conversión a int descarta .75; la conversión a _Bool produce 1 porque 9.75 es distinto de cero."
    },
    {
      "id": "PE-T01-16",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el problema de esta llamada? No se solicita predecir una salida de un programa inválido.",
      "code": "float temperatura = 0;\nscanf(\"%lf\", &temperatura);",
      "options": [
        {
          "id": "A",
          "text": "La llamada es correcta porque float y double son siempre el mismo tipo.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "%lf exige double*, pero se envía float*; debe usarse %f para esta variable.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Solo falta escribir temperatura con mayúscula.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "&temperatura no puede enviarse a scanf aunque el formato sea correcto.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "Los tipos de destino de scanf deben coincidir exactamente con el formato. %lf corresponde a double*, y %f a float*."
    },
    {
      "id": "PE-T01-17",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué bloque imprime correctamente el tamaño de una variable sin asumir el tipo de size_t?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int edad = 20;\nprintf(\"%s\", sizeof(edad));",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int edad = 20;\nprintf(\"%f\", sizeof(edad));",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int edad = 20;\nprintf(\"%d\", sizeof(edad));",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int edad = 20;\nprintf(\"%zu\", sizeof(edad));",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "sizeof devuelve size_t y el especificador correspondiente es %zu. Los demás formatos no describen ese argumento."
    },
    {
      "id": "PE-T01-18",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué muestra la conversión de un carácter numérico a su valor de dígito?",
      "code": "char digito = '7';\nint numero = digito - '0';\nprintf(\"%d\", numero + 2);",
      "options": [
        {
          "id": "A",
          "text": "9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "72",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "57",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Los códigos de los dígitos decimales son consecutivos en C. Restar el código de 0 obtiene 7; sumar 2 produce 9."
    },
    {
      "id": "PE-T01-19",
      "topic": 1,
      "difficulty": "dificil",
      "prompt": "Se dispone de `uint8_t`. ¿Qué valores se imprimen?",
      "code": "uint8_t nivel = 255;\nnivel = nivel + 2;\nprintf(\"%u\", (unsigned)nivel);",
      "options": [
        {
          "id": "A",
          "text": "1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "257",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "255",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "La suma se promueve para calcular 257 y al asignar al entero sin signo de 8 bits se reduce módulo 256: queda 1."
    },
    {
      "id": "PE-T01-20",
      "topic": 1,
      "difficulty": "media",
      "prompt": "¿Qué fragmento conserva una cantidad fraccionaria al dividir dos enteros positivos a y b, con b distinto de cero?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "double r = (double)(a / b);\nprintf(\"%.2f\", r);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "double r = (double)a / b;\nprintf(\"%.2f\", r);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "double r = a / b;\nprintf(\"%.2f\", r);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int r = (double)a / b;\nprintf(\"%d\", r);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "La conversión debe ocurrir antes de dividir y el destino debe conservar la fracción."
    },
    {
      "id": "PE-T02-01",
      "topic": 2,
      "difficulty": "media",
      "prompt": "Evalúa precedencia aritmética y comparación. ¿Qué se imprime?",
      "code": "int r = 8 + 3 * 4 >= 20;\nprintf(\"%d\", r);",
      "options": [
        {
          "id": "A",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "44",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "Primero 3*4=12, luego 8+12=20 y finalmente 20>=20 produce 1."
    },
    {
      "id": "PE-T02-02",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué resultado se obtiene con cociente y residuo de enteros negativos?",
      "code": "int a = -17, b = 5;\nprintf(\"%d %d\", a / b, a % b);",
      "options": [
        {
          "id": "A",
          "text": "-4 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "-3 -2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "-3 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "-4 -2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "La división entera trunca hacia cero: -3. El residuo satisface a=(a/b)*b+a%b: -17=(-3)*5+(-2)."
    },
    {
      "id": "PE-T02-03",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué valores se imprimen después de la expresión con cortocircuito?",
      "code": "int x = 0, y = 4;\nint r = (x != 0) && (++y > 4);\nprintf(\"%d %d\", r, y);",
      "options": [
        {
          "id": "A",
          "text": "1 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "El primer operando de && es falso. No se evalúa ++y y el resultado lógico es 0."
    },
    {
      "id": "PE-T02-04",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué se imprime al emplear OR con una modificación en el segundo operando?",
      "code": "int x = 6, y = 2;\nint r = (x > 0) || (y = 10);\nprintf(\"%d %d\", r, y);",
      "options": [
        {
          "id": "A",
          "text": "6 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "x>0 es verdadero y || omite su segundo operando. Por ello y sigue en 2; el resultado lógico se normaliza a 1."
    },
    {
      "id": "PE-T02-05",
      "topic": 2,
      "difficulty": "media",
      "prompt": "Con `int x`, ¿qué condición acepta únicamente valores de 10 a 20, incluidos ambos extremos?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (x > 10 && x < 20)\n    printf(\"valido\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (x >= 10 || x <= 20)\n    printf(\"valido\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (10 <= x <= 20)\n    printf(\"valido\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (x >= 10 && x <= 20)\n    printf(\"valido\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Se necesitan dos comparaciones unidas por &&. La comparación encadenada evalúa primero 10<=x y compara su 0 o 1 con 20."
    },
    {
      "id": "PE-T02-06",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué produce la comparación encadenada de C en este caso?",
      "code": "int x = 30;\nprintf(\"%d %d\", 10 <= x <= 20, x >= 10 && x <= 20);",
      "options": [
        {
          "id": "A",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "10<=30 produce 1 y luego 1<=20 produce 1. La condición de rango con && es falsa para 30."
    },
    {
      "id": "PE-T02-07",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué se imprime después de las dos instrucciones de incremento separadas?",
      "code": "int x = 3, a, b;\na = x++;\nb = ++x;\nprintf(\"%d %d %d\", a, b, x);",
      "options": [
        {
          "id": "A",
          "text": "4 4 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4 5 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 4 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 5 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El posincremento entrega 3 y después deja x=4. El preincremento lo eleva a 5 antes de asignarlo a b."
    },
    {
      "id": "PE-T02-08",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el resultado de la asignación compuesta con una expresión entera?",
      "code": "int x = 5;\nx *= 2 + 3;\nx /= 4;\nprintf(\"%d\", x);",
      "options": [
        {
          "id": "A",
          "text": "25",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "x*=2+3 equivale aquí a multiplicar por 5: x=25. La división entera entre 4 deja 6."
    },
    {
      "id": "PE-T02-09",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué condición evita dividir entre cero y acepta cuando el cociente entero a/b supera 2?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (b == 0 && a / b > 2)\n    printf(\"si\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (b != 0 || a / b > 2)\n    printf(\"si\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (a / b > 2 && b != 0)\n    printf(\"si\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (b != 0 && a / b > 2)\n    printf(\"si\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "El chequeo b!=0 debe ser el primer operando de &&. Si es falso, el cortocircuito omite la división."
    },
    {
      "id": "PE-T02-10",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué se imprime al combinar negación y comparaciones?",
      "code": "int a = 4, b = 7;\nprintf(\"%d %d\", !(a < b), !a < b);",
      "options": [
        {
          "id": "A",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "!(4<7) niega un verdadero y produce 0. En !a<b primero !4 es 0 y luego 0<7 es verdadero."
    },
    {
      "id": "PE-T02-11",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué diferencia producen las posiciones del casting?",
      "code": "int a = 9, b = 4;\nprintf(\"%.2f %.2f\", (double)(a / b), (double)a / b);",
      "options": [
        {
          "id": "A",
          "text": "2.25 2.00",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2.00 2.25",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2.25 2.25",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2.00 2.00",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "El primer casting llega después de la división entera y solo convierte el 2. El segundo convierte un operando antes de dividir."
    },
    {
      "id": "PE-T02-12",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué se imprime al distinguir asignación y comparación?",
      "code": "int x = 4;\nint r = (x = 0);\nprintf(\"%d %d\", x, r == 0);",
      "options": [
        {
          "id": "A",
          "text": "4 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La asignación guarda 0 en x y su expresión vale 0; después r==0 produce 1."
    },
    {
      "id": "PE-T02-13",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué condición acepta exactamente los enteros que no pertenecen al intervalo cerrado [5,12]?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (x < 5 || x > 12)\n    printf(\"fuera\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (x <= 5 || x >= 12)\n    printf(\"fuera\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (!(x >= 5 || x <= 12))\n    printf(\"fuera\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (x < 5 && x > 12)\n    printf(\"fuera\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "Estar fuera significa ser menor que 5 o mayor que 12. Los extremos pertenecen al intervalo y no deben aceptarse."
    },
    {
      "id": "PE-T02-14",
      "topic": 2,
      "difficulty": "dificil",
      "prompt": "¿Qué resultado produce la combinación de && y ||?",
      "code": "int a = 0, b = 1, c = 0;\nprintf(\"%d %d\", a &&b || !c, a && (b || !c));",
      "options": [
        {
          "id": "A",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "&& tiene mayor precedencia que ||. La primera expresión termina como 0||1; en la segunda el primer a falso hace falso todo el &&."
    },
    {
      "id": "PE-T02-15",
      "topic": 2,
      "difficulty": "media",
      "prompt": "¿Qué se imprime con división, módulo y multiplicación de la misma precedencia?",
      "code": "int r = 20 / 3 * 2 + 20 % 3;\nprintf(\"%d\", r);",
      "options": [
        {
          "id": "A",
          "text": "14",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "13",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "15",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Los operadores de ese nivel se agrupan de izquierda a derecha: 20/3=6, 6*2=12 y 20%3=2; total 14."
    },
    {
      "id": "PE-T03-01",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué imprime? Identifica a qué if pertenece el else sin agregar llaves.",
      "code": "int x = 5, y = -1;\nif (x > 0)\n    if (y > 0)\n        printf(\"A\");\n    else\n        printf(\"B\");\nprintf(\"C\");",
      "options": [
        {
          "id": "A",
          "text": "BC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "AC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "C",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "ABC",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El else se asocia con el if sin else más cercano: y>0. Esa condición es falsa y produce B; después se imprime C."
    },
    {
      "id": "PE-T03-02",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué imprime el bloque con un punto y coma inmediatamente después del if?",
      "code": "int x = 0;\nif (x > 10)\n    ;\n{\n    x = 8;\n}\nprintf(\"%d\", x);",
      "options": [
        {
          "id": "A",
          "text": "8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "No compila.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El punto y coma es el cuerpo vacío del if. El bloque posterior es independiente y asigna 8 incondicionalmente."
    },
    {
      "id": "PE-T03-03",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "¿Qué salida resulta al usar una asignación como condición?",
      "code": "int n = 0;\nif (n = 3)\n    printf(\"A%d\", n);\nelse\n    printf(\"B%d\", n);",
      "options": [
        {
          "id": "A",
          "text": "A3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "B3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "B0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "A0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "n=3 guarda 3 y la expresión tiene valor 3, que se interpreta como verdadero. Es válido en C aunque suele advertir de un posible error."
    },
    {
      "id": "PE-T03-04",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Cuál es la salida del switch?",
      "code": "int op = 2;\nswitch (op)\n{\ncase 1:\n    printf(\"A\");\n    break;\ncase 2:\n    printf(\"B\");\ncase 3:\n    printf(\"C\");\n    break;\ndefault:\n    printf(\"D\");\n}",
      "options": [
        {
          "id": "A",
          "text": "ABC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "BCD",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "B",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "BC",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La ejecución comienza en case 2 y cae a case 3 por falta de break. El break de case 3 termina el switch."
    },
    {
      "id": "PE-T03-05",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "default aparece antes de un case. ¿Qué se muestra cuando sí existe coincidencia?",
      "code": "int op = 2;\nswitch (op)\n{\ncase 1:\n    printf(\"A\");\n    break;\ndefault:\n    printf(\"D\");\ncase 2:\n    printf(\"B\");\n    break;\n}",
      "options": [
        {
          "id": "A",
          "text": "DB",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "D",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "AB",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "B",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La coincidencia con case 2 lleva directamente a esa etiqueta, sin ejecutar el default situado antes."
    },
    {
      "id": "PE-T03-06",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué bloque acepta a y A como la misma opción y rechaza los demás caracteres?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "switch (op)\n{\ncase 'a':\ncase 'A':\n    printf(\"si\");\n    break;\ndefault:\n    printf(\"no\");\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (op == 'a' && op == 'A')\n    printf(\"si\");\nelse\n    printf(\"no\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "switch (op)\n{\ncase 'a':\n    printf(\"si\");\n    break;\ncase 'A':\n    printf(\"no\");\n    break;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "switch (op)\n{\ncase 'a' || 'A':\n    printf(\"si\");\n    break;\ndefault:\n    printf(\"no\");\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "Dos etiquetas case consecutivas pueden compartir el bloque. La expresión constante a||A vale 1 y no significa dos alternativas."
    },
    {
      "id": "PE-T03-07",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "¿Qué valor se imprime al ejecutar dos decisiones independientes?",
      "code": "int x = 4;\nif (x < 5)\n    x += 3;\nif (x > 5)\n    x *= 2;\nelse\n    x -= 1;\nprintf(\"%d\", x);",
      "options": [
        {
          "id": "A",
          "text": "14",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El primer if cambia x a 7. El segundo es independiente y vuelve a evaluar el valor actualizado, por lo que lo duplica."
    },
    {
      "id": "PE-T03-08",
      "topic": 3,
      "difficulty": "media",
      "prompt": "Para notas válidas de 0 a 100 se desea A desde 90, B desde 80 y C en el resto. ¿Qué clasificación cubre correctamente los límites?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (n >= 80)\n    printf(\"B\");\nelse if (n >= 90)\n    printf(\"A\");\nelse\n    printf(\"C\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (n > 90)\n    printf(\"A\");\nelse if (n > 80)\n    printf(\"B\");\nelse\n    printf(\"C\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (n >= 90)\n    printf(\"A\");\nelse if (n >= 80)\n    printf(\"B\");\nelse\n    printf(\"C\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (n >= 90)\n    printf(\"A\");\nif (n >= 80)\n    printf(\"B\");\nelse\n    printf(\"C\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se revisa primero el umbral más alto y se usa >= para incluir 90 y 80. Los else mantienen una única clasificación."
    },
    {
      "id": "PE-T03-09",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué diagnóstico describe esta selección?",
      "code": "char opcion[] = \"alta\";\nswitch (opcion)\n{\ncase \"alta\":\n    printf(\"Registrar\");\n    break;\n}",
      "options": [
        {
          "id": "A",
          "text": "Solo falta agregar default y entonces compara el texto correctamente.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "La variable opcion se convierte automáticamente al número de letras.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Las comillas dobles son válidas en case si la cadena tiene cuatro caracteres.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "switch requiere una expresión de tipo entero y case constantes enteras; no compara cadenas.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "Un arreglo de char no es la expresión entera requerida. Para contenidos de cadenas se pueden usar condiciones con strcmp."
    },
    {
      "id": "PE-T03-10",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "¿Cuál fragmento usa una etiqueta case válida según las reglas de C11?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int limite = 2;\nswitch (op)\n{\ncase limite:\n    printf(\"dos\");\n    break;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "enum\n{\n    LIMITE = 2\n};\nswitch (op)\n{\ncase LIMITE:\n    printf(\"dos\");\n    break;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "switch (op)\n{\ncase op:\n    printf(\"dos\");\n    break;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "const int limite = 2;\nswitch (op)\n{\ncase limite:\n    printf(\"dos\");\n    break;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "Una constante de enumeración es una expresión constante entera. En C11 una variable const int no cumple por sí sola ese requisito."
    },
    {
      "id": "PE-T03-11",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Cuál es el problema en este intento de seleccionar por temperatura?",
      "code": "double t = 37.5;\nswitch (t)\n{\ncase 37:\n    printf(\"normal\");\n    break;\ndefault:\n    printf(\"otro\");\n}",
      "options": [
        {
          "id": "A",
          "text": "El error es que case 37 necesita un punto decimal.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "La expresión de switch es double; conviene comparar rangos con if.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "default debe escribirse antes del primer case para compilar.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "No hay problema: switch convierte siempre cualquier double a int.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "La expresión controladora de switch debe ser de tipo entero. No hay una conversión automática que haga válido ese switch."
    },
    {
      "id": "PE-T03-12",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "Se quiere rechazar toda edad fuera de 18 a 65, incluidos los extremos como válidos. ¿Qué reparación cumple la regla?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (edad > 18 || edad < 65)\n    printf(\"rechazar\");\nelse\n    printf(\"aceptar\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (edad < 18 && edad > 65)\n    printf(\"rechazar\");\nelse\n    printf(\"aceptar\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (edad <= 18 || edad >= 65)\n    printf(\"rechazar\");\nelse\n    printf(\"aceptar\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (edad < 18 || edad > 65)\n    printf(\"rechazar\");\nelse\n    printf(\"aceptar\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Los dos conjuntos exteriores se unen con OR. Las comparaciones estrictas mantienen 18 y 65 como edades aceptadas."
    },
    {
      "id": "PE-T03-13",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "Regla: una cuenta inactiva siempre recibe Bloqueada; una activa recibe Admin si es administrador, y Usuario si no. ¿Qué bloque aplica esa prioridad?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (activo || admin)\n    printf(\"Admin\");\nelse\n    printf(\"Bloqueada\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (!activo)\n    printf(\"Bloqueada\");\nelse if (admin)\n    printf(\"Admin\");\nelse\n    printf(\"Usuario\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (admin)\n    printf(\"Admin\");\nelse if (!activo)\n    printf(\"Bloqueada\");\nelse\n    printf(\"Usuario\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (activo && admin)\n    printf(\"Admin\");\nelse\n    printf(\"Usuario\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "La inactividad se evalúa primero, de modo que un administrador inactivo también queda bloqueado."
    },
    {
      "id": "PE-T03-14",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "Rastrea las modificaciones y los fall-through. ¿Cuál es el valor final?",
      "code": "int op = 1, r = 2;\nswitch (op)\n{\ncase 1:\n    r += 3;\ncase 2:\n    r *= 2;\ndefault:\n    r -= 1;\n}\nprintf(\"%d\", r);",
      "options": [
        {
          "id": "A",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Se entra en case 1 y, al no haber break, se ejecutan las tres operaciones: 2+3=5, 5*2=10 y 10-1=9."
    },
    {
      "id": "PE-T03-15",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué bloque imprime un cociente solo si el divisor es distinto de cero y muestra error en caso contrario?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (b != 0)\n    ;\nprintf(\"%d\", a / b);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (b == 0)\n    printf(\"%d\", a / b);\nelse\n    printf(\"error\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (b != 0)\n    printf(\"%d\", a / b);\nelse\n    printf(\"error\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (a / b)\n    printf(\"%d\", a / b);\nelse\n    printf(\"error\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "La división debe quedar dentro de la rama que confirmó b!=0. Comprobar primero a/b ya podría dividir entre cero."
    },
    {
      "id": "PE-T03-16",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué camino se toma al anidar por la rama falsa?",
      "code": "int beca = 0, promedio = 92;\nif (beca)\n    printf(\"Directo\");\nelse\n{\n    if (promedio >= 90)\n        printf(\"Merito\");\n    else\n        printf(\"Sin apoyo\");\n}",
      "options": [
        {
          "id": "A",
          "text": "Merito",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "DirectoMerito",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Directo",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "Sin apoyo",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "beca vale cero y se entra al else. Allí 92>=90 es verdadero, por lo que se imprime Merito."
    },
    {
      "id": "PE-T03-17",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "No hay un case que coincida con op. ¿Qué texto termina apareciendo?",
      "code": "int op = 9;\nswitch (op)\n{\ncase 1:\n    printf(\"A\");\n    break;\ndefault:\n    printf(\"D\");\ncase 2:\n    printf(\"B\");\ncase 3:\n    printf(\"C\");\n    break;\n}",
      "options": [
        {
          "id": "A",
          "text": "BC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "DBC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "D",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "ABCD",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Sin coincidencia se empieza en default. Después se sigue por las instrucciones de case 2 y case 3 hasta encontrar break."
    },
    {
      "id": "PE-T03-18",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Qué imprime el programa cuando la primera condición descarta una rama completa?",
      "code": "int x = -2, y = 5;\nif (x > 0)\n{\n    if (y > 0)\n        y += 10;\n}\nelse\n{\n    if (y < 0)\n        y = 0;\n    else\n        y -= 2;\n}\nprintf(\"%d\", y);",
      "options": [
        {
          "id": "A",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "x>0 es falso. En la rama else, y<0 también es falso y se resta 2 al valor 5."
    },
    {
      "id": "PE-T03-19",
      "topic": 3,
      "difficulty": "media",
      "prompt": "¿Cuál es la salida con un case constante calculado?",
      "code": "int op = 6;\nswitch (op)\n{\ncase 2 * 3:\n    printf(\"Seis\");\n    break;\ncase 7:\n    printf(\"Siete\");\n    break;\ndefault:\n    printf(\"Otro\");\n}",
      "options": [
        {
          "id": "A",
          "text": "Otro",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "SeisSiete",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Seis",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "No compila porque case contiene una multiplicación.",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "2*3 es una expresión constante entera válida y equivale a case 6. El break evita continuar."
    },
    {
      "id": "PE-T03-20",
      "topic": 3,
      "difficulty": "dificil",
      "prompt": "Se debe mostrar Invalida fuera de 0..100, Aprobada desde 60 y Reprobada en los otros valores válidos. ¿Qué bloque clasifica correctamente cualquier nota entera?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (n < 0 && n > 100)\n    printf(\"Invalida\");\nelse if (n >= 60)\n    printf(\"Aprobada\");\nelse\n    printf(\"Reprobada\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (n >= 60)\n    printf(\"Aprobada\");\nelse if (n < 0 || n > 100)\n    printf(\"Invalida\");\nelse\n    printf(\"Reprobada\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (n <= 0 || n >= 100)\n    printf(\"Invalida\");\nelse if (n > 60)\n    printf(\"Aprobada\");\nelse\n    printf(\"Reprobada\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (n < 0 || n > 100)\n    printf(\"Invalida\");\nelse if (n >= 60)\n    printf(\"Aprobada\");\nelse\n    printf(\"Reprobada\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Primero se valida el dominio, después se clasifica. Así una nota 120 no se aprueba y los límites 0,60,100 se tratan correctamente."
    },
    {
      "id": "PE-T04-01",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué suma y qué valor del contador se imprimen al terminar?",
      "code": "int i = 1, suma = 0;\nwhile (i <= 5)\n{\n    suma += i;\n    i += 2;\n}\nprintf(\"%d %d\", suma, i);",
      "options": [
        {
          "id": "A",
          "text": "15 6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "9 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Se acumulan 1,3,5 y luego i pasa a 7, donde falla la condición. La suma es 9."
    },
    {
      "id": "PE-T04-02",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué imprime la comparación entre precondición y postcondición?",
      "code": "int a = 5, b = 5;\nwhile (a < 3)\n    a++;\ndo\n{\n    b++;\n} while (b < 3);\nprintf(\"%d %d\", a, b);",
      "options": [
        {
          "id": "A",
          "text": "6 6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5 6",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "while no entra porque 5<3 es falso. do-while incrementa una vez antes de revisar su condición."
    },
    {
      "id": "PE-T04-03",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué valor alcanza el acumulador al omitir una iteración?",
      "code": "int suma = 0;\nfor (int i = 1; i <= 6; i++)\n{\n    if (i == 4)\n        continue;\n    suma += i;\n}\nprintf(\"%d\", suma);",
      "options": [
        {
          "id": "A",
          "text": "17",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "21",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "10",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Se suman 1,2,3,5,6. continue omite únicamente la suma correspondiente al 4."
    },
    {
      "id": "PE-T04-04",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Cuántas veces se ejecuta el incremento de c?",
      "code": "int c = 0;\nfor (int i = 1; i <= 4; i++)\n    for (int j = 0; j < i; j++)\n        c++;\nprintf(\"%d\", c);",
      "options": [
        {
          "id": "A",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "16",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "10",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El ciclo interior se ejecuta 1,2,3 y 4 veces, respectivamente. La suma triangular es 10."
    },
    {
      "id": "PE-T04-05",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Cuál es la salida cuando break está dentro del ciclo interior?",
      "code": "int c = 0;\nfor (int i = 0; i < 3; i++)\n{\n    for (int j = 0; j < 4; j++)\n    {\n        if (j == 2)\n            break;\n        c++;\n    }\n}\nprintf(\"%d\", c);",
      "options": [
        {
          "id": "A",
          "text": "12",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Cada ciclo interior incrementa para j=0 y j=1 y termina al llegar a 2. El ciclo exterior continúa sus tres vueltas."
    },
    {
      "id": "PE-T04-06",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué bloque suma exactamente los enteros del 1 al n, inclusive, para todo n>=1?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int s = 1;\nfor (int i = 1; i <= n; i++)\n    s += i;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int s = 0;\nfor (int i = 1; i < n; i++)\n    s += i;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int s = 0;\nfor (int i = 1; i <= n; i++)\n    s += i;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int s = 0;\nfor (int i = 0; i <= n; i++)\n    s = i;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "El acumulador debe iniciar en cero y los índices incluir ambos extremos 1 y n."
    },
    {
      "id": "PE-T04-07",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "La bandera detiene la búsqueda. ¿Qué contador final se imprime?",
      "code": "int i = 1, encontrado = 0;\nwhile (i <= 8 && !encontrado)\n{\n    if (i * i > 10)\n        encontrado = 1;\n    i++;\n}\nprintf(\"%d %d\", i, encontrado);",
      "options": [
        {
          "id": "A",
          "text": "4 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "9 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "i=4 es el primer valor cuyo cuadrado supera 10. Se activa la bandera y aún se ejecuta i++, dejando 5."
    },
    {
      "id": "PE-T04-08",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué valores aparecen al terminar este ciclo descendente?",
      "code": "int i, s = 0;\nfor (i = 7; i > 0; i -= 3)\n    s += i;\nprintf(\"%d %d\", s, i);",
      "options": [
        {
          "id": "A",
          "text": "11 -2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "12 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "15 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "12 -2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El cuerpo usa 7,4,1; su suma es 12. La última actualización deja i=-2 y entonces termina."
    },
    {
      "id": "PE-T04-09",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el defecto que impide llegar normalmente a printf? Supón que la ejecución no se interrumpe externamente.",
      "code": "int i = 0;\nwhile (i < 5)\n{\n    if (i == 2)\n        continue;\n    i++;\n}\nprintf(\"%d\", i);",
      "options": [
        {
          "id": "A",
          "text": "i llega a 5 porque continue incrementa automáticamente el contador.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "Cuando i llega a 2, continue evita su incremento y el ciclo repite indefinidamente.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "continue sale completamente del while y se imprime 2.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "El programa tiene un error de sintaxis porque continue no existe en while.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "En un while, continue regresa a evaluar la condición y no ejecuta una actualización automática. i permanece en 2."
    },
    {
      "id": "PE-T04-10",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "Se desea un máximo de tres intentos y detenerse al acertar. Cada llamada a `acertar()` devuelve 0 o 1. ¿Qué bloque llama a acertar como máximo tres veces y nunca después de un éxito?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int ok = 0;\nfor (int i = 0; i <= 3 && !ok; i++)\n    ok = acertar();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int ok = 0;\nfor (int i = 0; i < 3 && ok; i++)\n    ok = acertar();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int ok = 0;\nfor (int i = 0; i < 3 && !ok; i++)\n    ok = acertar();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int ok = 0;\nfor (int i = 0; i < 3 || !ok; i++)\n    ok = acertar();",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se combinan el límite i<3 y la bandera !ok mediante &&. Las otras formas permiten cuatro llamadas, prolongan el ciclo o no entran."
    },
    {
      "id": "PE-T04-11",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Cuál es la salida cuando el cuerpo del for está vacío?",
      "code": "int i;\nfor (i = 0; i < 4; i++)\n    ;\nprintf(\"%d\", i);",
      "options": [
        {
          "id": "A",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 1 2 3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "El punto y coma es un cuerpo vacío. La actualización continúa hasta que i=4; printf se ejecuta una sola vez después."
    },
    {
      "id": "PE-T04-12",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Cuántos pares pasan el filtro?",
      "code": "int c = 0;\nfor (int i = 1; i <= 3; i++)\n    for (int j = 1; j <= 3; j++)\n    {\n        if (i == j)\n            continue;\n        if (i + j > 3)\n            c++;\n    }\nprintf(\"%d\", c);",
      "options": [
        {
          "id": "A",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Se excluye la diagonal. Cumplen la suma los pares (1,3),(2,3),(3,1),(3,2): cuatro en total."
    },
    {
      "id": "PE-T04-13",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Cuál es el resultado del procesamiento de dígitos?",
      "code": "int n = 507, suma = 0;\nwhile (n > 0)\n{\n    suma += n % 10;\n    n /= 10;\n}\nprintf(\"%d %d\", suma, n);",
      "options": [
        {
          "id": "A",
          "text": "57 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "12 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "507 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "12 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Los residuos recuperan 7,0 y 5; la división entera reduce n hasta cero. La suma es 12."
    },
    {
      "id": "PE-T04-14",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Qué bloque cuenta los dígitos decimales de cualquier n>=0, contando al cero como un dígito?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int c = 0;\ndo\n{\n    c++;\n    n /= 10;\n} while (n > 0);\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int c = 0;\ndo\n{\n    c++;\n    n %= 10;\n} while (n > 0);\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int c = 1;\ndo\n{\n    c++;\n    n /= 10;\n} while (n > 0);\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int c = 0;\nwhile (n > 0)\n{\n    c++;\n    n /= 10;\n}\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "do-while cuenta una vez incluso para n=0. Dividir por 10 elimina progresivamente el último dígito."
    },
    {
      "id": "PE-T04-15",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué secuencia se imprime antes de que la condición deje de cumplirse?",
      "code": "int x = 1;\nwhile (x < 10)\n{\n    printf(\"%d \", x);\n    x *= 2;\n}",
      "options": [
        {
          "id": "A",
          "text": "1 3 5 7 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2 4 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 2 4 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 2 4 8 16",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "El cuerpo muestra el valor antes de duplicarlo. Al llegar a 16, la condición x<10 ya es falsa."
    },
    {
      "id": "PE-T04-16",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el resultado al modificar el contador también dentro del cuerpo?",
      "code": "int c = 0;\nfor (int i = 0; i < 6; i++)\n{\n    c++;\n    if (i % 2 == 0)\n        i++;\n}\nprintf(\"%d\", c);",
      "options": [
        {
          "id": "A",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "6",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "El cuerpo se inicia con i=0,2,4. Cada una de esas vueltas incrementa i internamente y otra vez en la actualización del for."
    },
    {
      "id": "PE-T04-17",
      "topic": 4,
      "difficulty": "media",
      "prompt": "¿Qué ciclo imprime 5 4 3 2 1 exactamente una vez cada número?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "for (int i = 5; i > 1; i--)\n    printf(\"%d \", i);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "for (int i = 1; i <= 5; i++)\n    printf(\"%d \", i);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "for (int i = 5; i >= 1; i--)\n    printf(\"%d \", i);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "for (int i = 5; i >= 1; i -= 2)\n    printf(\"%d \", i);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se inicia en 5, se incluye el límite 1 y se decrementa de uno en uno."
    },
    {
      "id": "PE-T04-18",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Qué efecto tiene continue en la actualización de un for?",
      "code": "int i, s = 0;\nfor (i = 0; i < 5; i++)\n{\n    if (i < 3)\n        continue;\n    s += i;\n}\nprintf(\"%d %d\", s, i);",
      "options": [
        {
          "id": "A",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "7 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "En un for, continue conduce a la actualización i++. Solo se suman 3 y 4; al finalizar i vale 5."
    },
    {
      "id": "PE-T04-19",
      "topic": 4,
      "difficulty": "media",
      "prompt": "La entrada es `4 7 0 9`. ¿Qué imprime el ciclo con centinela? El 9 permanece sin procesar.",
      "code": "int n, suma = 0, c = 0;\nscanf(\"%d\", &n);\nwhile (n != 0)\n{\n    suma += n;\n    c++;\n    scanf(\"%d\", &n);\n}\nprintf(\"%d %d\", suma, c);",
      "options": [
        {
          "id": "A",
          "text": "11 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "20 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "11 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Se procesan únicamente 4 y 7. El 0 termina el ciclo antes de sumarse y evita leer el 9."
    },
    {
      "id": "PE-T04-20",
      "topic": 4,
      "difficulty": "dificil",
      "prompt": "¿Qué bloque recorre una cuadrícula de 3 filas y 4 columnas y cuenta exactamente sus 12 celdas?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int c = 0, j = 0;\nfor (int i = 0; i < 3; i++)\n    for (; j < 4; j++)\n        c++;\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < i; j++)\n        c++;\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int c = 0;\nfor (int i = 0; i < 3; i++)\n    for (int j = 0; j < 4; j++)\n        c++;\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int c = 0;\nfor (int i = 0; i <= 3; i++)\n    for (int j = 0; j < 4; j++)\n        c++;\nprintf(\"%d\", c);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "El contador interior se reinicia en cada fila y ambos límites excluyen el tamaño. Así se ejecuta 3*4=12 veces."
    },
    {
      "id": "PE-T05-01",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué devuelve la composición de llamadas? Las funciones no imprimen por sí mismas.",
      "code": "int suma(int a, int b)\n{\n    return a + b;\n}\nint doble(int x)\n{\n    return 2 * x;\n}\n\nint main(void)\n{\n    printf(\"%d\", doble(suma(3, 4)));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "14",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "24",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "suma(3,4) devuelve 7, que se convierte en el argumento de doble. El resultado final es 14."
    },
    {
      "id": "PE-T05-02",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué valor conserva la variable del llamador después del paso por valor?",
      "code": "void cambiar(int x)\n{\n    x = 20;\n}\n\nint main(void)\n{\n    int x = 6;\n    cambiar(x);\n    printf(\"%d\", x);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "26",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "El parámetro x es una copia del argumento. Modificar esa copia no cambia la variable local de main."
    },
    {
      "id": "PE-T05-03",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "La función convierte su resultado al tipo de retorno. ¿Qué se imprime?",
      "code": "int entero(int a, int b)\n{\n    return (double)a / b;\n}\ndouble real(int a, int b)\n{\n    return (double)a / b;\n}\n\nint main(void)\n{\n    printf(\"%d %.1f\", entero(7, 2), real(7, 2));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "3 3.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3 3.5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 3.5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 4.0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Ambas expresiones calculan 3.5, pero entero convierte el resultado a int al devolverlo. real conserva la fracción."
    },
    {
      "id": "PE-T05-04",
      "topic": 5,
      "difficulty": "media",
      "prompt": "Para dos enteros entre -1000 y 1000, ¿qué definición calcula y devuelve el promedio real sin perder la fracción?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int promedio(int a, int b)\n{\n    return (a + b) / 2.0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "double promedio(int a, int b)\n{\n    return (a + b) / 2;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "void promedio(int a, int b)\n{\n    printf(\"%.1f\", (a + b) / 2.0);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "double promedio(int a, int b)\n{\n    return (a + b) / 2.0;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "El divisor real evita división entera y el retorno double conserva la fracción. Imprimir dentro de una función void no devuelve un promedio."
    },
    {
      "id": "PE-T05-05",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué salida muestra el alcance de las variables locales?",
      "code": "int calcular(int x)\n{\n    int y = 3;\n    x += y;\n    return x;\n}\n\nint main(void)\n{\n    int x = 10;\n    printf(\"%d \", calcular(x));\n    printf(\"%d\", x);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "13 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 13",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "13 13",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 10",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "La función trabaja con una copia que termina en 13 y la devuelve. La variable x del llamador sigue valiendo 10."
    },
    {
      "id": "PE-T05-06",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué función intercambia correctamente dos enteros originales, incluso cuando sus valores son distintos?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "void cambiar(int *a, int *b)\n{\n    int *t = a;\n    a = b;\n    b = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "void cambiar(int *a, int *b)\n{\n    *a = *b;\n    *b = *a;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "void cambiar(int a, int b)\n{\n    int t = a;\n    a = b;\n    b = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "void cambiar(int *a, int *b)\n{\n    int t = *a;\n    *a = *b;\n    *b = t;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Hay que conservar el primer valor antes de sobrescribirlo y escribir mediante *a y *b. Intercambiar las copias locales de los punteros no cambia los enteros."
    },
    {
      "id": "PE-T05-07",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué se imprime después de modificar una variable mediante su dirección?",
      "code": "void aumentar(int *p, int cantidad)\n{\n    *p += cantidad;\n}\n\nint main(void)\n{\n    int n = 4;\n    aumentar(&n, 3);\n    printf(\"%d\", n);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "12",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "p recibe la dirección de n. La suma mediante *p actualiza directamente el objeto original a 7."
    },
    {
      "id": "PE-T05-08",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "Los dos parámetros apuntan al mismo objeto. ¿Cuál es el valor final?",
      "code": "void ajustar(int *a, int *b)\n{\n    *a += 2;\n    *b *= 2;\n}\n\nint main(void)\n{\n    int x = 3;\n    ajustar(&x, &x);\n    printf(\"%d\", x);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Las instrucciones están secuenciadas: primero x pasa de 3 a 5 y después el mismo objeto se multiplica por 2."
    },
    {
      "id": "PE-T05-09",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué llamada utiliza correctamente la función mostrada para modificar el entero n?",
      "code": "void incrementar(int *p)\n{\n    (*p)++;\n}\nint n = 5;",
      "options": [
        {
          "id": "A",
          "text": "incrementar(&n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "incrementar(n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "incrementar(*n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "n = incrementar(&n);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "La función recibe int* y devuelve void: se envía &n y no se intenta asignar un resultado."
    },
    {
      "id": "PE-T05-10",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué parte del procedimiento void se ejecuta con un dato inválido?",
      "code": "void mostrar(int n)\n{\n    if (n < 0)\n    {\n        printf(\"Error\");\n        return;\n    }\n    printf(\"Dato\");\n}\n\nint main(void)\n{\n    mostrar(-2);\n    printf(\"Fin\");\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "ErrorFin",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "ErrorDatoFin",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Error",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "DatoFin",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "return sin valor termina solamente mostrar. El flujo vuelve a main, que todavía imprime Fin."
    },
    {
      "id": "PE-T05-11",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "La declaración visible es `int contar(int a, int b);`. ¿Qué definición corresponde a ese contrato?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "void contar(int inicio, int fin)\n{\n    printf(\"%d\", fin - inicio + 1);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int contar(double inicio, double fin)\n{\n    return fin - inicio + 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int contar(int inicio, int fin)\n{\n    return fin - inicio + 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int contar(int inicio)\n{\n    return inicio;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Los nombres de parámetros pueden cambiar; deben mantenerse el tipo de retorno, la cantidad y los tipos de los parámetros."
    },
    {
      "id": "PE-T05-12",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué valores se devuelven por los parámetros de salida?",
      "code": "void dividir(int a, int b, int *c, int *r)\n{\n    *c = a / b;\n    *r = a % b;\n}\n\nint main(void)\n{\n    int c = -1, r = -1;\n    dividir(23, 4, &c, &r);\n    printf(\"%d %d\", c, r);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "5 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "23 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "6 -1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "23/4 es 5 con división entera y 23%4 es 3. Las escrituras a través de los punteros actualizan c y r."
    },
    {
      "id": "PE-T05-13",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "Se desea una función reutilizable que indique con retorno si n pertenece al intervalo cerrado [min,max], con min<=max. ¿Qué definición cumple el contrato?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int en_rango(int n, int min, int max)\n{\n    return n >= min && n <= max;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "void en_rango(int n, int min, int max)\n{\n    printf(\"%d\", n >= min && n <= max);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int en_rango(int n, int min, int max)\n{\n    return n >= min || n <= max;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int en_rango(int n, int min, int max)\n{\n    return min < n && n < max;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "El retorno debe ser un valor lógico utilizable por el llamador y las comparaciones deben incluir los extremos."
    },
    {
      "id": "PE-T05-14",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué se imprime cuando el llamador ignora el retorno de la primera llamada?",
      "code": "int mas_uno(int x)\n{\n    return x + 1;\n}\n\nint main(void)\n{\n    int x = 5;\n    mas_uno(x);\n    printf(\"%d %d\", x, mas_uno(x));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "5 6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6 6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "6 7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Devolver un resultado no asigna automáticamente la variable original. La primera llamada se descarta y la segunda devuelve 6."
    },
    {
      "id": "PE-T05-15",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué se imprime después de redirigir solo la copia local de un puntero?",
      "code": "void redirigir(int *p, int *q)\n{\n    p = q;\n    (*p)++;\n}\n\nint main(void)\n{\n    int a = 2, b = 8;\n    redirigir(&a, &b);\n    printf(\"%d %d\", a, b);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "9 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8 9",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "p=q modifica la copia local de p. Su nueva dirección es la de b; incrementar *p modifica b y deja a intacta."
    },
    {
      "id": "PE-T05-16",
      "topic": 5,
      "difficulty": "media",
      "prompt": "Con la declaración `void reporte(void);`, ¿qué uso ejecuta el reporte sin tratarlo como una expresión con valor?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int r = reporte();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "printf(\"%d\", reporte());",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (reporte() > 0)\n    printf(\"ok\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "reporte();",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Una función void se puede llamar como una instrucción. No proporciona un valor para asignarlo, imprimirlo o compararlo."
    },
    {
      "id": "PE-T05-17",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué efecto tiene una salida anticipada sobre la variable apuntada?",
      "code": "void aplicar(int *n, int factor)\n{\n    if (factor < 0)\n        return;\n    *n *= factor;\n}\n\nint main(void)\n{\n    int n = 5;\n    aplicar(&n, -3);\n    aplicar(&n, 2);\n    printf(\"%d\", n);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La primera llamada sale antes de escribir. La segunda multiplica el valor 5 por 2 y lo deja en 10."
    },
    {
      "id": "PE-T05-18",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "Con a>=0, b>=0 y punteros de salida válidos y distintos, ¿qué función devuelve 0 y deja intactas las salidas si b es cero, y en otro caso escribe cociente y resto y devuelve 1?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int dividir(int a, int b, int *c, int *r)\n{\n    *c = a / b;\n    *r = a % b;\n    if (b == 0)\n        return 0;\n    return 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int dividir(int a, int b, int *c, int *r)\n{\n    if (b != 0)\n        return 0;\n    *c = a / b;\n    *r = a % b;\n    return 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int dividir(int a, int b, int *c, int *r)\n{\n    if (b == 0)\n    {\n        *c = 0;\n        *r = 0;\n        return 0;\n    }\n    *c = a / b;\n    *r = a % b;\n    return 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int dividir(int a, int b, int *c, int *r)\n{\n    if (b == 0)\n        return 0;\n    *c = a / b;\n    *r = a % b;\n    return 1;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "La validación debe ejecutarse antes de las operaciones y salir sin escribir ante b=0. Después se escriben ambos resultados y se informa éxito."
    },
    {
      "id": "PE-T05-19",
      "topic": 5,
      "difficulty": "media",
      "prompt": "¿Qué imprime el programa al usar funciones con una responsabilidad cada una?",
      "code": "int mayor(int a, int b)\n{\n    if (a > b)\n        return a;\n    return b;\n}\nint cuadrado(int n)\n{\n    return n * n;\n}\n\nint main(void)\n{\n    int a = 4, b = 9;\n    int m = mayor(a, b);\n    printf(\"%d %d\", m, cuadrado(m));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "4 16",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 18",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "9 81",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "13 169",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "mayor devuelve 9, y el mismo valor se envía a cuadrado, que devuelve 81."
    },
    {
      "id": "PE-T05-20",
      "topic": 5,
      "difficulty": "dificil",
      "prompt": "¿Qué error de interfaz presenta este programa en C11?",
      "code": "int calcular(int n);\nint calcular(double n)\n{\n    return (int)(n * 2);\n}\nint main(void)\n{\n    return calcular(3);\n}",
      "options": [
        {
          "id": "A",
          "text": "Los nombres de los parámetros están repetidos y eso está prohibido.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "No hay conflicto: C sobrecarga automáticamente calcular por el tipo del argumento.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "El prototipo y la definición declaran parámetros de tipos incompatibles.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "Una función int no puede contener un casting a int.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "C",
      "explanation": "C no ofrece esta sobrecarga. El parámetro anunciado como int debe coincidir con el tipo de la definición."
    },
    {
      "id": "PE-T06-01",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué valores se imprimen después de una inicialización parcial?",
      "code": "int v[5] = {4, 7};\nprintf(\"%d %d %d\", v[0], v[2], v[4]);",
      "options": [
        {
          "id": "A",
          "text": "No se puede determinar: las posiciones restantes no se inicializan.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4 7 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 7 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 0 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La inicialización parcial de un arreglo inicializa en cero los elementos restantes. No es lo mismo que declararlo sin inicializador."
    },
    {
      "id": "PE-T06-02",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "El arreglo se modifica durante el recorrido. ¿Cuál es su contenido final?",
      "code": "int v[] = {1, 2, 3, 4};\nfor (int i = 1; i < 4; i++)\n    v[i] += v[i - 1];\nfor (int i = 0; i < 4; i++)\n    printf(\"%d \", v[i]);",
      "options": [
        {
          "id": "A",
          "text": "1 2 3 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2 4 6 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 3 5 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 3 6 10",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Cada suma utiliza el elemento anterior ya modificado. Las acumulaciones sucesivas dan 3,6 y 10."
    },
    {
      "id": "PE-T06-03",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué se modifica en el llamador al enviar un arreglo y un entero?",
      "code": "void modificar(int v[], int n)\n{\n    v[0] = 8;\n    n = 9;\n}\n\nint main(void)\n{\n    int v[] = {3, 4}, n = 2;\n    modificar(v, n);\n    printf(\"%d %d\", v[0], n);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "3 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "8 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El parámetro de arreglo permite acceder al arreglo original. n se recibe por valor y su asignación local no cambia el n del llamador."
    },
    {
      "id": "PE-T06-04",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "¿Por qué este cálculo no permite obtener en general el número de elementos enviado?",
      "code": "void mostrar(int v[])\n{\n    size_t n = sizeof(v) / sizeof(v[0]);\n    printf(\"%zu\", n);\n}\nint datos[12];\n/* llamada: mostrar(datos); */",
      "options": [
        {
          "id": "A",
          "text": "El problema se resuelve cambiando size_t por int sin tocar la interfaz.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "El cálculo funciona y siempre imprime 12.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "sizeof(v) siempre vale cero cuando se recibe un arreglo.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "Dentro de la función v es un parámetro ajustado a puntero; debe recibirse también la cantidad.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "sizeof(v) mide el puntero del parámetro, no los 12 enteros originales. La cantidad se debe pasar por separado."
    },
    {
      "id": "PE-T06-05",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué cadena y longitud quedan después de copiar y concatenar?",
      "code": "char texto[20];\nstrcpy(texto, \"FIAD\");\nstrcat(texto, \"-PE\");\nprintf(\"%s %zu\", texto, strlen(texto));",
      "options": [
        {
          "id": "A",
          "text": "-PE 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "FIAD-PE 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "FIADPE 6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "FIAD-PE 7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "strcpy establece FIAD y strcat agrega -PE al final. strlen cuenta siete caracteres, sin incluir el nulo."
    },
    {
      "id": "PE-T06-06",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "Distingue capacidad del arreglo y longitud visible. ¿Qué se imprime?",
      "code": "char texto[] = {'A', 'B', '\\0', 'C', '\\0'};\nprintf(\"%zu %zu %s\", sizeof(texto), strlen(texto), texto);",
      "options": [
        {
          "id": "A",
          "text": "5 2 AB",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 5 ABC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 2 AB",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5 4 ABC",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El arreglo tiene cinco char. Las funciones de cadena se detienen en el primer nulo, por lo que solo ven AB."
    },
    {
      "id": "PE-T06-07",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "La entrada es `ABCDE` seguida de Enter. ¿Qué lee cada operación si ambas tienen éxito?",
      "code": "char s[4];\nint c;\nfgets(s, sizeof(s), stdin);\nc = getchar();\nprintf(\"[%s] %c\", s, c);",
      "options": [
        {
          "id": "A",
          "text": "[ABC] D",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "[ABC] E",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "[ABCD] E",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "[ABCDE] \n",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "fgets puede almacenar a lo sumo tres caracteres y el nulo. Deja D,E y el salto en la entrada; getchar consume D."
    },
    {
      "id": "PE-T06-08",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "La entrada es `20` seguida de Enter y después `Ana` seguida de Enter. ¿Qué imprime?",
      "code": "int edad;\nchar nombre[20];\nscanf(\"%d\", &edad);\nfgets(nombre, sizeof(nombre), stdin);\nnombre[strcspn(nombre, \"\\n\")] = '\\0';\nprintf(\"%d [%s]\", edad, nombre);",
      "options": [
        {
          "id": "A",
          "text": "0 [Ana]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "20 [Ana]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "20 [20]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20 []",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "scanf consume el entero y deja el salto. fgets lee ese salto pendiente y, al eliminarlo, la cadena queda vacía."
    },
    {
      "id": "PE-T06-09",
      "topic": 6,
      "difficulty": "media",
      "prompt": "Solo se pregunta por el signo de strcmp, no por una magnitud específica. ¿Qué se imprime?",
      "code": "char a[] = \"ANA\", b[] = \"ANA\", c[] = \"ANB\";\nprintf(\"%d %d\", strcmp(a, b) == 0, strcmp(a, c) < 0);",
      "options": [
        {
          "id": "A",
          "text": "1 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Las primeras cadenas tienen el mismo contenido. ANA precede a ANB al comparar los últimos caracteres; ambas condiciones son verdaderas."
    },
    {
      "id": "PE-T06-10",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué bloque obtiene la longitud de una cadena válida s sin contar su terminador y sin modificarla?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int n = 0;\ndo\n{\n    n++;\n} while (s[n - 1] != '\\0');\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int n = 0;\nwhile (s[n] != '\\0')\n    n++;\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int n = 0;\nwhile (s[n] != '\\0')\n{\n    s[n] = '\\0';\n    n++;\n}\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int n = 0;\nwhile (s[n] == '\\0')\n    n++;\nprintf(\"%d\", n);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "El recorrido debe detenerse antes de contar el nulo y limitarse a leer. La última alternativa altera la cadena aunque pueda contar caracteres."
    },
    {
      "id": "PE-T06-11",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué suma produce el recorrido de la diagonal principal?",
      "code": "int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\nint s = 0;\nfor (int i = 0; i < 3; i++)\n    s += m[i][i];\nprintf(\"%d\", s);",
      "options": [
        {
          "id": "A",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "12",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "45",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "18",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Se leen m[0][0]=1, m[1][1]=5 y m[2][2]=9. La suma es 15."
    },
    {
      "id": "PE-T06-12",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "Para `int m[2][3]` y `int t[3][2]`, ¿qué bloque construye la transpuesta sin salir de los límites?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "for (int i = 0; i <= 2; i++)\n    for (int j = 0; j <= 3; j++)\n        t[j][i] = m[i][j];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "for (int i = 0; i < 3; i++)\n    for (int j = 0; j < 2; j++)\n        t[j][i] = m[i][j];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "for (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        t[j][i] = m[i][j];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "for (int i = 0; i < 2; i++)\n    for (int j = 0; j < 3; j++)\n        t[i][j] = m[i][j];",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Al transponer se intercambian fila y columna. Los límites del origen son dos filas y tres columnas, ambos exclusivos."
    },
    {
      "id": "PE-T06-13",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué cadenas se imprimen después de copiar solamente una fila del arreglo?",
      "code": "char dias[3][10] = {\"Lunes\", \"Martes\", \"Jueves\"};\nstrcpy(dias[1], dias[0]);\nprintf(\"%s %s\", dias[1], dias[2]);",
      "options": [
        {
          "id": "A",
          "text": "Martes Jueves",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "Martes Lunes",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Lunes Jueves",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "Lunes Lunes",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "Se copia el contenido de la fila cero a la fila uno. La fila dos sigue conteniendo Jueves."
    },
    {
      "id": "PE-T06-14",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "Se tiene `char destino[6] = \"Hola\";`. ¿Qué bloque puede ejecutarse sin desbordar el arreglo?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "strcat(destino, \"PE\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "strcat(destino, \"!!\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "strcat(destino, \"!\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "strcpy(destino, \"Saludos\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Hola! ocupa cinco caracteres y un nulo: seis posiciones. Las otras operaciones necesitan siete o más."
    },
    {
      "id": "PE-T06-15",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Cuál es el diagnóstico correcto? No se debe inventar una salida para el acceso inválido.",
      "code": "int v[4] = {1, 2, 3, 4};\nprintf(\"%d\", v[4]);",
      "options": [
        {
          "id": "A",
          "text": "Imprime siempre 0 porque todos los arreglos terminan en cero.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "Imprime siempre 4 porque el tamaño también es un índice válido.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "El índice está fuera del arreglo y la evaluación tiene comportamiento indefinido.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "No compila: C comprueba siempre todos los índices en compilación.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "C",
      "explanation": "Los índices válidos son 0,1,2 y 3. C no garantiza un diagnóstico de compilación ni un valor para v[4]."
    },
    {
      "id": "PE-T06-16",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "¿Qué bloque invierte un arreglo v de n elementos sin deshacer luego los intercambios?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "for (int i = 0; i < n / 2; i++)\n{\n    int t = v[i];\n    v[i] = v[n - i];\n    v[n - i] = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "for (int i = 0; i < n / 2; i++)\n{\n    v[i] = v[n - 1 - i];\n    v[n - 1 - i] = v[i];\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "for (int i = 0; i < n / 2; i++)\n{\n    int t = v[i];\n    v[i] = v[n - 1 - i];\n    v[n - 1 - i] = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "for (int i = 0; i < n; i++)\n{\n    int t = v[i];\n    v[i] = v[n - 1 - i];\n    v[n - 1 - i] = t;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Solo se intercambia media colección y se conserva un temporal. Recorrer todo intercambia cada pareja dos veces."
    },
    {
      "id": "PE-T06-17",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "Si no existe un cero dentro de las n posiciones válidas, ¿qué defecto tiene el orden de la condición?",
      "code": "int i = 0;\nwhile (v[i] != 0 && i < n)\n    i++;",
      "options": [
        {
          "id": "A",
          "text": "La única corrección necesaria es sustituir && por ||.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "No hay defecto: && siempre evalúa primero la condición que contiene el tamaño.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Cuando i llega a n, se intenta leer v[n] antes de comprobar el límite; debe probarse i<n primero.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "El arreglo se amplía automáticamente para almacenar el centinela.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "C",
      "explanation": "&& evalúa primero su operando izquierdo. La comprobación i<n debe preceder al acceso para que el cortocircuito lo proteja."
    },
    {
      "id": "PE-T06-18",
      "topic": 6,
      "difficulty": "dificil",
      "prompt": "El índice se calcula con un valor del propio arreglo. ¿Qué se imprime?",
      "code": "int v[] = {2, 0, 1};\nv[v[0]] = 7;\nprintf(\"%d %d %d\", v[0], v[1], v[2]);",
      "options": [
        {
          "id": "A",
          "text": "2 7 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "7 0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "7 0 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2 0 7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "v[0] vale 2, de modo que el destino es v[2]. Ninguna de las otras posiciones se modifica."
    },
    {
      "id": "PE-T06-19",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué parte del arreglo se modifica al pasar una dirección interior?",
      "code": "void subir(int a[], int n)\n{\n    for (int i = 0; i < n; i++)\n        a[i] += 10;\n}\n\nint main(void)\n{\n    int v[] = {5, 6, 7, 8};\n    subir(v + 1, 2);\n    for (int i = 0; i < 4; i++)\n        printf(\"%d \", v[i]);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "15 16 17 18",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "15 16 7 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "5 6 17 18",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5 16 17 8",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El parámetro comienza en la posición uno del arreglo original. Sus dos elementos son v[1] y v[2]."
    },
    {
      "id": "PE-T06-20",
      "topic": 6,
      "difficulty": "media",
      "prompt": "¿Qué ocurre al eliminar el salto de línea cuando la cadena no contiene ninguno?",
      "code": "char s[10] = \"Ana\";\ns[strcspn(s, \"\\n\")] = '\\0';\nprintf(\"%s %zu\", s, strlen(s));",
      "options": [
        {
          "id": "A",
          "text": "An 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "Ana 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": " 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "Ana 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "strcspn devuelve la longitud 3 al no hallar el salto. Se vuelve a escribir el nulo en su misma posición y no se pierde la última letra."
    },
    {
      "id": "PE-T07-01",
      "topic": 7,
      "difficulty": "media",
      "prompt": "¿Qué valores conserva cada copia de la estructura?",
      "code": "typedef struct\n{\n    int edad;\n    char nombre[8];\n} Alumno;\n\nint main(void)\n{\n    Alumno a = {20, \"Ana\"};\n    Alumno b = a;\n    b.edad = 25;\n    b.nombre[0] = 'E';\n    printf(\"%d %s %d %s\", a.edad, a.nombre, b.edad, b.nombre);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "25 Ena 25 Ena",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "20 Ena 25 Ena",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "20 Ana 20 Ana",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20 Ana 25 Ena",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La asignación de estructuras copia también el arreglo miembro. Cambiar los campos de b no cambia los de a."
    },
    {
      "id": "PE-T07-02",
      "topic": 7,
      "difficulty": "media",
      "prompt": "¿Qué edad queda al pasar una estructura por valor?",
      "code": "typedef struct\n{\n    int edad;\n} Alumno;\nvoid actualizar(Alumno a)\n{\n    a.edad = 30;\n}\n\nint main(void)\n{\n    Alumno a = {19};\n    actualizar(a);\n    printf(\"%d\", a.edad);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "49",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "19",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "30",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "El parámetro es una copia completa. La asignación dentro de actualizar no modifica el objeto a de main."
    },
    {
      "id": "PE-T07-03",
      "topic": 7,
      "difficulty": "media",
      "prompt": "¿Qué valor se imprime después de modificar mediante un puntero a estructura?",
      "code": "typedef struct\n{\n    int edad;\n} Alumno;\nvoid actualizar(Alumno *a)\n{\n    a->edad += 2;\n}\n\nint main(void)\n{\n    Alumno a = {19};\n    actualizar(&a);\n    printf(\"%d\", a.edad);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "19",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "21",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "a->edad accede al campo del objeto señalado, por lo que el incremento queda visible en el llamador."
    },
    {
      "id": "PE-T07-04",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "Con las declaraciones mostradas, ¿qué instrucción copia el apellido al campo correcto?",
      "code": "typedef struct\n{\n    char appat[12];\n} Nombre;\ntypedef struct\n{\n    Nombre nombre;\n    int edad;\n} Alumno;\nAlumno alumno;",
      "options": [
        {
          "id": "A",
          "text": "strcpy(alumno->nombre.appat, \"LOPEZ\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "alumno.nombre.appat = \"LOPEZ\";",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "strcpy(alumno.nombre.appat, \"LOPEZ\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "strcpy(alumno.appat, \"LOPEZ\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se requiere la ruta alumno.nombre.appat y una copia de cadena. alumno es una variable normal, no un puntero."
    },
    {
      "id": "PE-T07-05",
      "topic": 7,
      "difficulty": "media",
      "prompt": "Solo se lee el miembro escrito más recientemente. ¿Qué imprime?",
      "code": "typedef union\n{\n    int entero;\n    float decimal;\n} Dato;\n\nint main(void)\n{\n    Dato d;\n    d.entero = 18;\n    d.decimal = 2.5f;\n    printf(\"%.1f\", d.decimal);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "20.5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2.5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "18.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0.0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "La escritura en decimal reutiliza la memoria de la unión. Leer decimal inmediatamente después recupera el valor 2.5f."
    },
    {
      "id": "PE-T07-06",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "¿Qué valores enteros corresponden a las constantes de la enumeración?",
      "code": "typedef enum\n{\n    INACTIVO = 0,\n    ACTIVO = 4,\n    PAUSA,\n    FINAL = 9\n} Estado;\n\nint main(void)\n{\n    printf(\"%d %d %d\", ACTIVO, PAUSA, FINAL);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "4 5 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 2 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 4 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 5 6",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Después de ACTIVO=4, PAUSA toma el siguiente valor: 5. FINAL tiene una asignación explícita a 9."
    },
    {
      "id": "PE-T07-07",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "¿Qué conclusión es correcta sin suponer alineación ni tamaños de la plataforma?",
      "code": "struct Registro\n{\n    char marca;\n    int clave;\n};\nprintf(\"%zu\", sizeof(struct Registro));",
      "options": [
        {
          "id": "A",
          "text": "El tamaño es la cantidad de campos: 2.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "El tamaño debe ser exactamente sizeof(int), porque char comparte su memoria.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "El tamaño es siempre 5 bytes, aun si int ocupa dos bytes.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "El tamaño puede incluir relleno; no se garantiza que sea sizeof(char)+sizeof(int).",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "Los campos de un struct tienen almacenamiento propio y pueden existir bytes de relleno por alineación. Se consulta con sizeof."
    },
    {
      "id": "PE-T07-08",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "Con un arreglo de n registros, ¿qué bloque suma únicamente las edades de los activos?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int s = 0;\nfor (int i = 0; i < n; i++)\n    if (g[i].status == 0)\n        s += g[i].edad;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int s = 0;\nfor (int i = 0; i < n; i++)\n    if (g[i].status = 1)\n        s += g[i].edad;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int s = 0;\nfor (int i = 1; i < n; i++)\n    if (g[i].status == 1)\n        s += g[i].edad;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int s = 0;\nfor (int i = 0; i < n; i++)\n    if (g[i].status == 1)\n        s += g[i].edad;\nprintf(\"%d\", s);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Se revisan todas las posiciones desde cero y se compara el estado sin cambiarlo."
    },
    {
      "id": "PE-T07-09",
      "topic": 7,
      "difficulty": "media",
      "prompt": "¿Qué problema presenta la asignación del nombre después de declarar el registro?",
      "code": "typedef struct\n{\n    char nombre[20];\n    int edad;\n} Alumno;\nAlumno a;\na.nombre = \"Pedro\";",
      "options": [
        {
          "id": "A",
          "text": "La solución es convertir edad en double.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "Solo falta poner & antes del texto Pedro.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "La asignación es válida y siempre reserva un arreglo más grande.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "El miembro es un arreglo y no admite esa asignación; puede usarse strcpy con capacidad suficiente.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "La asignación individual a un arreglo char no existe en C. Eso no impide inicializarlo al declarar la estructura o copiarlo con funciones de cadenas."
    },
    {
      "id": "PE-T07-10",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "¿Qué efecto tiene asignar una estructura anidada completa?",
      "code": "typedef struct\n{\n    int dia, mes;\n} Fecha;\ntypedef struct\n{\n    Fecha fecha;\n    int edad;\n} Alumno;\n\nint main(void)\n{\n    Alumno a = {{8, 3}, 20};\n    Alumno b = a;\n    b.fecha.dia = 10;\n    printf(\"%d %d\", a.fecha.dia, b.fecha.dia);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "8 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8 10",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La copia incluye los campos de la estructura Fecha. La modificación del día de b no se propaga al día de a."
    },
    {
      "id": "PE-T07-11",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "¿Qué diagnóstico corresponde a la comparación de dos registros?",
      "code": "typedef struct\n{\n    int clave, edad;\n} Alumno;\nAlumno a = {1, 20}, b = {1, 20};\nif (a == b)\n    printf(\"iguales\");",
      "options": [
        {
          "id": "A",
          "text": "C no define == entre estructuras; hay que comparar los campos pertinentes.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "Imprime iguales porque las estructuras tienen los mismos valores.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Compara automáticamente solo el primer campo.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "Compara sus direcciones y siempre produce falso.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "A",
      "explanation": "Los operandos struct no admiten el operador == de C. La igualdad lógica debe definirse comparando campos; no conviene inferirla de bytes de relleno."
    },
    {
      "id": "PE-T07-12",
      "topic": 7,
      "difficulty": "media",
      "prompt": "Con `Alumno *p = &grupo[2];`, ¿qué bloque actualiza la edad del tercer registro?",
      "code": "typedef struct\n{\n    int edad;\n} Alumno;\nAlumno grupo[4] = {{10}, {11}, {12}, {13}};\nAlumno *p = &grupo[2];",
      "options": [
        {
          "id": "A",
          "text": "p->edad = 24;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "(*p->edad) = 24;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "grupo[3].edad = 24;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "p.edad = 24;",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "El índice 2 identifica el tercer elemento y -> permite acceder al campo de la estructura apuntada."
    },
    {
      "id": "PE-T07-13",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "Ambos parámetros señalan el mismo registro. ¿Qué edad queda?",
      "code": "typedef struct\n{\n    int edad;\n} Alumno;\nvoid ajustar(Alumno *a, Alumno *b)\n{\n    a->edad += 2;\n    b->edad *= 2;\n}\n\nint main(void)\n{\n    Alumno a = {10};\n    ajustar(&a, &a);\n    printf(\"%d\", a.edad);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "24",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "12",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "22",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Primero el único registro pasa a 12. El segundo parámetro señala el mismo objeto y lo multiplica por dos."
    },
    {
      "id": "PE-T07-14",
      "topic": 7,
      "difficulty": "media",
      "prompt": "Una función recibe una estructura por valor y devuelve la copia actualizada. ¿Qué llamada conserva el cambio en a?",
      "code": "typedef struct\n{\n    int edad;\n} Alumno;\nAlumno cumplir(Alumno a)\n{\n    a.edad++;\n    return a;\n}\nAlumno a = {20};",
      "options": [
        {
          "id": "A",
          "text": "cumplir(a);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "a.edad = cumplir(a);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "a = cumplir(a);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "cumplir(&a);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "La estructura devuelta debe asignarse de nuevo al objeto original. La llamada sola descarta el resultado."
    },
    {
      "id": "PE-T07-15",
      "topic": 7,
      "difficulty": "dificil",
      "prompt": "El campo tipo indica el miembro activo: ENTERO o REAL. ¿Qué bloque muestra el miembro que corresponde a cada variante?",
      "code": "enum\n{\n    ENTERO,\n    REAL\n};\ntypedef struct\n{\n    int tipo;\n    union\n    {\n        int entero;\n        float real;\n    } dato;\n} Registro;\nRegistro r; /* tipo y miembro correspondiente ya inicializados */",
      "options": [
        {
          "id": "A",
          "text": "if (r.tipo = ENTERO)\n    printf(\"%d\", r.dato.entero);\nelse\n    printf(\"%.1f\", r.dato.real);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "printf(\"%d %.1f\", r.dato.entero, r.dato.real);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (r.tipo == ENTERO)\n    printf(\"%.1f\", r.dato.real);\nelse\n    printf(\"%d\", r.dato.entero);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (r.tipo == ENTERO)\n    printf(\"%d\", r.dato.entero);\nelse\n    printf(\"%.1f\", r.dato.real);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "El indicador selecciona qué representación contiene un valor válido. No se deben tratar ambos miembros como si conservaran valores independientes."
    },
    {
      "id": "PE-T08-01",
      "topic": 8,
      "difficulty": "media",
      "prompt": "Un alias conserva las operaciones y conversiones del tipo base. ¿Qué se imprime?",
      "code": "typedef int Tkey;\ntypedef double Tpromedio;\n\nint main(void)\n{\n    Tkey a = 9, b = 4;\n    Tpromedio r = a / b;\n    printf(\"%.1f\", r);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "9.4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2.25",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "Los operandos siguen siendo int porque Tkey es un alias. La división entrega 2 antes de convertirse al tipo double del resultado."
    },
    {
      "id": "PE-T08-02",
      "topic": 8,
      "difficulty": "media",
      "prompt": "¿Qué declaración usa correctamente el alias de la estructura sin inventar otra etiqueta?",
      "code": "typedef struct Alumno\n{\n    int edad;\n} sTalum;",
      "options": [
        {
          "id": "A",
          "text": "sTalum struct alumno = {20};",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "sTalum alumno = {20};",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "struct alumno sTalum = {20};",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "struct sTalum alumno = {20};",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "sTalum es el nombre del alias; la etiqueta real es Alumno. struct sTalum nombraría otra etiqueta que no se ha definido."
    },
    {
      "id": "PE-T08-03",
      "topic": 8,
      "difficulty": "dificil",
      "prompt": "El alias representa un arreglo completo. ¿Qué cantidad se imprime?",
      "code": "typedef int Tvector[3];\n\nint main(void)\n{\n    Tvector datos = {3, 4, 5};\n    printf(\"%zu %d\", sizeof(datos) / sizeof(datos[0]), datos[2]);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "3 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "12 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Tvector conserva el tipo arreglo de tres enteros. En ese ámbito sizeof(datos)/sizeof(datos[0]) da 3."
    },
    {
      "id": "PE-T08-04",
      "topic": 8,
      "difficulty": "dificil",
      "prompt": "¿Qué valor cambia al combinar un alias y un puntero al tipo original?",
      "code": "typedef int Tkey;\n\nint main(void)\n{\n    Tkey clave = 12;\n    int *p = &clave;\n    *p = 18;\n    printf(\"%d\", clave);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "12",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "No compila: un alias siempre crea un tipo incompatible.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "18",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Tkey e int son el mismo tipo para compatibilidad. Por ello int* puede señalar clave y modificarla."
    },
    {
      "id": "PE-T08-05",
      "topic": 8,
      "difficulty": "media",
      "prompt": "Se necesitan nombres Tkey y Tflag como alias separados de int. ¿Qué bloque declara ambos y permite inicializarlos?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "typedef int Tkey;\ntypedef int Tflag;\nTkey clave = 2;\nTflag activo = 1;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "typedef int Tkey;\nTkey = Tflag;\nTflag activo = 1;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int typedef = Tkey;\nint typedef = Tflag;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "typedef Tkey int;\ntypedef Tflag int;\nTkey clave = 2;",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "Cada typedef nombra un tipo existente con un alias nuevo. Los otros fragmentos no forman las declaraciones de tipo requeridas."
    },
    {
      "id": "PE-T08-06",
      "topic": 8,
      "difficulty": "dificil",
      "prompt": "El mismo archivo tipos.h se incluye directamente y a través de otra cabecera. ¿Qué versión protege correctamente la definición de la estructura?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "#define TIPOS_H\ntypedef struct\n{\n    int clave;\n} sTalum;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "#ifndef TIPOS_H\ntypedef struct\n{\n    int clave;\n} sTalum;\n#endif",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "#ifdef TIPOS_H\n#define TIPOS_H\ntypedef struct\n{\n    int clave;\n} sTalum;\n#endif",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "#ifndef TIPOS_H\n#define TIPOS_H\ntypedef struct\n{\n    int clave;\n} sTalum;\n#endif",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "La primera inclusión define la macro dentro de la condición #ifndef. Las siguientes inclusiones omiten la definición protegida."
    },
    {
      "id": "PE-T08-07",
      "topic": 8,
      "difficulty": "media",
      "prompt": "La llave debe poder representar 8000000000 de manera garantizada. ¿Qué cambio central del alias y de su salida es coherente?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "typedef short Tkey;\nTkey k = 8000000000LL;\nprintf(\"%hd\", k);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "typedef long long Tkey;\nTkey k = 8000000000LL;\nprintf(\"%lld\", k);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "typedef long long Tkey;\nTkey k = 8000000000LL;\nprintf(\"%d\", k);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "typedef char Tkey;\nTkey k = 8000000000LL;\nprintf(\"%c\", k);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "El rango de long long es suficiente y %lld corresponde al tipo base. Cambiar el alias también exige revisar interfaces y formatos."
    },
    {
      "id": "PE-T08-08",
      "topic": 8,
      "difficulty": "dificil",
      "prompt": "¿Qué se imprime al usar dos variables declaradas con un alias de puntero?",
      "code": "typedef int *Tpuntero;\n\nint main(void)\n{\n    int x = 3, y = 7;\n    Tpuntero a = &x, b = &y;\n    *a += *b;\n    printf(\"%d %d\", x, y);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "10 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "No compila porque b no es puntero.",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "El alias completo representa int*. Tanto a como b son punteros; la asignación mediante *a modifica únicamente x."
    },
    {
      "id": "PE-T08-09",
      "topic": 8,
      "difficulty": "dificil",
      "prompt": "Se requiere un contador sin signo exactamente de 32 bits y la implementación proporciona uint32_t. ¿Qué alias expresa ese requisito?",
      "code": "#include <stdint.h>",
      "options": [
        {
          "id": "A",
          "text": "typedef unsigned long Tcontador;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "typedef int32_t Tcontador;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "typedef uint32_t Tcontador;",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "typedef unsigned int Tcontador;",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "uint32_t expresa el ancho exacto y la ausencia de signo. unsigned int y unsigned long no garantizan 32 bits en todas las implementaciones."
    },
    {
      "id": "PE-T08-10",
      "topic": 8,
      "difficulty": "media",
      "prompt": "El nombre sigue una convención, pero el compilador obedece a la declaración. ¿Qué imprime?",
      "code": "typedef int sTnom;\n\nint main(void)\n{\n    sTnom dato = 5;\n    printf(\"%d\", dato + 2);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "No compila: todo nombre que empieza por sT debe ser una estructura.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Aunque contradiga la convención de clase, el código declara sTnom como alias de int. Los prefijos no cambian las reglas del lenguaje."
    },
    {
      "id": "PE-T09-01",
      "topic": 9,
      "difficulty": "media",
      "prompt": "¿Qué valor devuelve la recursión con su caso base?",
      "code": "int factorial(int n)\n{\n    if (n == 0)\n        return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void)\n{\n    printf(\"%d\", factorial(5));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "120",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "24",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Las llamadas llegan a factorial(0)=1 y al regresar multiplican 1*2*3*4*5: 120."
    },
    {
      "id": "PE-T09-02",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "¿En qué orden se imprime antes y después de cada llamada?",
      "code": "void traza(int n)\n{\n    if (n == 0)\n        return;\n    printf(\"%d \", n);\n    traza(n - 1);\n    printf(\"%d \", n);\n}\n\nint main(void)\n{\n    traza(3);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "1 2 3 3 2 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3 2 1 1 2 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 2 1 0 1 2 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 2 1 3 2 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "La primera impresión ocurre al descender: 3,2,1. La segunda ocurre al regresar desde el caso base: 1,2,3."
    },
    {
      "id": "PE-T09-03",
      "topic": 9,
      "difficulty": "media",
      "prompt": "¿Qué resultado produce la reducción por división entera?",
      "code": "int suma_digitos(int n)\n{\n    if (n == 0)\n        return 0;\n    return n % 10 + suma_digitos(n / 10);\n}\n\nint main(void)\n{\n    printf(\"%d\", suma_digitos(508));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "508",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "13",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "58",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "Los últimos dígitos son 8,0 y 5. La reducción n/10 conduce a cero y la suma resulta 13."
    },
    {
      "id": "PE-T09-04",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "Cada llamada tiene su propia variable local. ¿Qué se imprime al regresar?",
      "code": "void f(int n)\n{\n    int local = n * 10;\n    if (n == 0)\n        return;\n    f(n - 1);\n    printf(\"%d \", local);\n}\n\nint main(void)\n{\n    f(3);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "30 20 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 20 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10 10 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "30 30 30",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Cada marco conserva su local. Como printf está después de la llamada, se imprimen los locales de n=1,2,3 en ese orden."
    },
    {
      "id": "PE-T09-05",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "Se cuenta cada entrada, incluidos los casos base. ¿Cuántas llamadas y qué resultado se imprimen?",
      "code": "int llamadas = 0;\nint fib(int n)\n{\n    int a, b;\n    llamadas++;\n    if (n <= 1)\n        return n;\n    a = fib(n - 1);\n    b = fib(n - 2);\n    return a + b;\n}\n\nint main(void)\n{\n    int r = fib(4);\n    printf(\"%d %d\", llamadas, r);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "7 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "9 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "9 3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El conteo cumple C(n)=1+C(n-1)+C(n-2), con C(0)=C(1)=1. Así C(4)=9 y fib(4)=3."
    },
    {
      "id": "PE-T09-06",
      "topic": 9,
      "difficulty": "media",
      "prompt": "¿Qué función calcula factorial para todos los n de 0 a 7, incluido 0!=1?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int fact(int n)\n{\n    if (n == 0)\n        return 1;\n    return n * fact(n + 1);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int fact(int n)\n{\n    if (n == 0)\n        return 1;\n    return n * fact(n - 1);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int fact(int n)\n{\n    if (n == 1)\n        return 1;\n    return n * fact(n - 1);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int fact(int n)\n{\n    if (n == 0)\n        return 0;\n    return n * fact(n - 1);\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "El caso n=0 debe devolver 1 y la reducción debe decrementar n. Detenerse solo en 1 no cubre la entrada cero."
    },
    {
      "id": "PE-T09-07",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "¿Qué defecto aparece con la llamada f(5)? No se solicita una salida tras agotar recursos.",
      "code": "int f(int n)\n{\n    if (n == 0)\n        return 0;\n    return 1 + f(n - 2);\n}",
      "options": [
        {
          "id": "A",
          "text": "No compila porque no pueden restarse dos unidades en una llamada recursiva.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "La sucesión 5,3,1,-1,... no alcanza cero; el algoritmo no garantiza terminar y acabará fallando al continuar.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Se detiene en n=1 aunque no exista ese caso base.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "Devuelve siempre 3 porque cualquier negativo se convierte automáticamente en cero.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "Restar dos conserva la paridad. Desde un impar no se llega a cero; antes de producir un resultado válido se agotarán recursos o se llegará a un desbordamiento."
    },
    {
      "id": "PE-T09-08",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "Para n>=0 se desea contar cuántas divisiones enteras entre dos hacen falta para llegar a cero. ¿Qué función cumple el contrato, con cuenta(0)=0?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int cuenta(int n)\n{\n    if (n <= 1)\n        return 0;\n    return 1 + cuenta(n / 2);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int cuenta(int n)\n{\n    if (n == 0)\n        return 0;\n    return 1 + cuenta(n / 2);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int cuenta(int n)\n{\n    if (n == 0)\n        return 1;\n    return 1 + cuenta(n / 2);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int cuenta(int n)\n{\n    if (n == 0)\n        return 0;\n    return cuenta(n / 2);\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "Cada llamada no base cuenta una división y reduce n. Para n=1 se necesita una división adicional para llegar a cero."
    },
    {
      "id": "PE-T09-09",
      "topic": 9,
      "difficulty": "dificil",
      "prompt": "¿Qué devuelve la potencia recursiva que reutiliza un subresultado?",
      "code": "int potencia(int a, int n)\n{\n    int p;\n    if (n == 0)\n        return 1;\n    p = potencia(a, n / 2);\n    if (n % 2 == 0)\n        return p * p;\n    return a * p * p;\n}\n\nint main(void)\n{\n    printf(\"%d\", potencia(3, 5));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "81",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "243",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "729",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La reducción usa n=5,2,1,0. Las potencias parciales son 1,3,9 y finalmente 3*9*9=243."
    },
    {
      "id": "PE-T09-10",
      "topic": 9,
      "difficulty": "media",
      "prompt": "Contando la llamada inicial y la del caso base, ¿cuántas entradas a g se ejecutan?",
      "code": "int entradas = 0;\nvoid g(int n)\n{\n    entradas++;\n    if (n == 0)\n        return;\n    g(n / 2);\n}\n\nint main(void)\n{\n    g(20);\n    printf(\"%d\", entradas);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Las entradas reciben 20,10,5,2,1 y 0. El marco del caso base también cuenta, para un total de seis."
    },
    {
      "id": "PE-T10-01",
      "topic": 10,
      "difficulty": "media",
      "prompt": "main.c llama a doble y operaciones.c contiene su única definición. operaciones.h tiene el prototipo. ¿Qué comando GCC compila y enlaza ambos fuentes para generar el ejecutable programa?",
      "code": "/* operaciones.h */\nint doble(int);\n/* operaciones.c */\n#include \"operaciones.h\"\nint doble(int x)\n{\n    return 2 * x;\n}\n/* main.c */\n#include \"operaciones.h\"\nint main(void)\n{\n    return doble(3);\n}",
      "options": [
        {
          "id": "A",
          "text": "gcc main.c -o programa",
          "format": "code",
          "language": "bash"
        },
        {
          "id": "B",
          "text": "gcc -c main.c operaciones.c",
          "format": "code",
          "language": "bash"
        },
        {
          "id": "C",
          "text": "gcc main.c operaciones.c -o programa",
          "format": "code",
          "language": "bash"
        },
        {
          "id": "D",
          "text": "gcc operaciones.c -o programa",
          "format": "code",
          "language": "bash"
        }
      ],
      "correctId": "C",
      "explanation": "Se deben incluir los dos .c en el enlace. -c genera objetos sin enlazar y la cabecera no sustituye la definición del otro módulo."
    },
    {
      "id": "PE-T10-02",
      "topic": 10,
      "difficulty": "dificil",
      "prompt": "Se compilan y enlazan main.c y apoyo.c. Ambos incluyen la cabecera mostrada. ¿Qué defecto presenta esta organización?",
      "code": "/* util.h */\n#ifndef UTIL_H\n#define UTIL_H\nint doble(int x)\n{\n    return 2 * x;\n}\n#endif\n/* main.c */\n#include \"util.h\"\nint usar(void);\nint main(void)\n{\n    return doble(usar());\n}\n/* apoyo.c */\n#include \"util.h\"\nint usar(void)\n{\n    return doble(1);\n}",
      "options": [
        {
          "id": "A",
          "text": "Las guardas impiden también las definiciones entre archivos distintos, así que no existe conflicto.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "El problema es que una función no puede llamar a otra definida en un archivo distinto.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Una cabecera no puede contener nunca un prototipo de función.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "La función externa doble queda definida en dos unidades de traducción; conviene dejar el prototipo en .h y una definición en .c.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "D",
      "explanation": "Las guardas evitan repetición dentro de cada unidad de traducción, no entre main.c y apoyo.c. Las dos definiciones externas de doble entran en conflicto."
    },
    {
      "id": "PE-T10-03",
      "topic": 10,
      "difficulty": "media",
      "prompt": "Solo se construye el comando; no se ejecuta ningún programa externo. ¿Qué texto se imprime?",
      "code": "char comando[100];\nchar ciudad[] = \"Baja California\";\nint grupos = 3;\nsprintf(comando, \"reporte.exe \\\"%s\\\" %d\", ciudad, grupos);\nprintf(\"%s\", comando);",
      "options": [
        {
          "id": "A",
          "text": "reporte.exe \"%s\" %d",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "reporte.exe Baja California 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "reporte.exe \"Baja\" \"California\" 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "reporte.exe \"Baja California\" 3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "sprintf sustituye los formatos dentro del arreglo. Las comillas escapadas forman parte de la cadena y agrupan el nombre con espacios."
    },
    {
      "id": "PE-T10-04",
      "topic": 10,
      "difficulty": "dificil",
      "prompt": "Un alumno interpreta el retorno de system como la cantidad de argumentos. ¿Cuál es la revisión correcta?",
      "code": "int r = system(\"reporte.exe 10 20\");\nprintf(\"Argumentos enviados: %d\", r);",
      "options": [
        {
          "id": "A",
          "text": "r debe valer 3 porque también se cuenta el ejecutable.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "r informa sobre el resultado de ejecutar el comando, según la implementación; no cuenta argumentos.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "r debe valer 2 porque hay dos números en la cadena.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "r es siempre la longitud en caracteres de la cadena.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "El retorno de system está relacionado con la ejecución del comando. argc pertenece a la interfaz del programa que recibe argumentos y es otro concepto."
    },
    {
      "id": "PE-T10-05",
      "topic": 10,
      "difficulty": "dificil",
      "prompt": "La implementación de operaciones.c contiene `double mitad(int n) { return n/2.0; }`. ¿Qué contenido de operaciones.h anuncia la misma interfaz a main.c?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "#ifndef OPERACIONES_H\n#define OPERACIONES_H\ndouble mitad(double n);\n#endif",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "#ifndef OPERACIONES_H\n#define OPERACIONES_H\nvoid mitad(int n);\n#endif",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "#ifndef OPERACIONES_H\n#define OPERACIONES_H\ndouble mitad(int n);\n#endif",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "#ifndef OPERACIONES_H\n#define OPERACIONES_H\nint mitad(int n);\n#endif",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "La interfaz compartida debe conservar el retorno double y el parámetro int. Una declaración incompatible en otro módulo no se arregla durante el enlace."
    },
    {
      "id": "PE-T11-01",
      "topic": 11,
      "difficulty": "media",
      "prompt": "Se revisan aquí las inclusiones reales, sin suponer cabeceras agregadas. ¿Qué bloque declara las funciones usadas y muestra la longitud de Hola?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "#include <stdio.h>\nint main(void)\n{\n    printf(\"%zu\", strlen(\"Hola\"));\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "#include <stdio.h>\n#include <string.h>\nint main(void)\n{\n    printf(\"%zu\", strlen(\"Hola\"));\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "#include <string.h>\nint main(void)\n{\n    printf(\"%zu\", strlen(\"Hola\"));\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "#include <math.h>\nint main(void)\n{\n    printf(\"%zu\", strlen(\"Hola\"));\n    return 0;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "printf se declara en stdio.h y strlen en string.h. En C11 no se debe llamar a estas funciones sin su declaración."
    },
    {
      "id": "PE-T11-02",
      "topic": 11,
      "difficulty": "dificil",
      "prompt": "Esta adaptación de la validación solo convierte con atoi y revisa rango. La entrada es `12abc`. ¿Qué devuelve?",
      "code": "int leer(int min, int max)\n{\n    char s[30];\n    int n;\n    do\n    {\n        fgets(s, sizeof(s), stdin);\n        n = atoi(s);\n    } while (n < min || n > max);\n    return n;\n}\n\nint main(void)\n{\n    printf(\"%d\", leer(1, 20));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "12",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "No puede devolver ningún valor porque abc siempre obliga a repetir.",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "atoi convierte el prefijo numérico 12 y no valida que todo el texto sea un entero. Como 12 está dentro del rango, la función lo acepta."
    },
    {
      "id": "PE-T11-03",
      "topic": 11,
      "difficulty": "media",
      "prompt": "La entrada contiene `Ana` y luego fin de archivo, sin salto de línea. ¿Qué muestra esta modificación defectuosa del lector?",
      "code": "void leer_cadena(char s[], int tam)\n{\n    int i = 0;\n    fgets(s, tam, stdin);\n    while (s[i] != '\\0')\n        i++;\n    if (i > 0)\n        s[i - 1] = '\\0';\n}\n\nint main(void)\n{\n    char s[20];\n    leer_cadena(s, 20);\n    printf(\"[%s]\", s);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "[An]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "[Ana]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "[A]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "[]",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "La adaptación borra siempre el último carácter, aunque no sea un salto de línea. Con Ana elimina la a; debe comprobar el carácter antes de borrarlo."
    },
    {
      "id": "PE-T11-04",
      "topic": 11,
      "difficulty": "dificil",
      "prompt": "s tiene capacidad para n caracteres y n>=2. ¿Qué función elimina el salto cuando está presente, conserva el último carácter cuando no lo está y maneja una lectura fallida?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int leer(char s[], int n)\n{\n    if (fgets(s, n, stdin) == NULL)\n        return 0;\n    s[strcspn(s, \"\\n\")] = '\\0';\n    return 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int leer(char s[], int n)\n{\n    if (fgets(s, n, stdin) == NULL)\n        return 1;\n    s[0] = '\\0';\n    return 0;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int leer(char s[], int n)\n{\n    if (fgets(s, n, stdin) == NULL)\n        return 0;\n    s[strlen(s)] = '\\n';\n    return 1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int leer(char s[], int n)\n{\n    fgets(s, n, stdin);\n    s[strlen(s) - 1] = '\\0';\n    return 1;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "A",
      "explanation": "La función verifica primero el retorno de fgets y usa strcspn para ubicar el salto o el nulo existente. Supone n>=2 y espacio suficiente en s."
    },
    {
      "id": "PE-T11-05",
      "topic": 11,
      "difficulty": "media",
      "prompt": "Se usa la biblioteca matemática. ¿Qué resultado se imprime?",
      "code": "double d = sqrt(81.0) + pow(2.0, 3.0);\nprintf(\"%.1f\", d);",
      "options": [
        {
          "id": "A",
          "text": "72.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "11.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "17.0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "89.0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "sqrt(81)=9 y pow(2,3)=8; la suma es 17. En GCC de algunos sistemas la biblioteca matemática se enlaza con -lm."
    },
    {
      "id": "PE-T11-06",
      "topic": 11,
      "difficulty": "media",
      "prompt": "Las funciones de ctype devuelven cero o un valor distinto de cero. ¿Qué imprime este uso portable de isdigit?",
      "code": "int a = isdigit((unsigned char)'5') != 0;\nint b = isdigit((unsigned char)'X') != 0;\nprintf(\"%d %d\", a, b);",
      "options": [
        {
          "id": "A",
          "text": "0 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "5 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "La comparación !=0 normaliza el resultado sin asumir que isdigit devuelve exactamente 1. El casting es la forma segura de clasificar un char."
    },
    {
      "id": "PE-T11-07",
      "topic": 11,
      "difficulty": "dificil",
      "prompt": "La entrada contiene `-1`, `25` y `18`, cada uno en su propia línea. ¿Qué valor devuelve y cuántas lecturas ejecuta?",
      "code": "int leer_edad(int min, int max, int *lecturas)\n{\n    char s[30];\n    int n;\n    do\n    {\n        fgets(s, sizeof(s), stdin);\n        (*lecturas)++;\n        n = atoi(s);\n    } while (n < min || n > max);\n    return n;\n}\n\nint main(void)\n{\n    int lecturas = 0;\n    int edad = leer_edad(1, 20, &lecturas);\n    printf(\"%d %d\", edad, lecturas);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "18 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "18 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "-1 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "25 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Los dos primeros valores quedan fuera de 1..20 y provocan reintentos. El tercer valor se acepta después de tres lecturas."
    },
    {
      "id": "PE-T11-08",
      "topic": 11,
      "difficulty": "media",
      "prompt": "Se quiere leer un carácter desde la entrada estándar con una función de ISO C, sin depender de conio.h. ¿Qué bloque cumple ese propósito?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "#include <conio.h>\nint c = getch();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "#include <stdio.h>\nint c = getchar();",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "#include <stdlib.h>\nint c = system(\"pause\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "#include <conio.h>\nint c = kbhit();",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "getchar está en stdio.h y lee desde la entrada estándar. getch/kbhit no son ISO C; system ejecuta un comando y no cumple esa interfaz."
    },
    {
      "id": "PE-T11-09",
      "topic": 11,
      "difficulty": "dificil",
      "prompt": "Analiza la expansión de la macro antes de evaluar la expresión. ¿Qué se imprime?",
      "code": "#define DOBLE(x) x * 2\n\nint main(void)\n{\n    int a = 3;\n    printf(\"%d\", DOBLE(a + 1));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "6",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "La expansión textual es a+1*2. La multiplicación ocurre antes de la suma y da 3+2=5; los paréntesis de la llamada no se conservan automáticamente."
    },
    {
      "id": "PE-T11-10",
      "topic": 11,
      "difficulty": "dificil",
      "prompt": "Para expresiones sin efectos laterales, ¿qué macro calcula el cuadrado de toda la expresión y funciona como operando en otra división?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "#define CUADRADO(x) (x) * (x)",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "#define CUADRADO(x) ((x) * (x))",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "#define CUADRADO(x) x *x",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "#define CUADRADO(x) (x * x)",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "Se requieren paréntesis alrededor de cada argumento y del resultado completo. Sin el envoltorio exterior, 100/CUADRADO(2+3) se agrupa incorrectamente."
    },
    {
      "id": "PE-T12-01",
      "topic": 12,
      "difficulty": "media",
      "prompt": "Supón que todas las operaciones tienen éxito. ¿Qué recupera y muestra el archivo temporal?",
      "code": "FILE *f = tmpfile();\nint a = 0, b = 0;\nfprintf(f, \"%d %d\", 12, 8);\nrewind(f);\nfscanf(f, \"%d %d\", &a, &b);\nprintf(\"%d\", a + b);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "128",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "12",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "fprintf escribe las representaciones textuales. rewind regresa al inicio y fscanf convierte ambos números antes de sumarlos."
    },
    {
      "id": "PE-T12-02",
      "topic": 12,
      "difficulty": "media",
      "prompt": "¿Qué bloque copia un flujo byte a byte hasta EOF sin guardar el resultado de fgetc en un char?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int c;\nwhile ((c = fgetc(origen)) == EOF)\n    fputc(c, destino);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int c;\nwhile ((c = fgetc(origen)) != EOF)\n    fputc(c, destino);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "char c;\nwhile ((c = fgetc(origen)) != EOF)\n    fputc(c, destino);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int c;\nwhile ((c = fgetc(origen)) != 0)\n    fputc(c, destino);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "El retorno int de fgetc permite distinguir los valores de byte del indicador EOF. Cero puede ser un byte de datos y no es el fin de archivo."
    },
    {
      "id": "PE-T12-03",
      "topic": 12,
      "difficulty": "media",
      "prompt": "El archivo contiene cuatro valores int. ¿Qué devuelve fread y cuál es el segundo valor leído?",
      "code": "FILE *f = tmpfile();\nint datos[] = {10, 20, 30, 40}, leidos[3] = {0};\nfwrite(datos, sizeof(int), 4, f);\nrewind(f);\nsize_t n = fread(leidos, sizeof(int), 3, f);\nprintf(\"%zu %d\", n, leidos[1]);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "4 20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "3 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "12 20",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "fread devuelve cantidad de elementos completos del tamaño solicitado, no bytes. Se leen tres enteros y el segundo es 20."
    },
    {
      "id": "PE-T12-04",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "La posición de registro se cuenta desde cero. ¿Qué contenido final se imprime?",
      "code": "FILE *f = tmpfile();\nint v[] = {10, 20, 30}, x = 99;\nfwrite(v, sizeof(int), 3, f);\nfseek(f, (long)sizeof(int), SEEK_SET);\nfwrite(&x, sizeof(x), 1, f);\nrewind(f);\nfread(v, sizeof(int), 3, f);\nprintf(\"%d %d %d\", v[0], v[1], v[2]);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "99 20 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10 20 99",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10 20 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "10 99 30",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El desplazamiento de un entero desde el inicio apunta al segundo registro. La escritura lo sustituye sin desplazar los otros."
    },
    {
      "id": "PE-T12-05",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "Después de leer un entero, el cursor avanza un entero adicional con SEEK_CUR. ¿Qué valor se recupera?",
      "code": "FILE *f = tmpfile();\nint v[] = {5, 10, 15, 20}, x = 0;\nfwrite(v, sizeof(int), 4, f);\nrewind(f);\nfread(&x, sizeof(x), 1, f);\nfseek(f, (long)sizeof(int), SEEK_CUR);\nfread(&x, sizeof(x), 1, f);\nprintf(\"%d\", x);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "15",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "La primera lectura consume el 5. El desplazamiento desde la posición actual salta el 10 y deja la siguiente lectura sobre el 15."
    },
    {
      "id": "PE-T12-06",
      "topic": 12,
      "difficulty": "media",
      "prompt": "En este archivo binario con registros de longitud fija, ¿cuántos registros se calculan?",
      "code": "typedef struct\n{\n    int clave, edad;\n} Registro;\n\nint main(void)\n{\n    FILE *f = tmpfile();\n    Registro v[3] = {{1, 20}, {2, 21}, {3, 22}};\n    fwrite(v, sizeof(Registro), 3, f);\n    fseek(f, 0, SEEK_END);\n    long cantidad = ftell(f) / (long)sizeof(Registro);\n    printf(\"%ld\", cantidad);\n    fclose(f);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "24",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "Depende de si int ocupa cuatro u ocho bytes.",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "6",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El tamaño total es tres veces sizeof(Registro). Dividir por ese mismo tamaño obtiene 3 sin asumir los bytes de los campos o del relleno."
    },
    {
      "id": "PE-T12-07",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "¿Cuál es el defecto de este patrón de lectura de registros?",
      "code": "Registro r;\nwhile (!feof(f))\n{\n    fread(&r, sizeof(r), 1, f);\n    mostrar(r);\n}",
      "options": [
        {
          "id": "A",
          "text": "feof anticipa si el siguiente registro existe, así que el patrón es siempre correcto.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "La solución es quitar fclose del programa.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Puede llamar a mostrar tras una lectura fallida; se debe condicionar el ciclo al retorno de fread.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "fread devuelve necesariamente EOF cuando falla y eso hace terminar el while automáticamente.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "C",
      "explanation": "El indicador de fin se activa después de intentar leer más allá del final. Solo deben procesarse registros cuando fread devuelve 1."
    },
    {
      "id": "PE-T12-08",
      "topic": 12,
      "difficulty": "media",
      "prompt": "¿Qué partes de la línea recuperan las dos conversiones %s?",
      "code": "FILE *f = tmpfile();\nchar a[10], b[10];\nfputs(\"ANA LOPEZ\\n\", f);\nrewind(f);\nfscanf(f, \"%9s %9s\", a, b);\nprintf(\"[%s][%s]\", a, b);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "[ANA LOPEZ][]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "[ANA][ANA]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "[][LOPEZ]",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "[ANA][LOPEZ]",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "%s lee una palabra y se detiene ante espacio en blanco. La segunda conversión retoma la siguiente palabra."
    },
    {
      "id": "PE-T12-09",
      "topic": 12,
      "difficulty": "media",
      "prompt": "¿Qué longitudes se imprimen antes y después de limpiar la línea leída?",
      "code": "FILE *f = tmpfile();\nchar s[20];\nfputs(\"Ana\\n\", f);\nrewind(f);\nfgets(s, sizeof(s), f);\nprintf(\"%zu \", strlen(s));\ns[strcspn(s, \"\\n\")] = '\\0';\nprintf(\"%zu\", strlen(s));\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "5 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "4 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "fgets conserva el salto si cabe en el destino. Inicialmente hay cuatro caracteres; sustituir el salto por nulo deja tres."
    },
    {
      "id": "PE-T12-10",
      "topic": 12,
      "difficulty": "media",
      "prompt": "El segundo fopen usa un modo que trunca. ¿Qué cantidad de elementos puede leer inmediatamente?",
      "code": "FILE *f = fopen(\"prueba.dat\", \"wb\");\nint x = 42, y = 0;\nfwrite(&x, sizeof(x), 1, f);\nfclose(f);\nf = fopen(\"prueba.dat\", \"w+b\");\nsize_t n = fread(&y, sizeof(y), 1, f);\nprintf(\"%zu %d\", n, y);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "0 42",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 42",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 0",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "w+b crea o trunca el archivo antes de usarlo para lectura y escritura. No queda ningún registro y y conserva su inicialización."
    },
    {
      "id": "PE-T12-11",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "El archivo se reabre en modo append binario. ¿Qué contenido se obtiene después del intento de escribir desde el inicio?",
      "code": "FILE *f = fopen(\"letras.dat\", \"wb\");\nfwrite(\"ABC\", 1, 3, f);\nfclose(f);\nf = fopen(\"letras.dat\", \"ab\");\nfseek(f, 0, SEEK_SET);\nfwrite(\"Z\", 1, 1, f);\nfclose(f);\nf = fopen(\"letras.dat\", \"rb\");\nchar s[5] = {0};\nfread(s, 1, 4, f);\nprintf(\"%s\", s);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "ABCZ",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "ZABC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "ABC",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "ZBC",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "En modo append las escrituras se fuerzan al final aun después de fseek. La Z se agrega a los tres bytes existentes."
    },
    {
      "id": "PE-T12-12",
      "topic": 12,
      "difficulty": "media",
      "prompt": "El archivo alumnos.dat ya existe. Se necesita modificar registros en cualquier posición y conservar el resto del contenido. ¿Qué apertura corresponde?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "FILE *f = fopen(\"alumnos.dat\", \"w+b\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "FILE *f = fopen(\"alumnos.dat\", \"rb\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "FILE *f = fopen(\"alumnos.dat\", \"r+b\");",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "FILE *f = fopen(\"alumnos.dat\", \"ab\");",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "r+b abre un binario existente para actualización sin truncarlo ni forzar todas las escrituras al final."
    },
    {
      "id": "PE-T12-13",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "El índice está ordenado por clave, pero guarda números de registro del archivo original. ¿Qué registro se obtiene?",
      "code": "typedef struct\n{\n    int clave;\n    char nombre;\n} Registro;\ntypedef struct\n{\n    int clave;\n    long posicion;\n} Indice;\n\nint main(void)\n{\n    FILE *f = tmpfile();\n    Registro datos[] = {{30, 'C'}, {10, 'A'}, {20, 'B'}}, r;\n    Indice idx[] = {{10, 1}, {20, 2}, {30, 0}};\n    fwrite(datos, sizeof(Registro), 3, f);\n    int p = 1;\n    fseek(f, idx[p].posicion * (long)sizeof(Registro), SEEK_SET);\n    fread(&r, sizeof(r), 1, f);\n    printf(\"%d %c\", r.clave, r.nombre);\n    fclose(f);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "20 A",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "30 C",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "10 A",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "20 B",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El elemento de índice con subíndice 1 corresponde a clave 20 y posición física 2. Se busca esa posición, no el subíndice del índice."
    },
    {
      "id": "PE-T12-14",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "Ya se leyó el segundo registro en r y el cursor quedó justo después de él. ¿Qué bloque cambia solo ese registro a inactivo? f es un flujo binario de actualización.",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "r.status = 0;\nrewind(f);\nfwrite(&r, sizeof(r), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "r.status = 0;\nfseek(f, -(long)sizeof(r), SEEK_CUR);\nfwrite(&r, sizeof(r), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "r.status = 0;\nfseek(f, 0, SEEK_END);\nfwrite(&r, sizeof(r), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "r.status = 0;\nfwrite(&r, sizeof(r), 1, f);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "Antes de sobrescribir debe regresarse un registro desde la posición actual. Sin el retroceso se sobrescribe el siguiente o se agrega otro."
    },
    {
      "id": "PE-T12-15",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "Al empaquetar, solo se copian registros activos. ¿Qué cantidad y última clave quedan en el archivo nuevo?",
      "code": "typedef struct\n{\n    int clave, status;\n} Registro;\n\nint main(void)\n{\n    FILE *origen = tmpfile(), *destino = tmpfile();\n    Registro v[] = {{10, 1}, {20, 0}, {30, 1}}, r = {0};\n    fwrite(v, sizeof(r), 3, origen);\n    rewind(origen);\n    int cantidad = 0;\n    while (fread(&r, sizeof(r), 1, origen) == 1)\n        if (r.status == 1)\n        {\n            fwrite(&r, sizeof(r), 1, destino);\n            cantidad++;\n        }\n    fseek(destino, -(long)sizeof(r), SEEK_END);\n    fread(&r, sizeof(r), 1, destino);\n    printf(\"%d %d\", cantidad, r.clave);\n    fclose(origen);\n    fclose(destino);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "2 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2 20",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Se copian las claves 10 y 30. El destino contiene dos registros y su último registro es el de clave 30."
    },
    {
      "id": "PE-T12-16",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "¿Qué ciclo procesa exclusivamente registros completos y termina al fallar la siguiente lectura?",
      "code": "typedef struct\n{\n    int clave, status;\n} Registro;\nRegistro r;",
      "options": [
        {
          "id": "A",
          "text": "while (fread(&r, sizeof(r), 1, f) == sizeof(r))\n    procesar(r);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "while (fread(&r, sizeof(r), 1, f) == 0)\n    procesar(r);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "while (!feof(f))\n{\n    fread(&r, sizeof(r), 1, f);\n    procesar(r);\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "while (fread(&r, sizeof(r), 1, f) == 1)\n    procesar(r);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Al pedir un registro por llamada, solo el retorno 1 confirma una lectura completa. El tamaño en bytes no es el retorno esperado."
    },
    {
      "id": "PE-T12-17",
      "topic": 12,
      "difficulty": "media",
      "prompt": "Después de fwrite en un archivo temporal de actualización, se desea leer el primer entero escrito. ¿Qué secuencia posiciona correctamente el flujo?",
      "code": "FILE *f = tmpfile();\nint x = 25, y = 0;\nfwrite(&x, sizeof(x), 1, f);",
      "options": [
        {
          "id": "A",
          "text": "fclose(f);\nfread(&y, sizeof(y), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "fflush(f);\nfread(&y, sizeof(y), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "fseek(f, 0, SEEK_END);\nfread(&y, sizeof(y), 1, f);",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "rewind(f);\nfread(&y, sizeof(y), 1, f);",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "rewind establece la posición al inicio y permite cambiar de escritura a lectura. fflush no regresa el cursor; cerrar vuelve inválido el flujo."
    },
    {
      "id": "PE-T12-18",
      "topic": 12,
      "difficulty": "media",
      "prompt": "¿Qué revisión corresponde al uso del flujo después de cerrarlo?",
      "code": "FILE *f = fopen(\"datos.dat\", \"rb\");\nif (f != NULL)\n{\n    fclose(f);\n    int c = fgetc(f);\n    printf(\"%d\", c);\n}",
      "options": [
        {
          "id": "A",
          "text": "fclose regresa el cursor al inicio y por eso se lee el primer carácter.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "fgetc usa un flujo ya cerrado y no tiene un resultado definido; debe leerse antes de fclose o abrirse de nuevo.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "fgetc devuelve siempre EOF y esa es una forma correcta de verificar el cierre.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "El código es correcto si el archivo tiene menos de 100 bytes.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "B",
      "explanation": "Tras fclose el puntero ya no designa un flujo abierto válido. No se debe asumir ni un byte ni EOF como resultado de ese uso."
    },
    {
      "id": "PE-T12-19",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "Se solicitan tres elementos de dos bytes, pero el archivo solo contiene cinco bytes. ¿Qué devuelve fread y cuál es el cuarto byte completo leído?",
      "code": "FILE *f = tmpfile();\nunsigned char origen[] = {10, 20, 30, 40, 50}, b[6] = {0};\nfwrite(origen, 1, 5, f);\nrewind(f);\nsize_t n = fread(b, 2, 3, f);\nprintf(\"%zu %u\", n, (unsigned)b[3]);\nfclose(f);",
      "options": [
        {
          "id": "A",
          "text": "2 40",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2 50",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3 40",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "5 40",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Solo se completan dos elementos de dos bytes. El cuarto byte pertenece a esos elementos completos y vale 40; el elemento parcial no se cuenta."
    },
    {
      "id": "PE-T12-20",
      "topic": 12,
      "difficulty": "dificil",
      "prompt": "Tras empaquetar, quedan las claves 10 y 30 en posiciones 0 y 1. El índice viejo de la clave 30 sigue apuntando a 2. ¿Qué imprime esta consulta?",
      "code": "typedef struct\n{\n    int clave, status;\n} Registro;\n\nint main(void)\n{\n    FILE *f = tmpfile();\n    Registro v[] = {{10, 1}, {30, 1}}, r = {-1, 0};\n    fwrite(v, sizeof(r), 2, f);\n    long posicion_vieja = 2;\n    fseek(f, posicion_vieja * (long)sizeof(r), SEEK_SET);\n    size_t leidos = fread(&r, sizeof(r), 1, f);\n    printf(\"%zu %d\", leidos, r.clave);\n    fclose(f);\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "1 10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0 30",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "0 -1",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "La posición 2 ahora coincide con el final del archivo. No se lee ningún registro y r mantiene su inicialización; el índice debe reconstruirse con posición 1."
    },
    {
      "id": "PE-T13-01",
      "topic": 13,
      "difficulty": "media",
      "prompt": "Solo se ejecuta una pasada de burbuja, de izquierda a derecha. ¿Cómo queda el arreglo?",
      "code": "int v[] = {4, 1, 3, 2};\nfor (int j = 0; j < 3; j++)\n    if (v[j] > v[j + 1])\n    {\n        int t = v[j];\n        v[j] = v[j + 1];\n        v[j + 1] = t;\n    }\nfor (int j = 0; j < 4; j++)\n    printf(\"%d \", v[j]);",
      "options": [
        {
          "id": "A",
          "text": "1 3 2 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 4 2 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 2 3 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 1 2 3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El 4 se intercambia sucesivamente con 1,3 y 2 hasta quedar al final. Una pasada no ordena necesariamente el resto."
    },
    {
      "id": "PE-T13-02",
      "topic": 13,
      "difficulty": "media",
      "prompt": "Solo se ejecuta la primera selección del mínimo. ¿Qué arreglo resulta?",
      "code": "int v[] = {5, 3, 4, 1, 2}, menor = 0;\nfor (int j = 1; j < 5; j++)\n    if (v[j] < v[menor])\n        menor = j;\nint t = v[0];\nv[0] = v[menor];\nv[menor] = t;\nfor (int j = 0; j < 5; j++)\n    printf(\"%d \", v[j]);",
      "options": [
        {
          "id": "A",
          "text": "1 5 4 3 2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2 3 4 1 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "1 2 3 4 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "1 3 4 5 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "El mínimo 1 está en la posición 3. Se intercambia únicamente con el primer 5 y el resto no se ordena en esta pasada."
    },
    {
      "id": "PE-T13-03",
      "topic": 13,
      "difficulty": "media",
      "prompt": "El prefijo 2,5 ya está ordenado. ¿Qué resultado produce insertar el elemento de índice 2?",
      "code": "int v[] = {2, 5, 3, 8};\nint dato = v[2], j = 1;\nwhile (j >= 0 && v[j] > dato)\n{\n    v[j + 1] = v[j];\n    j--;\n}\nv[j + 1] = dato;\nfor (int i = 0; i < 4; i++)\n    printf(\"%d \", v[i]);",
      "options": [
        {
          "id": "A",
          "text": "2 3 5 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2 3 3 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "2 5 3 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3 2 5 8",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El 5 se desplaza a la derecha y el 3 se coloca después del 2. El último 8 no participa en esta inserción."
    },
    {
      "id": "PE-T13-04",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Se ejecuta únicamente el salto 2 de Shell Sort. ¿Qué arreglo intermedio queda?",
      "code": "int v[] = {8, 5, 6, 3, 4, 1}, salto = 2;\nfor (int i = salto; i < 6; i++)\n{\n    int dato = v[i], j = i;\n    while (j >= salto && v[j - salto] > dato)\n    {\n        v[j] = v[j - salto];\n        j -= salto;\n    }\n    v[j] = dato;\n}\nfor (int i = 0; i < 6; i++)\n    printf(\"%d \", v[i]);",
      "options": [
        {
          "id": "A",
          "text": "4 1 6 3 8 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 3 4 5 6 8",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "6 3 4 1 8 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 3 6 1 8 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Con salto 2 se ordenan por separado las posiciones pares 8,6,4 y las impares 5,3,1. Falta la pasada de salto 1 para ordenar todo."
    },
    {
      "id": "PE-T13-05",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Esta partición usa el último elemento como pivote. ¿Qué posición y arreglo imprime?",
      "code": "int v[] = {4, 2, 5, 1, 3}, i = -1, pivote = v[4];\nfor (int j = 0; j < 4; j++)\n    if (v[j] <= pivote)\n    {\n        i++;\n        int t = v[i];\n        v[i] = v[j];\n        v[j] = t;\n    }\nint t = v[i + 1];\nv[i + 1] = v[4];\nv[4] = t;\nprintf(\"%d: \", i + 1);\nfor (int j = 0; j < 5; j++)\n    printf(\"%d \", v[j]);",
      "options": [
        {
          "id": "A",
          "text": "0: 3 2 5 1 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "2: 1 2 3 4 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "3: 2 1 4 3 5",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "2: 2 1 3 4 5",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Se trasladan primero 2 y 1 a la zona <=3. Después el pivote se coloca en el índice 2; las zonas a sus lados aún no tienen que estar ordenadas."
    },
    {
      "id": "PE-T13-06",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Se fusionan dos mitades de registros ordenadas por clave ascendente. La salida también debe ser ascendente y conservar el orden original entre claves iguales. ¿Qué bloque cumple ambas condiciones, dando prioridad a la izquierda en los empates?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (izq[i].clave >= der[j].clave)\n    salida[k++] = izq[i++];\nelse\n    salida[k++] = der[j++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (izq[i].clave <= der[j].clave)\n    salida[k++] = izq[i++];\nelse\n    salida[k++] = der[j++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (izq[i].clave < der[j].clave)\n    salida[k++] = izq[i++];\nelse\n    salida[k++] = der[j++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (izq[i].clave > der[j].clave)\n    salida[k++] = izq[i++];\nelse\n    salida[k++] = der[j++];",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "B",
      "explanation": "<= elige primero el registro de la mitad izquierda en igualdad y mantiene el orden ascendente. < daría prioridad al de la derecha y perdería estabilidad."
    },
    {
      "id": "PE-T13-07",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "El arreglo inicial ya es un max-heap. Se extrae solo el máximo y se repara el heap restante. ¿Cómo queda?",
      "code": "int v[] = {7, 4, 6, 1, 2}, n = 5;\nint t = v[0];\nv[0] = v[n - 1];\nv[n - 1] = t;\nn--;\nint i = 0;\nwhile (2 * i + 1 < n)\n{\n    int h = 2 * i + 1;\n    if (h + 1 < n && v[h + 1] > v[h])\n        h++;\n    if (v[i] >= v[h])\n        break;\n    t = v[i];\n    v[i] = v[h];\n    v[h] = t;\n    i = h;\n}\nfor (int j = 0; j < 5; j++)\n    printf(\"%d \", v[j]);",
      "options": [
        {
          "id": "A",
          "text": "6 4 2 1 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1 2 4 6 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 2 6 1 7",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "7 4 6 1 2",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "El 7 se fija al final. El 2 que subió a la raíz se intercambia con su hijo mayor 6, dejando el heap 6,4,2,1."
    },
    {
      "id": "PE-T13-08",
      "topic": 13,
      "difficulty": "media",
      "prompt": "La búsqueda secuencial retorna al encontrar una coincidencia. ¿Qué índice entrega con repetidos?",
      "code": "int buscar(int v[], int n, int x)\n{\n    for (int i = 0; i < n; i++)\n        if (v[i] == x)\n            return i;\n    return -1;\n}\n\nint main(void)\n{\n    int v[] = {8, 3, 8, 8};\n    printf(\"%d\", buscar(v, 4, 8));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La primera posición ya contiene 8 y se devuelve inmediatamente. Los índices se cuentan desde cero."
    },
    {
      "id": "PE-T13-09",
      "topic": 13,
      "difficulty": "media",
      "prompt": "¿Qué retorna esta búsqueda cuando el valor no aparece?",
      "code": "int buscar(int v[], int n, int x)\n{\n    for (int i = 0; i < n; i++)\n        if (v[i] == x)\n            return i;\n    return -1;\n}\n\nint main(void)\n{\n    int v[] = {4, 7, 2};\n    printf(\"%d\", buscar(v, 3, 9));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "2",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "-1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "El recorrido termina sin coincidencias y alcanza return -1. Retornar n no es la convención usada por esta función."
    },
    {
      "id": "PE-T13-10",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Cuenta una consulta cada vez que se inspecciona v[m]. ¿Qué índice y cantidad de consultas se imprimen?",
      "code": "int v[] = {2, 4, 6, 8, 10, 12, 14, 16, 18};\nint ini = 0, fin = 8, consultas = 0, pos = -1;\nwhile (ini <= fin)\n{\n    int m = ini + (fin - ini) / 2;\n    consultas++;\n    if (v[m] == 18)\n    {\n        pos = m;\n        break;\n    }\n    if (v[m] < 18)\n        ini = m + 1;\n    else\n        fin = m - 1;\n}\nprintf(\"%d %d\", pos, consultas);",
      "options": [
        {
          "id": "A",
          "text": "8 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "9 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "8 9",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "8 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "D",
      "explanation": "Los índices centrales visitados son 4,6,7 y 8. La cuarta consulta encuentra 18 en el índice 8."
    },
    {
      "id": "PE-T13-11",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Con v={2,4} y x=3, ¿por qué esta búsqueda puede no terminar?",
      "code": "int ini = 0, fin = 1;\nwhile (ini <= fin)\n{\n    int m = ini + (fin - ini) / 2;\n    if (v[m] == x)\n        break;\n    if (v[m] < x)\n        ini = m;\n    else\n        fin = m - 1;\n}",
      "options": [
        {
          "id": "A",
          "text": "El tamaño dos impide cualquier búsqueda binaria, aunque se actualicen bien los límites.",
          "format": "text",
          "language": ""
        },
        {
          "id": "B",
          "text": "El error es usar <=; cambiarlo por < encuentra siempre cualquier valor.",
          "format": "text",
          "language": ""
        },
        {
          "id": "C",
          "text": "Cuando m=ini=0, asignar ini=m deja el mismo intervalo; debe avanzarse a m+1.",
          "format": "text",
          "language": ""
        },
        {
          "id": "D",
          "text": "La búsqueda termina necesariamente en dos iteraciones porque el arreglo está ordenado.",
          "format": "text",
          "language": ""
        }
      ],
      "correctId": "C",
      "explanation": "El extremo debe excluir el elemento central ya descartado. Con ini=m se repite el mismo estado sin progreso."
    },
    {
      "id": "PE-T13-12",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "El código se ejecuta sobre un arreglo desordenado. ¿Qué valor devuelve realmente, aunque 8 sí exista?",
      "code": "int binaria(int v[], int n, int x)\n{\n    int ini = 0, fin = n - 1;\n    while (ini <= fin)\n    {\n        int m = ini + (fin - ini) / 2;\n        if (v[m] == x)\n            return m;\n        if (v[m] < x)\n            ini = m + 1;\n        else\n            fin = m - 1;\n    }\n    return -1;\n}\n\nint main(void)\n{\n    int v[] = {8, 2, 6, 4};\n    printf(\"%d\", binaria(v, 4, 8));\n    return 0;\n}",
      "options": [
        {
          "id": "A",
          "text": "-1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "0",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "3",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "A",
      "explanation": "Visita 2,6 y 4 y descarta indebidamente la zona donde está 8. El algoritmo no funciona correctamente sin su precondición de orden ascendente."
    },
    {
      "id": "PE-T13-13",
      "topic": 13,
      "difficulty": "media",
      "prompt": "En una pasada de burbuja que debe ordenar de mayor a menor, ¿qué bloque intercambia los vecinos que están en orden incorrecto?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "if (v[j] > v[j + 1])\n{\n    int t = v[j];\n    v[j] = v[j + 1];\n    v[j + 1] = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "if (v[j] < v[j + 1])\n{\n    v[j] = v[j + 1];\n    v[j + 1] = v[j];\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "if (v[j] == v[j + 1])\n{\n    int t = v[j];\n    v[j] = v[j + 1];\n    v[j + 1] = t;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "if (v[j] < v[j + 1])\n{\n    int t = v[j];\n    v[j] = v[j + 1];\n    v[j + 1] = t;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Para orden descendente, el vecino izquierdo no debe ser menor que el derecho. El temporal evita perder uno de los valores."
    },
    {
      "id": "PE-T13-14",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Se ordenan registros por matrícula ascendente y se debe mantener cada nombre unido a su matrícula. ¿Qué bloque cumple ambas condiciones?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "for (int i = 0; i < n - 1; i++)\n    for (int j = i + 1; j < n; j++)\n        if (v[j].matri < v[i].matri)\n        {\n            v[i] = v[j];\n            v[j] = v[i];\n        }",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "for (int i = 0; i < n - 1; i++)\n    for (int j = i + 1; j < n; j++)\n        if (v[j].matri < v[i].matri)\n        {\n            int t = v[i].matri;\n            v[i].matri = v[j].matri;\n            v[j].matri = t;\n        }",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "for (int i = 0; i < n - 1; i++)\n    for (int j = i + 1; j < n; j++)\n        if (v[j].matri < v[i].matri)\n        {\n            Registro t = v[i];\n            v[i] = v[j];\n            v[j] = t;\n        }",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "for (int i = 0; i < n - 1; i++)\n    for (int j = i + 1; j < n; j++)\n        if (v[j].matri > v[i].matri)\n        {\n            Registro t = v[i];\n            v[i] = v[j];\n            v[j] = t;\n        }",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se compara el campo matrícula, pero se intercambia el registro completo con un temporal. Mover solo las claves separaría los nombres de sus dueños."
    },
    {
      "id": "PE-T13-15",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Sobre un arreglo ordenado con repetidos, se debe devolver el índice de la primera coincidencia o -1 si no existe. ¿Qué función cumple ese contrato?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "int primera(int v[], int n, int x)\n{\n    int l = 0, r = n - 1, p = -1;\n    while (l <= r)\n    {\n        int m = l + (r - l) / 2;\n        if (v[m] <= x)\n        {\n            if (v[m] == x)\n                p = m;\n            l = m + 1;\n        }\n        else\n            r = m - 1;\n    }\n    return p;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "int primera(int v[], int n, int x)\n{\n    int l = 0, r = n - 1;\n    while (l <= r)\n    {\n        int m = l + (r - l) / 2;\n        if (v[m] == x)\n            return m;\n        if (v[m] < x)\n            l = m + 1;\n        else\n            r = m - 1;\n    }\n    return -1;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "int primera(int v[], int n, int x)\n{\n    int l = 0, r = n - 1, p = 0;\n    while (l <= r)\n    {\n        int m = l + (r - l) / 2;\n        if (v[m] >= x)\n        {\n            if (v[m] == x)\n                p = m;\n            r = m - 1;\n        }\n        else\n            l = m + 1;\n    }\n    return p;\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "int primera(int v[], int n, int x)\n{\n    int l = 0, r = n - 1, p = -1;\n    while (l <= r)\n    {\n        int m = l + (r - l) / 2;\n        if (v[m] >= x)\n        {\n            if (v[m] == x)\n                p = m;\n            r = m - 1;\n        }\n        else\n            l = m + 1;\n    }\n    return p;\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Después de guardar una coincidencia debe seguirse buscando a la izquierda. El valor inicial -1 conserva la señal de ausencia."
    },
    {
      "id": "PE-T13-16",
      "topic": 13,
      "difficulty": "media",
      "prompt": "El contador registra comparaciones de vecinos en la burbuja sin salida anticipada. ¿Cuántas realiza?",
      "code": "int n = 5, c = 0;\nfor (int i = 0; i < n - 1; i++)\n    for (int j = 0; j < n - 1 - i; j++)\n        c++;\nprintf(\"%d\", c);",
      "options": [
        {
          "id": "A",
          "text": "20",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "10",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "25",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Las cuatro pasadas comparan 4,3,2 y 1 parejas. El total es 10, según n*(n-1)/2."
    },
    {
      "id": "PE-T13-17",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "El arreglo ya está ordenado y la bandera permite salir. ¿Qué cantidad de comparaciones y pasadas se imprime?",
      "code": "int v[] = {1, 2, 3, 4, 5}, c = 0, pasadas = 0, cambio = 1;\nfor (int i = 0; i < 4 && cambio; i++)\n{\n    cambio = 0;\n    pasadas++;\n    for (int j = 0; j < 4 - i; j++)\n    {\n        c++;\n        if (v[j] > v[j + 1])\n        {\n            int t = v[j];\n            v[j] = v[j + 1];\n            v[j + 1] = t;\n            cambio = 1;\n        }\n    }\n}\nprintf(\"%d %d\", c, pasadas);",
      "options": [
        {
          "id": "A",
          "text": "10 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "5 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "4 1",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "4 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "C",
      "explanation": "La primera pasada realiza cuatro comparaciones y ningún intercambio. cambio queda en cero y evita todas las pasadas restantes."
    },
    {
      "id": "PE-T13-18",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "Los arreglos a y b están ordenados y c tiene capacidad n+m. ¿Qué bloque fusiona todos los elementos sin perder los sobrantes?",
      "code": "",
      "options": [
        {
          "id": "A",
          "text": "while (i < n && j < m)\n{\n    if (a[i] <= b[j])\n        c[k++] = a[i++];\n    else\n        c[k++] = b[j++];\n}\nwhile (i < n)\n    c[k++] = a[i++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "while (i < n && j < m)\n{\n    if (a[i] <= b[j])\n        c[k++] = a[i];\n    else\n        c[k++] = b[j];\n    i++;\n    j++;\n}\nwhile (i < n)\n    c[k++] = a[i++];\nwhile (j < m)\n    c[k++] = b[j++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "while (i < n && j < m)\n{\n    if (a[i] > b[j])\n        c[k++] = a[i++];\n    else\n        c[k++] = b[j++];\n}\nwhile (i < n)\n    c[k++] = a[i++];\nwhile (j < m)\n    c[k++] = b[j++];",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "while (i < n && j < m)\n{\n    if (a[i] <= b[j])\n        c[k++] = a[i++];\n    else\n        c[k++] = b[j++];\n}\nwhile (i < n)\n    c[k++] = a[i++];\nwhile (j < m)\n    c[k++] = b[j++];",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "D",
      "explanation": "Se avanza solo el índice del elemento elegido y después se copian los sobrantes de ambas fuentes. Avanzar ambos índices a la vez pierde datos."
    },
    {
      "id": "PE-T13-19",
      "topic": 13,
      "difficulty": "media",
      "prompt": "Estos contadores ilustran recorridos cuadrados frente a reducción por mitades. ¿Qué valores se imprimen?",
      "code": "int n = 8, a = 0, b = 0;\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < n; j++)\n        a++;\nfor (int k = n; k > 1; k /= 2)\n    b++;\nprintf(\"%d %d\", a, b);",
      "options": [
        {
          "id": "A",
          "text": "16 4",
          "format": "output",
          "language": "text"
        },
        {
          "id": "B",
          "text": "64 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "C",
          "text": "8 3",
          "format": "output",
          "language": "text"
        },
        {
          "id": "D",
          "text": "64 4",
          "format": "output",
          "language": "text"
        }
      ],
      "correctId": "B",
      "explanation": "Los ciclos anidados ejecutan 8*8=64 incrementos. La reducción visita 8,4,2 antes de llegar a 1: tres incrementos."
    },
    {
      "id": "PE-T13-20",
      "topic": 13,
      "difficulty": "dificil",
      "prompt": "particionar coloca el pivote en su posición definitiva p, con izq<=p<=der. ¿Qué definición de quick ordena ambos lados y garantiza reducir los intervalos?",
      "code": "int particionar(int v[], int izq, int der);",
      "options": [
        {
          "id": "A",
          "text": "void quick(int v[], int izq, int der)\n{\n    if (izq < der)\n    {\n        int p = particionar(v, izq, der);\n        quick(v, izq, p - 1);\n        quick(v, p, der);\n    }\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "B",
          "text": "void quick(int v[], int izq, int der)\n{\n    if (izq < der)\n    {\n        int p = particionar(v, izq, der);\n        quick(v, izq, p);\n        quick(v, p + 1, der);\n    }\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "C",
          "text": "void quick(int v[], int izq, int der)\n{\n    if (izq < der)\n    {\n        int p = particionar(v, izq, der);\n        quick(v, izq, p - 1);\n        quick(v, p + 1, der);\n    }\n}",
          "format": "code",
          "language": "c"
        },
        {
          "id": "D",
          "text": "void quick(int v[], int izq, int der)\n{\n    if (izq < der)\n    {\n        int p = particionar(v, izq, der);\n        quick(v, izq, p - 1);\n    }\n}",
          "format": "code",
          "language": "c"
        }
      ],
      "correctId": "C",
      "explanation": "Se excluye el pivote definitivo de las dos llamadas. Incluirlo puede repetir el intervalo cuando cae en un extremo; omitir un lado deja elementos sin ordenar."
    }
  ]
};
});
