
alert('Bienvenido a Legend Hero');
var playerName = prompt('Ingresá tu nombre: ');
var playerGender = prompt('Ingresá tu genero(m/f): ');
if(playerGender === 'm') {
    alert('Hola Lord ' + playerName + '. Vamos a crear tu personaje.');
}
else if(playerGender === 'f') {
    alert('Hola Lady ' + playerName + '. Vamos a crear tu personaje.');
}

var heroName = prompt('¿Cuál será el nombre de tu personaje?');
var heroGender = prompt('¿Cuál será el genero del personaje?');
var heroType = prompt('Elegí la clase de tu héroe: \n');

var types = [
    Caballero,
    Arquero,
    Mago,
    Elfo,
    Enano,
    Demonio,
    Orco,

]