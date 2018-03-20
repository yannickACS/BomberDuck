let level = [
				["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],
				["#","h", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "m","#"],
				["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"] ];


const legend = { "#" : "wall", "" : "path", "h" : "hero", "m" : "monster", "b" : "bomb", "bh" : "bomb + hero",};
const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];

let levelHeight = level.length;
let levelWidth = level[0].length;
let heroPosition = [1, 1];
let monstrePosition = [];  // stocker comme [posY, posX]
let nombreMonstreInit = 0;
let nombreMonstre = [];
const directions = ["up", "down", "left", "right"];
const directionVecteurs = { "up" : [ -1, 0 ],
							"down" : [ 1, 0 ],
							"left" : [ 0, -1 ],
							"right" : [ 0, 1 ] };
const idGrid = mapCellsId(level);

console.log(idGrid);

function mapCellsId(level){
	let gridOfId = [];
	for (let i = 0; i < levelHeight; i++){
		let range = [];
		for (let j = 0; j < levelWidth; j++){
			range.push(alphabet[i] + j);
		}
		gridOfId.push(range);
	}
	return gridOfId;

}

function monstreInitialPosition(level){    //Spawn of the monster
	for (let i = 0; i < levelHeight; i++){
		for (let j = 0; j < levelWidth; j++){
			// console.log(level[i][j]);
			if ((level[i][j]) == "m"){
				monstrePosition.push([i, j]);
				nombreMonstreInit ++;
			}
		}
		// if ( row.includes("m")){
		// 	monstrePosition.push([row.indexOf("m"), row]);
		// }
	}
}

function affecterNumeroMonstre(){
	if ( nombreMonstreInit > 0 ){
		for ( let i = 0; i < nombreMonstreInit; i++){
			nombreMonstre.push(i);
		}
	}
}
// retourne un element aléatoire d'un tableau
function randomElement(elem){
	return elem[Math.floor(Math.random() * elem.length)];
}
// compile une nouvelle position
function vectorPlus ( vecteurA, vecteurB ){
	return [ vecteurA[0]+vecteurB[0], vecteurA[1]+vecteurB[1]];
}
// trouver l'element DOM ou se situe le hero
function findHeroPosInDom ( heroPosition ){

}





 // monstre

function moveMonsters(){
	
	for (let i = 0; i < levelHeight; i++){
		for (let j = 0; j < levelWidth; j++){
			if (level[i][j] == "m"){
				let vector = [i, j];
				let directionChoix = randomElement(directions);
				let directionVector = directionVecteurs[directionChoix];
				let destinationVector = vectorPlus( vector, directionVector );
				if (level[destinationVector[0]][destinationVector[1]] == "h"){
					gameover(destinationVector);
				} 
				if (( level[destinationVector[0]][destinationVector[1]] != "#" )
					&& ( level[destinationVector[0]][destinationVector[1]] != "m" ) 
					&& ( level[destinationVector[0]][destinationVector[1]] != "h" )) {
					level[destinationVector[0]][destinationVector[1]] = "m";
					level[i][j] = "";
				}
			}
		}
	}	
}




// Hero Moves 4 dir [up, down, left, right]

function heroMoveUp(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["up"]);
	if (level[newHeroPosition[0]][newHeroPosition[1]] == "m" ){
		gameover(newHeroPosition);
	}
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}

function heroMoveDown(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["down"]);
	if (level[newHeroPosition[0]][newHeroPosition[1]] == "m" ){
		gameover(newHeroPosition);
	}
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}

function heroMoveLeft(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["left"]);
	if (level[newHeroPosition[0]][newHeroPosition[1]] == "m" ){
		gameover(newHeroPosition);
	}
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}

function heroMoveRight(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["right"]);
	if (level[newHeroPosition[0]][newHeroPosition[1]] == "m" ){
		gameover(newHeroPosition);
	}
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}


//Bomb
var bomb = document.getElementById('bomb');





function heroDropBomb(){
	let bombPosition = heroPosition;
	var test = idGrid[bombPosition[0]][bombPosition[1]];
	var idGridPosition = document.getElementById (test);
	
	idGridPosition.style.backgroundColor = "Yellow";
	
	//level = "Yellow";
	

	console.log(idGrid[bombPosition[0]][bombPosition[1]]);
	console.log(heroPosition);
	console.log("position dom : " + idGridPosition);	
}





//  fin de partie
function gameover(emplacementMort){
	clearInterval(boucleJeu);
	console.log("gameover");
}
// console.log ( 'test random tableau : ' + randomElement(directions));
monstreInitialPosition(level);
affecterNumeroMonstre(nombreMonstreInit);

// console.log('test position monstres : ' + monstrePosition );
// console.log(level);