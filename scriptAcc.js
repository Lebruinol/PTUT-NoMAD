//script de la page d'acceuil


var carrouselWN = document.getElementById("whatsnew");
var carrouselWNG = document.getElementById("wnSlideGauche");
var carrouselWND = document.getElementById("wnSlideDroite");


//setup des events
carrouselWNG.onclick = carrousselSlideGauche();

carrouselWN.onclick = console.log("SLIDE");




//var carrouselWNBackgroundImg = carrouselWN.getAttribute("background");

carrouselWN.setAttribute("background", "url(img/oralPres.jpg)");




function carrousselSlideGauche() {
	console.log("Carrousel slide gauche");
	carrouselWN.setAttribute("background", "url(img/oralPres.jpg)");
	
	//mise a jour du text et du titre
	
	//faire la maitrise de la transition
}