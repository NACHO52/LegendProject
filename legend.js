
alert('Bienvenido a Legends Heroes');
var heroTypes = [ 'Caballero', 'Mago', 'Arquero', 'Elfo', 'Enano' ];
var enemyTypes = [ 'Orco', 'Brujo', 'Asesino', 'Elfo Oscuro', 'Demonio', 'Dragón' ];
var genders = ['Femenino','Masculino'];
var sword = { damage : 20, defense : 20, value : 70};
var bow = { damage : 30, defense : 10, value : 50};
var weapons = [sword, bow];
function Player(name, gender, type)
{
    this.name = name;
    this.gender = genders[gender];
    this.type = heroTypes[type];
    this.life = 100;
    this.mana = 100;
    this.attack = 50;
    this.weapon = null;
    this.gold = 50;
}
alert('Vamos a crear a tu Héroe.');
var heroName = prompt('Ingresá el nombre de tu Héroe: ');
var heroGender = prompt('Elegí el genero de tu personaje: \n' + '(0) ' + genders[0] + ' \n' + '(1) ' + genders[1] + '');
var heroType = prompt('Elegí la clase de tu Héroe: \n' +
                      '(0)  ' + heroTypes[0] +'\n' +
                      '(1)  ' + heroTypes[1] +'\n' +
                      '(2)  ' + heroTypes[2] +'\n' +
                      '(3)  ' + heroTypes[3] +'\n' +
                      '(4)  ' + heroTypes[4] +'\n');
var heroPlayer = new Player(heroName, heroGender, heroType);
if(heroPlayer.gender === genders[1]) {
    alert('Bienvenido Lord '+ heroPlayer.name + '. Vamos a comenzar tu aventura.');
} else if (heroPlayer.gender === genders[0]) {
    alert('Bienvenido Lady '+ heroPlayer.name + '. Vamos a comenzar tu aventura.');
}

alert('Estás en la ciudad de Puerto Blanco, acabas de despertarte en un muelle con una botella de ron en tu mano, sin tener idea de porque estás ahí. \nDecides levantarte y buscar a alguien conocido.');
alert('Te das cuenta de que perdiste el arma que tenías anoche. \nY lo unico que hay en tu bolsillo son '+ heroPlayer.gold + ' monedas de oro.');
heroPlayer.gold = 0;
alert('De repente, un ladron pasa corriendo y te roba tu oro.');

var choise1 = prompt('Tenés dos opciones: \n' + '\"perseguirlo\" o \"dejarlo ir\"');
if(choise1 === 'perseguirlo') {
alert('Corrés velozmente para alcanzarlo, no podés ver su rostro por que lo cubre con un trapo de color negro y azul. ' + 
      '\nPor desgracia estás tan mareado por la borrachera que te tropezás y el ladrón se escapa.');
} else if('dejarlo ir') {
alert('El ladón se escapa con tu oro.');
alert('Empezás a caminar por la ciudad.')
}
alert('Te encotras con una multitud de personas que están viendo la ejecución de un pirata en la horca.');
var choise2 = prompt('Es una perfecta oputunidad para robar a las personas mientras estan distraidas' + '\n\"robar\" o \"ver la ejecución\"');
if(choise2 === 'robar') {
    heroPlayer.gold += 450;
    alert('Excelente decisión. Has conseguido ' + heroPlayer.gold + ' monedas de oro.')
} else if(choise2 === 'ver la ejecución') {
    alert('Te acercás para ver a quién están por ahorcar.');
}
alert('Escuchas una voz que dice:  \"' + heroPlayer.name + ', rápido necesito tu ayuda.\"');
alert('Parece que es tu viejo, Rob. \El hombre que están por colgar es su capitán.');
alert('El te dá una espada y te dice que lo ayudes a al capitán.');
heroPlayer.weapon = weapons[0];
var choise3 = prompt('Tenés que elegir: \n\"ayudarlo\" o \"escapar con la espada\"');
if(choise3 === 'ayudarlo') {

} else if(choise3 === 'escapar con la espada') {

}