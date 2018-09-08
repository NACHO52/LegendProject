var heroTypes = [ 'Caballero', 'Mago', 'Arquero', 'Elfo', 'Enano' ];
var enemyTypes = [ 'Orco', 'Brujo', 'Asesino', 'Elfo Oscuro', 'Demonio', 'Dragón' ];
var genders = ['Femenino','Masculino'];
var sword = { damage : 25, value : 30};
var bow = { damage : 20, value : 15};
var axe = {damage : 30, value: 30}
var weapons = [sword, bow, axe];

function Player(name, gender, type)
{
    this.name = name;
    this.gender = gender;
    this.type = heroTypes[type];
    this.life = 100;
    this.mana = 100;
    this.attack = 50;
    this.weapon = null;
    this.gold = 50;
}
