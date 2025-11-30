// 1. Escribe un comentario en una linea
// Esto es un comentario en una linea

// 2. Escribe una comentario en varias lineas
/*
Esto es un
comentario en 
varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
let name = "Ibai"
let edad = 20
let flag = true
let simbolo = Symbol("Simbolo")
let numeroGrande = 5346789546789347835489354687835469n
let undefinedValue
let nulo = null

// 4. Imprime por consola el valor de todas las variables
console.log(name)
console.log(edad)
console.log(flag)
console.log(simbolo)
console.log(numeroGrande)
console.log(undefinedValue)
console.log(nulo)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof name)
console.log(typeof edad)
console.log(typeof flag)
console.log(typeof simbolo)
console.log(typeof numeroGrande)
console.log(typeof undefinedValue)
console.log(typeof nulo)

// 6. Modifica los valores de las variables por otros de distinto tipo
name = "Juanma"
edad = 40
flag = false
simbolo = Symbol("a")
numeroGrande = BigInt(478326145371825671345643718956713895435431513531513)
undefinedValue = undefined
nulo = null

// 7. Modifica los valores de las variables por otros de distinto tipo
name = 12
edad = "edad"
flag = undefined
simbolo = "?"
numeroGrande = Symbol("I")
undefinedValue = null
nulo = 23


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const name2 = "ibai"
const edad2 = 20
const flag2 = true
const simbolo2 = Symbol("Simbolo")
const numeroGrande2 = 5346789546789347835489354687835469n
const undefinedValue2 = undefined
const nulo2 = null

// 9. A continuacion modifica los valores de las constantes
name2 = "name"  
edad2 = 78
flag2 = false
simbolo2 = Symbol("siiii")
numeroGrande2 = BigInt(58754678942589757834924789578932)
undefinedValue2 = null
nulo2 = 23

// da error en todas las modificaciones porque son constantes