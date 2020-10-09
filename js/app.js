var data = [
	{
		"title": "Елизавета Залупкина",
		"image": "../images/1.jpg"
	}
]


var imageCellsArray = document.getElementsByClassName('cell__image');
console.log(imageCellsArray)

for (var i = 0; i < imageCellsArray.length; i++) {
	var imageCell = imageCellsArray[i];

	console.log(imageCell)
}




for (var i = 0; i < data.length; i++) {
	console.log(data[i])
}



var cardBox = document.getElementsByClassName('cardBox')[0];
var card = cardBox.getElementsByClassName('card')[0];

card.addEventListener('click', function (e) {
	e.preventDefault();
	this.classList.toggle('is-flipped');
})