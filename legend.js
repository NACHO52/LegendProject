alert('Bienvenido a Legends Heroes');
alert('Vamos a crear a tu Héroe.');
var heroName = prompt('Ingresá el nombre de tu Héroe: ');
var heroGender = prompt('Elegí el genero de tu personaje (m/f): ')
var heroType = prompt('Elegí la clase de tu Héroe: \n' +
                      '(0)  ' + alliesTypes[0] +'\n' +
                      '(1)  ' + alliesTypes[1] +'\n' +
                      '(2)  ' + alliesTypes[2] +'\n' +
                      '(3)  ' + alliesTypes[3] +'\n' +
                      '(4)  ' + alliesTypes[4] +'\n');

function Player(name, gender, type)
{
    this.name = name;
    this.gender = gender;
    this.type = type;
    this.life = 100;
    this.mana = 100;
    this.gold = 0;
    this.attack = 50;
    this.armor = 0;
    this.weapon = 0;
}
var alliesTypes = [ 'Caballero', 'Mago', 'Arquero', 'Elfo', 'Enano' ];
var enemyTypes = [ 'Orco', 'Brujo', 'Asesino', 'Elfo Oscuro', 'Demonio' ];
var weaponKnight = [ 'Espada de Guardia', 'Espadas Dobles', 'Espada y Escudo', 'Hacha', 'Espada Real'];
var weaponWizard = [ 'Varita Mágica', 'Anillo Mágico', 'Bastón', 'Bastón y Espada', 'Bastón Supremo'];
var weaponArcher = ['Arco ','Arco','','','']

var heroPlayer = new Player(heroName);

alert('Bienvenido '+ heroPlayer.type + heroPlayer.name + '. Vamos a comenzar tu aventura.');
alert('Estás en el Reino del Norte. Te despertaste en un callejón de un pequeño pueblo llamado \"Los Dedos\".');
alert('Por el momento no tenés dinero, ni armadura, ni armas.');