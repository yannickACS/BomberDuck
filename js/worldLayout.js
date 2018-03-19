const gameBoardElt = document.getElementById("gameBoard");


// console.log (level[0][1]);

function worldLayout ( level ){
	// for ( let ligne of level ){
	// 	for ( let caseElement of ligne ){
	// 		console.log(level[ligne][caseElement]);
	// 	}
	// }
	for ( let i = 0; i < levelHeight; i++){
		createRow(i);
		for ( let j = 0; j < levelWidth; j++){
			console.log(level[i][j]);
			let eltToLayout = level[i][j];
			switch (eltToLayout){
				case "#" :
				wallLayout(i);
				break;
				case "":
				pathLayout(i);
				break;
				case "h" :
				heroLayout(i);
				break;
				case "m":
				monsterLayout(i);
				default:
				console.log("erreur dans l'affichage du niveau");
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
function wallLayout(i){
	let wallElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	wallElt.className = "wall";
	wallElt.className += " cell";
	rowPlacement.appendChild(wallElt);

}
function pathLayout(i){
	let pathElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	pathElt.className = "path";
	pathElt.className += " cell";
	rowPlacement.appendChild(pathElt);
}
function heroLayout(i){
	let heroElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	heroElt.className = "hero";
	heroElt.className += " cell";
	rowPlacement.appendChild(heroElt);
}
function monsterLayout(i){
	let monsterElt = document.createElement("div");
	let rowPlacement = document.getElementById ( "row" + i );
	monsterElt.className = "monster";
	monsterElt.className += " cell";
	rowPlacement.appendChild(monsterElt);
}
worldLayout(level);