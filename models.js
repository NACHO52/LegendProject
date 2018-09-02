var heroTypes = [ 'Caballero', 'Mago', 'Arquero', 'Elfo', 'Enano' ];
var enemyTypes = [ 'Orco', 'Brujo', 'Asesino', 'Elfo Oscuro', 'Demonio', 'Dragón' ];
var genders = ['Femenino','Masculino'];
var sword = { damage : 20, defense : 20, value : 70};
var bow = { damage : 30, defense : 10, value : 50};
var weapons = [sword, bow];

// function buscarPersonaEnServidor(callback)
// {
//     setTimeout(function(){
//         callback({Nombre : "Ignacho"});
//     }, 1000);
// }
// var ListPersonas = [];
// function ListarPersonas(){
//     console.log("----------------------------------");
//     for(var i = 0; i < ListPersonas.length; i++)
//     {
//         console.log(ListPersonas[i].Nombre + "_" + i);
//     }
// }
// function AgregarPersona()
// {
//     buscarPersonaEnServidor(function(persona){
//         ListPersonas.push(persona);
//         ListarPersonas();
//     });
// }
// document.getElementById("agregarPersona").addEventListener("click",AgregarPersona);