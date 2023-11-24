const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
let compteur = 0;

let image = document.querySelector(".banner-img")
const urlImageBase = "./assets/images/slideshow/"
let tagLine = document.getElementById("texte")

let baliseArrowLeft = document.getElementById("arrowleft");
baliseArrowLeft.addEventListener("click", function slidePrecedente () {
	const allDots = document.querySelectorAll(".dots .dot")
	allDots[compteur].classList.remove("dot_selected")
	if(compteur > 0) {
		compteur = compteur - 1	
	} else {
		compteur = slides.length -1;
	}
	allDots[compteur].classList.add("dot_selected")
	image.src= urlImageBase + slides[compteur].image
	tagLine.innerHTML = slides[compteur].tagLine
	console.log("je clic à gauche", compteur)
});

let baliseArrowRight = document.getElementById("arrowright");
baliseArrowRight.addEventListener("click", function slideSuivante(){
	const allDots = document.querySelectorAll(".dots .dot")
	allDots[compteur].classList.remove("dot_selected")
	if(compteur < slides.length - 1) {
		compteur = compteur + 1	
	} else {
		compteur = 0;
	}
	allDots[compteur].classList.add("dot_selected")
	image.src= urlImageBase + slides[compteur].image
	tagLine.innerHTML = slides[compteur].tagLine
	console.log("je clic à droite", compteur)
});

let baliseBulletPoint = document.getElementsByClassName("dots")
 for(let i = 0; i < slides.length; i++) {
	let nouvelElement = document.createElement("div");
	nouvelElement.classList.add("dot")
	baliseBulletPoint[0].appendChild(nouvelElement);
	if (i === compteur) {
		nouvelElement.classList.add("dot_selected");
	}
}