
var position = 0
function transition(delta){
	position += delta
	if (position < -1){
		position = -1
	}
	if (position > 1){
		position = 1
	}
var body = document.querySelector("body")
body.classList.remove("image_center", "image_right", "image_left")
if (position == 0) {
	body.classList.add("image_center")
}
if (position == -1){
	body.classList.add("image_left")
}
if (position == 1){
	body.classList.add("image_right")
}

}

var moveLeft = function(){
	transition(-1)
}

var moveRight = function(){
	transition(1)
}

var left = document.querySelector("[data-arrow=left]")
left.addEventListener("click", moveLeft)

var right = document.querySelector("[data-arrow=right]")
right.addEventListener("click", moveRight)

