const heroElt = document.querySelector("div.hero");





document.addEventListener("keydown", function (e){
	let activeKey = e.code;
	console.log(activeKey);
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
		heroDropBomb();		
		break;
	}

});