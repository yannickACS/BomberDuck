const gameBoardElt = document.getElementById("gameBoard");


// console.log (level[0][1]);

function worldLayout ( level ){
	// for ( let ligne of level ){
	// 	for ( let caseElement of ligne ){
	// 		console.log(level[ligne][caseElement]);
	// 	}
	// }
	gameBoardElt.innerHTML = "";
	for ( let i = 0; i < levelHeight; i++){
		createRow(i);
		for ( let j = 0; j < levelWidth; j++){
			// console.log(level[i][j]);
			let eltToLayout = level[i][j];
			switch (eltToLayout){
				case "#" :
				wallLayout(i, j);
				break;
				case "":
				pathLayout(i, j);
				break;
				case "h" :
				heroLayout(i, j);
				break;
				case "m":
				monsterLayout(i, j);
			
				// default:
				// console.log("erreur dans l'affichage du niveau");
			}
		}
	}
}

function createRow(i){
	let rowElt = document.createElement("article");
	rowElt.className = "row";
	rowElt.id = "row" + i;
	gameBoardElt.appendChild(rowElt);
}

function wallLayout(i, j){
	let wallElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	wallElt.id = alphabet[i] + j;
	wallElt.className = "wall";
	wallElt.className += " cell";
	rowPlacement.appendChild(wallElt);
}

function pathLayout(i, j){
	let pathElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	pathElt.id = alphabet[i] + j;
	pathElt.className = "path";
	pathElt.className += " cell";
	if (bombIsSet){
		if ((bombPosition[0] == i ) && (bombPosition[1] == j)){
			pathElt.className += " bomb";
		}
	}
	rowPlacement.appendChild(pathElt);
}

function heroLayout(i, j){
	let pathElt = document.createElement("div");
	let heroElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	pathElt.className = "path";
	pathElt.className += " cell";
	pathElt.id = alphabet[i] + j;
	heroElt.className = "hero";
	heroElt.className += " cell";
	pathElt.appendChild(heroElt);
	rowPlacement.appendChild(pathElt);
}


function monsterLayout(i, j){
	let pathElt = document.createElement("div");
	let monsterElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	pathElt.className = "path";
	pathElt.className += " cell";
	pathElt.id = alphabet[i] + j;
	monsterElt.className = "monster";
	monsterElt.className += " cell";
	//monsterElt.className += " monsterNumber" + nombreMonstre.shift();
	pathElt.appendChild(monsterElt);
	rowPlacement.appendChild(pathElt);
}

function turn(){
	moveMonsters();
	worldLayout(level);
}

let boucleJeu = setInterval(turn, 100);

