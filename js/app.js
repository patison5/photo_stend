
function flipCard () {
   if (switching) {
      return false
   }
   switching = true
 
   $card.toggleClass('is-switched')

   window.setTimeout(function () {
      $card.children().children().toggleClass('is-active')
      switching = false
   }, cardTransitionTime / 2)
}


function getRandomTime (min, max) {
  return Math.random() * (max - min) + min;
}



var data = [
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
		{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
		{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png",
		"video_src": "videos/test.mp4",
		"video_type": "video/mp4"
	}
]


function getShuffeledData (data) {
	var keys = [];
	for (var i = 0; i < data.length; i++) keys.push(i)

	keys.sort(() => Math.random() - 0.5);

	var result = [];
	keys = keys.slice(0, 42);

	for (var i = 0; i < keys.length; i++)
		result.push(data[keys[i]])

	return result
}

console.log(getShuffeledData(data))

function draw_card (id) {
	var cellInfo = data[id];

	var card = document.getElementsByClassName('card')[0];
	var cardBoxWrap = document.getElementsByClassName('cardBox-wrap')[0];

	var cardFrontSide = cardBoxWrap.getElementsByClassName('card__side--front')[0];

	var videlem 	= document.createElement("video");
	var sourceMP4 	= document.createElement("source"); 
	var title 		= document.createElement('h2');

	sourceMP4.type = cellInfo.video_type;
	sourceMP4.src  = cellInfo.video_src;

	videlem.autoplay = true;
	videlem.setAttribute('controls', "");
	videlem.appendChild(sourceMP4);

	title.innerHTML = cellInfo.title;

	cardFrontSide.innerHTML = "";
	cardFrontSide.appendChild(videlem);
	cardFrontSide.appendChild(title);

	var closeBtn = document.createElement('div');
	closeBtn.classList.add('close');
	cardFrontSide.appendChild(closeBtn);

	videlem.addEventListener( "loadedmetadata", function (e) {
	    var width  = this.videoWidth,
	        height = this.videoHeight;

	    console.log(width, height);

	    card.style.display = "block";
		cardBoxWrap.style.display = "block";

	    var cardFrontSideHeight1 = window.getComputedStyle(cardFrontSide).height;
		var cardFrontSideHeight2 = $('.card__side').outerHeight() // фиксануть
		cardBoxWrap.style.paddingTop = 540 - cardFrontSideHeight2 / 2 + 'px';
		console.log(parseFloat(cardFrontSideHeight1))
		console.log(cardFrontSideHeight2)

	}, false );

	closeBtn.addEventListener('click', function (e) {
		e.preventDefault();

		card.style.display = "none";
		cardBoxWrap.style.display = "none";
	})
}





function drawMainContent () {
	var imageCellsArray = document.getElementsByClassName('cell__image');
	var shuffledData = getShuffeledData(data);

	for (var i = 0; i < shuffledData.length; i++) {
		var imageCell = imageCellsArray[i];
		var image = document.createElement('div');

		// imageCell.style.background = "url('" + shuffledData[i].image + "') no-repeat center center";
		image.setAttribute('data-bg', shuffledData[i].image);
		image.style.backgroundSize = "cover";
		image.setAttribute('data-index', i);
		image.classList.add('lazy');
		image.classList.add('c-img');

		image.addEventListener('click', function (e) {
			e.preventDefault();

			draw_card(this.dataset.index);
		})

		imageCell.innerHTML = "";
		imageCell.appendChild(image)
	}

	var lazyLoadInstance = new LazyLoad({
	  callback_loaded: (el) => {
	  	var time = getRandomTime(0, 2)*1000;
	  	setTimeout(function (e) {
	  		el.classList.add("cell__image-animated")
	  	}, time)
	  }
	});

	lazyLoadInstance.update();
}

drawMainContent()


setInterval(function (e) {
	console.log('fuck')
	drawMainContent();
}, 10000)







var searchBTN = document.getElementById('search_btn-js');
searchBTN.addEventListener('click', function (e) {
	e.preventDefault();

	var searchInput = document.getElementById('search_input-js');
	var num = 1;
	var searchValue = searchInput.value;

	var mainContent = document.getElementsByClassName('main')[0];
	var searchContent = document.getElementsByClassName('searching')[0];

	mainContent.style.display = "none";
	searchContent.style.display = "block";

	var searchingTextLabel = document.getElementById('searching-text-js');
	searchingTextLabel.innerHTML = "По вашему запросу найдено " + num + " " + searchValue;

	var searchingBox = document.createElement('div');
	searchingBox.classList.add('searching-box');
	searchingBox.style.background = "url('images/1.png') no-repeat center center";
	searchingBox.style.backgroundSize = 'cover';
	searchingBox.dataset.index = '1';

	var searchingGrid = document.getElementsByClassName('searching-grid')[0];

	searchingGrid.innerHTML = "";
	searchingGrid.appendChild(searchingBox)


	searchingBox.addEventListener('click', function (e) {
		e.preventDefault();

		draw_card(this.dataset.index);
	})

})



var returnBtn = document.getElementById('return_back-js');
returnBtn.addEventListener('click', function (e) {
	e.preventDefault();

	var mainContent = document.getElementsByClassName('main')[0];
	var searchContent = document.getElementsByClassName('searching')[0];

	mainContent.style.display = "block";
	searchContent.style.display = "none";
})


