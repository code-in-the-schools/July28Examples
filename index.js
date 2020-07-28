var rectangle = {
  width: 200,
  height: 100
};

function calcArea() {
  var width = rectangle.width;
  var height = rectangle.height;
 var result = width *= height;
 
 console.log("The area of the rectangle is" + 
 result);
 
}
calcArea();
var rectangle = {
	width:  200,
	height: 100
};

function calcPerim() {
	var width = rectangle.width;
	var height = rectangle.height;
	var result = width + height + width + height;
	return result;
}

function calcPerim(wid, hei) {
	var result = wid + hei + wid + hei;
	return result;
}

var thePerim = calcPerim(2,3);
console.log("The perimeter of the rectangle is " + thePerim);

function calcArea() {
	var width = rectangle.width;
	var height = rectangle.height;
	var result = width * height;
	return result;
}

function calcArea(wid, hei) {
	var result = wid * hei;
	return result;
}

var theArea = calcArea(2,3);
console.log("The area of the rectangle is " + theArea);
