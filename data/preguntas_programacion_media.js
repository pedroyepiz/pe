/* Datos de la vista local. */
(function(root,f){if(typeof module==="object"&&module.exports)module.exports=f();else root.PE_MEDIUM_DATA=f();})(typeof globalThis!=="undefined"?globalThis:this,function(){return {
  "topics": [
    {
      "id": 0,
      "title": "Introducción"
    },
    {
      "id": 1,
      "title": "Tipos de datos"
    },
    {
      "id": 2,
      "title": "Expresiones"
    },
    {
      "id": 3,
      "title": "Selección"
    },
    {
      "id": 4,
      "title": "Iteración"
    },
    {
      "id": 5,
      "title": "Funciones"
    },
    {
      "id": 6,
      "title": "Arreglos"
    },
    {
      "id": 7,
      "title": "Structs: estructuras, union y enum"
    },
    {
      "id": 8,
      "title": "Typedef: alias de tipos"
    },
    {
      "id": 9,
      "title": "Recursión"
    },
    {
      "id": 10,
      "title": "Multiarchivo"
    },
    {
      "id": 11,
      "title": "Biblioteca de funciones"
    },
    {
      "id": 12,
      "title": "Archivos de texto y binarios"
    },
    {
      "id": 13,
      "title": "Métodos de ordenación y búsqueda"
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
    }
  ]
};});
