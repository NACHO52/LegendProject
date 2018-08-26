
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