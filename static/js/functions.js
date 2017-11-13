var app = angular.module("bbApp", []);

app.controller("lobbyCtrl", function($scope, $window) {
	//data storage
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext("2d");
	
	//image dimensions unknown at this stage, assume same size as canvas, display from 0,0 and set current room to lobby
	var imageWindowWidth = canvas.width;
	var imageHeight = canvas.height;
	var windowX = 0;
	var windowY = 0;
	var panInterval = 100;
	var currentRoom = 0;  //0=lobby
	
	//add functionality for clickable hotspots in currentRoom - CHANGE TO READ FROM JSON DATA
	canvas.addEventListener('click', function($event){
		var x = $event.x - windowX;
		var y = $event.y - windowY;
		console.log ( x + " " + y);
		if((x > 0 && x < 200) && (y > 100 && y < 300)){
			$scope.newRoom(1); //Room 1 is theatre
		}
	});
	
	//set up the current room image, displaying from centre of room to start with
	$scope.canvasSetUp = function(currRoom){
		$scope.imageObject = new Image();
		if(currRoom==0){
			$scope.imageObject.src = "assets/lobbyImage.jpg";
		}
		else if(currRoom == 1){
			$scope.imageObject.src = "assets/theatre.jpg";
		}
		//attempt to scale image to canvas height but works best if image created to dimensions 2000 x 400 due to lack of precision of math functions
		var scaleFactor = $scope.imageObject.height / canvas.height;
		imageHeight = $scope.imageObject.height;
		imageWindowWidth = $scope.imageObject.width / scaleFactor ;
		windowX = ($scope.imageObject.width / 2) - (canvas.width / 2);
		
		//redraw image on canvas
		ctx.drawImage($scope.imageObject, windowX, windowY, imageWindowWidth, imageHeight, 0, 0, canvas.width, canvas.height);
	};
	

	//test for need to disable pan buttons when at edge of image
	$scope.canPanRight = true;
	$scope.atRightEdge = function(){
		return !($scope.canPanRight);
	};
	$scope.atLeftEdge = function(){
		return windowX <= 0;
	};

	//shift image up to 100 pixels to right  SORT over run at edge - may be to do with scaling.
	$scope.panRight = function(){
		console.log("panning right");
		windowX += panInterval;
		if(windowX >= $scope.imageObject.width - canvas.width){
			$scope.canPanRight = false;
			windowX = $scope.imageObject.width - canvas.width;
		}
		ctx.drawImage($scope.imageObject, windowX, windowY, imageWindowWidth, imageHeight, 0, 0, canvas.width, canvas.height);	
	};
	
	//shift image up to 100 pixels to left
	$scope.panLeft = function(){
		console.log("panning left");
		windowX -= panInterval;
		if(windowX < 0){
			windowX = 0;
		}
		ctx.drawImage($scope.imageObject, windowX, windowY, imageWindowWidth, imageHeight, 0, 0, canvas.width, canvas.height);
	};
	
	//change image to new room,  ADD loading new set of hotspots
	$scope.newRoom = function(currRoom){
		console.log("In new room " + currRoom);
		$scope.canvasSetUp(currRoom);
		currentRoom = currRoom;
	};
});




