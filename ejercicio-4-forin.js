// Usa un for...in para imprimir por consola los datos del alienรญgena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(alien[key]);
        
}

//๐๐๐๐๐๐๐๐๐๐๐๐๐๐๐

// Ojo con esto. 
// A diferencia de for of que recorre arrays, for in recorre elementos. 
// Llamamos key a ese elemento dentro del array que es alien. 
// Para saber las propiedades del array bastarรญa con hacer console.log(key). Pero nosotros queremos saber los datos y el valor de cada propiedad, asรญ que aquรญ serรญa
// console.log(alien[key])
//! PERO NO consoloe.log(alien.key) <-- esto nos devuelve undefined