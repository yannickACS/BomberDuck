const heroElt = document.querySelector("div.hero");



// document.addEventListener("keyup", function (e){
// 	let activeKey = e.code;
// 	// console.log(activeKey);
// 	e.stopPropagation();
// 	switch (activeKey){
// 		case "ArrowUp":
// 		heroMoveUp();
// 		break;
// 		case "ArrowDown":
// 		heroMoveDown();
// 		break;
// 		case "ArrowLeft":
// 		heroMoveLeft();
// 		break;
// 		case "ArrowRight":
// 		heroMoveRight();
// 		break;
// 		case "Space":
// 		if (( !bombIsSet ) && ( !explosionRun )) heroDropBomb();	
// 		break;
// 	}
// 	e.preventDefault();
// });
window.addEventListener( "keyup", eventManager );
function eventManager(e){
	let activeKey = e.code;
	// console.log(activeKey);
	e.stopPropagation();
	switch (activeKey){
		case "ArrowUp":
		heroMoveUp();
		break;
		case "ArrowDown":
		heroMoveDown();
		break;
		case "ArrowLeft":
		heroMoveLeft();
		break;
		case "ArrowRight":
		heroMoveRight();
		break;
		case "Space":
		if (( !bombIsSet ) && ( !explosionRun )) heroDropBomb();	
		break;
	}
	e.preventDefault();
}