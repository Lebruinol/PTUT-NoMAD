
let imgWN = ["img/progWeb.jpg", "img/oralPres.jpg"];
let aTitreWN = ["Site Web en cours de création", "Presentation du projet PTUT au département"];
let aTexteWN = ["<p>Imaginez un magnifique site présentant le projet, documentant les ressources, un site étalant les richesses du projet.</br>Et bien c'est pour bientôt.</p>", 'Dans le cadre des "oraux PTUT de mi-parcours", le projet sera présenté jeudi 6 janvier 2022 en salle PER2A, au département GEII de l\'IUT de Bordeaux.'];
var icar = 0;


//script de la page d'acceuil


var carrouselWN = document.getElementById("whatsnew");
var carrouselWNG = document.getElementById("wnSlideGauche");
var carrouselWND = document.getElementById("wnSlideDroite");
var carrouselTitre = document.getElementById("titreWN");
var carrouselTexte = document.getElementById("texteWN");


//setup des events
carrouselWNG.onclick = function carrousselSlideGauche() {
	console.log("Carrousel slide gauche");
	icar--;
	if(icar<0) {
		icar = imgWN.length-1;
	}
	carrouselWN.setAttribute("style", "background-image:url("+imgWN[icar]+")");
	carrouselTitre.innerHTML = aTitreWN[icar];
	carrouselTexte.innerHTML = aTexteWN[icar];
	
	//mise a jour du text et du titre
	
	//faire la maitrise de la transition
};

carrouselWN.onclick = console.log("SLIDE");
carrouselWND.onclick = function carrousselSlideDroite() {
	console.log("Carrousel slide droite");
	icar++;
	if(icar>=imgWN.length) {
		icar = 0;
	}
	carrouselWN.setAttribute("style", "background-image:url("+imgWN[icar]+")");
	
	//mise a jour du text et du titre
	
	//faire la maitrise de la transition
};

