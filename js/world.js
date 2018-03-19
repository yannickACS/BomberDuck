
const level = [
				["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"],
				["#","h", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "m", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "","#"],
				["#", "","#", "","#", "","#", "","#", "","#", "","#", "","#"],
				["#", "", "", "", "", "", "", "", "", "", "", "", "", "m","#"],
				["#","#","#","#","#","#","#","#","#","#","#","#","#","#","#"] ];


const legend = { "#" : "wall", "" : "path", "h" : "hero", "m" : "monster", "b" : "bomb" };
const levelHeight = 13;
const levelWidth = 15;
let heroPosition = [1, 1];
let monstrePosition = [];// stocker comme [posY, posX]
let nombreMonstreInit = 0;
let nombreMonstre = [];
let directions = ["up", "down", "left", "right"];
let directionVecteurs = { "up" : [ -1, 0 ],
							"down" : [ 1, 0 ],
							"left" : [ 0, -1 ],
							"right" : [ 0, 1 ] };

function monstreInitialPosition(level){
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
function randomElement(elem){
	return elem[Math.floor(Math.random() * elem.length)];
}
function vectorPlus ( vecteurA, vecteurB ){
	return [ vecteurA[0]+vecteurB[0], vecteurA[1]+vecteurB[1]];
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
				console.log( 'vecteur destination : ' + destinationVector );
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
// moves hero

function heroMoveUp(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["up"]);
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}
function heroMoveDown(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["down"]);
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}
function heroMoveLeft(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["left"]);
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}
function heroMoveRight(){
	let newHeroPosition = vectorPlus(heroPosition, directionVecteurs["right"]);
	if ((level[newHeroPosition[0]][newHeroPosition[1]] != "#" ) && (level[newHeroPosition[0]][newHeroPosition[1]] != "m" )){
		level[newHeroPosition[0]][newHeroPosition[1]] = "h";
		level[heroPosition[0]][heroPosition[1]] = "";
		heroPosition = newHeroPosition;
	}
}
function heroDropBomb(){
	
}
// console.log ( 'test random tableau : ' + randomElement(directions));
monstreInitialPosition(level);
affecterNumeroMonstre(nombreMonstreInit);

// console.log('test position monstres : ' + monstrePosition );
// console.log(level);