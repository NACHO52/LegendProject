
alert('Bienvenido a Legends Heroes');
alert('Vamos a crear a tu Héroe.');

var heroName = prompt('Ingresá el nombre de tu personaje: ');
var heroGender = prompt('Elegí el genero de tu personaje: \n' + '(0) ' + genders[0] + ' \n' + '(1) ' + genders[1] + '');
var heroType = prompt('Elegí la clase de tu personaje: \n' + '(0)  ' + heroTypes[0] +'\n' + '(1)  ' + heroTypes[1] +'\n' + '(2)  ' + heroTypes[2] +'\n' + '(3)  ' + heroTypes[3] +'\n' + '(4)  ' + heroTypes[4] +'\n');
var heroPlayer = new Player(heroName, heroGender, heroType);  
heroPlayerJson = JSON.stringify(heroPlayer);
localStorage.setItem('heroPlayer',heroPlayerJson);
var imagNode = document.createElement('img');
imagNode.src = 'initPlayer.png'
var divNode = document.getElementById('picture');
divNode.appendChild(imagNode);

if(heroPlayer.gender === genders[1]) {
    alert('Bienvenido Lord '+ heroPlayer.name + '. Sos un ' + heroPlayer.type + '. Vamos a comenzar tu aventura.');
} else if (heroPlayer.gender === genders[0]) {
    alert('Bienvenido Lady '+ heroPlayer.name + '. Sos una ' + heroPlayer.type + '. Vamos a comenzar tu aventura.');
}

alert('CAPITULO 1: \"El principio del viaje.\"');
alert('Estás en la ciudad de Puerto Blanco, acabas de despertarte en un muelle con una botella de ron en tu mano,\n sin tener idea de porque estás ahí. \nDecides levantarte y buscar a alguien conocido.');
alert('Te das cuenta de que perdiste el arma que tenías anoche. \nY lo unico que hay en tu bolsillo son '+ heroPlayer.gold + ' monedas de oro.');
heroPlayer.gold = 0;

alert('De repente, un ladron pasa corriendo y te roba tu oro.');
var choise1 = prompt('Tenés dos opciones: \n(0) \"perseguirlo\"\n(1) \"dejarlo ir\"');
if(choise1 === 'perseguirlo') {
alert('Corrés velozmente para alcanzarlo, no podés ver su rostro por que lo cubre con un trapo de color negro y azul. ' + 
      '\nPor desgracia estás tan mareado por la borrachera que te tropezás y el ladrón se escapa.');
} else if('dejarlo ir') {
alert('El ladón se escapa con tu oro.');
alert('Empezás a caminar por la ciudad.')
}

alert('Te encotras con una multitud de personas que están viendo la ejecución de un piraata en la horca.');
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
