
// <<<<<<< HEAD
alert('Bienvenido a Legends Heroes');
alert('Vamos a crear a tu Héroe.');
var heroName = prompt('Ingresá el nombre de tu Héroe: ');
var heroGender = prompt('Elegí el genero de tu personaje (m/f): ')
var heroType = prompt('Elegí la clase de tu Héroe: \n' +
                      'Caballero (0)\n' +
                      'Mago         (1)\n' +
                      'Arquero     (2)\n' +
                      'Elfo            (3)\n' +
                      'Enano       (4)\n');

function Player(name, gender, type)
{
    this.name = name;
    this.gender = gender;
    this.type = type;
    this.life = 100;
    this.mana = 100;
    this.gold = 1000;
}

var hero = Player(heroName);

var alliesTypes = [ 'Caballero', 'Mago', 'Arquero', 'Elfo', 'Enano' ];
var enemyTypes = [ 'Orco', 'Brujo', 'Asesino', 'Elfo Oscuro', 'Demonio' ]
// =======
// alert('Bienvenido a Legend Hero');
// var playerName = prompt('Ingresá tu nombre: ');
// var playerGender = prompt('Ingresá tu genero(m/f): ');
// if(playerGender === 'm') {
//     alert('Hola Lord ' + playerName + '. Vamos a crear tu personaje.');
// }
// else if(playerGender === 'f') {
//     alert('Hola Lady ' + playerName + '. Vamos a crear tu personaje.');
// }

// var heroName = prompt('¿Cuál será el nombre de tu personaje?');
// var heroGender = prompt('¿Cuál será el genero del personaje?');
// var heroType = prompt('Elegí la clase de tu héroe: \n');

// var types = [
//     Caballero,
//     Arquero,
//     Mago,
//     Elfo,
//     Enano,
//     Demonio,
//     Orco,

// ]
// >>>>>>> e76a873e769c9e95c7c2daa73f5eaab3cb8101dd
