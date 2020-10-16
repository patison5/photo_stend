var animationTime = 5*60*1000;
var screensaverApearanceTime = 2*60*1000;
var screensaverAnimationTime = 1000;
var serverRoute = "get.php";
var serverRouteAssets = "";

var timer = setTimeout(function(){ showScreenSaver() }, screensaverApearanceTime);
var apearanceTimer;
var hideTimer;

function showScreenSaver () {
	clearTimeout(hideTimer)
	var screensaver = document.getElementById('screensaver-js');
	screensaver.style.display = "flex";

	apearanceTimer = setTimeout(function () {
		var screensaver = document.getElementById('screensaver-js');
		screensaver.style.opacity = "1";
	}, screensaverAnimationTime)
}

function getRandomTime (min, max) {
  return Math.random() * (max - min) + min;
}


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


function draw_card (id, data) {
	var cellInfo = data[id];

	var card = document.getElementsByClassName('card')[0];
	var cardBoxWrap = document.getElementsByClassName('cardBox-wrap')[0];

	var cardFrontSide = cardBoxWrap.getElementsByClassName('card__side--front')[0];
	var cardBackSide  = cardBoxWrap.getElementsByClassName('card__side--back')[0];

	var videlem 	= document.createElement("video");
	var sourceMP4 	= document.createElement("source"); 
	var speaker 	= document.createElement('h2');
	var hero = document.createElement('p');
	var city = document.createElement('p');
	var videoDescWrap = document.createElement('div');

	// back
	cardBackSide.innerHTML = "";

	hero.innerHTML = cellInfo.hero;
	hero.classList.add('hero');

	var backSideImageWrap = document.createElement('div')
	var backSideImage = document.createElement('img');
	backSideImage.src = serverRouteAssets + cellInfo.image;
	backSideImage.height  = 540;

	backSideImageWrap.appendChild(backSideImage)
	cardBackSide.appendChild(backSideImageWrap)
	cardBackSide.appendChild(hero)

	// front
	sourceMP4.type = "video/mp4";
	sourceMP4.src  = serverRouteAssets + cellInfo.video;


	videlem.autoplay = true;
	videlem.height  = 540;
	// videlem.setAttribute('controls', "");
	videlem.appendChild(sourceMP4);

	videoDescWrap.classList.add('videoDescWrap')
	speaker.innerHTML = cellInfo.speaker;
	city.innerHTML = cellInfo.city;
	city.classList.add('city');

	cardFrontSide.innerHTML = "";

	videoDescWrap.appendChild(speaker);
	videoDescWrap.appendChild(city);


	cardFrontSide.appendChild(videlem);
	cardFrontSide.appendChild(videoDescWrap);

	var closeBtn = document.createElement('div');
	closeBtn.classList.add('close');
	cardFrontSide.appendChild(closeBtn);

	videlem.addEventListener( "loadedmetadata", function (e) {
	    var width  = this.videoWidth,
	        height = this.videoHeight;

	    card.style.display = "block";
		cardBoxWrap.style.display = "block";

	    var cardFrontSideHeight1 = window.getComputedStyle(cardFrontSide).height;
		var cardFrontSideHeight2 = $('.card__side').outerHeight() // фиксануть
		cardBoxWrap.style.paddingTop = 540 - cardFrontSideHeight2 / 2 + 'px';

		cardBackSide.style.minHeight = cardFrontSideHeight2 + 'px';

	}, false );

	closeBtn.addEventListener('click', function (e) {
		e.preventDefault();

		card.style.display = "none";
		cardBoxWrap.style.display = "none";
		console.log(videlem)

		videlem.pause();
        videlem.currentTime = 0;
	})
}



function hideBoxAnimated (imageCell) {
	imageCell.style.opacity = "0"
}

async function drawMainContent () {

	let response = await fetch(serverRoute);
	let data;

	if (response.ok) { // если HTTP-статус в диапазоне 200-299
	  // получаем тело ответа (см. про этот метод ниже)
	  data = await response.json();
	} else {
	  alert("Ошибка HTTP: " + response.status);
	  return;
	}


	var imageCellsArray = document.getElementsByClassName('cell__image');
	var shuffledData = getShuffeledData(data);

	for (var i = 0; i < shuffledData.length; i++) {
		var imageCell = imageCellsArray[i];
		var image = document.createElement('div');

		// imageCell.style.background = "url('" + shuffledData[i].image + "') no-repeat center center";
		image.style.backgroundColor = "none";
		image.setAttribute('data-bg', serverRouteAssets + shuffledData[i].image);
		image.style.backgroundSize = "cover";
		image.setAttribute('data-index', i);
		image.classList.add('lazy');
		image.classList.add('c-img');


		image.addEventListener('click', function (e) {
			e.preventDefault();
			draw_card(this.dataset.index, shuffledData);
		})

		imageCell.addEventListener('click', function (e) {
			console.log(this)
		})


		imageCell.style.opacity = "1"
		setTimeout(hideBoxAnimated.bind(null, imageCell), animationTime - 1000);

		imageCell.innerHTML = "";
		imageCell.appendChild(image)
	}

	var lazyLoadInstance = new LazyLoad({
	  callback_loaded: (el) => {
	  	var time = getRandomTime(0, 1)*2000;
	  	setTimeout(function (e) {
	  		el.classList.add("cell__image-animated")
	  		el.style.opacity = "1";
	  	}, time)
	  }
	});

	lazyLoadInstance.update();
}

drawMainContent()


setInterval(function (e) {
	drawMainContent();
}, animationTime)







var searchBTN = document.getElementById('search_btn-js');
searchBTN.addEventListener('click', async function (e) {
	e.preventDefault();

	let response = await fetch(serverRoute);

	if (response.ok) {
		let data = await response.json();

		var searchInput = document.getElementById('search_input-js');
		var searchValue = searchInput.value;

		var mainContent = document.getElementsByClassName('main')[0];
		var searchContent = document.getElementsByClassName('searching')[0];

		var filteredData = data.filter(hero => hero.hero.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

		mainContent.style.display = "none";
		searchContent.style.display = "block";

		var searchingTextLabel = document.getElementById('searching-text-js');
		searchingTextLabel.innerHTML = "По вашему запросу найдено " + filteredData.length + " " + searchValue;

		var num = (filteredData.length <= 6) ? filteredData.length : 6;

		var searchingGrid = document.getElementsByClassName('searching-grid')[0];	
		searchingGrid.innerHTML = "";

		for (var i = 0; i < num; i++) {
			var searchingBox = document.createElement('div');
			searchingBox.classList.add('searching-box');
			searchingBox.style.background = "url('" + serverRouteAssets + filteredData[i].image + "') no-repeat center center";
			searchingBox.style.backgroundSize = 'cover';
			searchingBox.dataset.index = i;
					
			searchingGrid.appendChild(searchingBox);
			searchingBox.addEventListener('click', async function (e) {
				e.preventDefault();
				draw_card(this.dataset.index, filteredData);
			})
		}
	} else {
	  alert("Ошибка HTTP: " + response.status);
	  return;
	}
})



var returnBtn = document.getElementById('return_back-js');
returnBtn.addEventListener('click', function (e) {
	e.preventDefault();

	var mainContent = document.getElementsByClassName('main')[0];
	var searchContent = document.getElementsByClassName('searching')[0];

	mainContent.style.display = "block";
	searchContent.style.display = "none";
	drawMainContent()
})





window.addEventListener('click', function (e) {
	e.preventDefault();
	clearTimeout(timer);
	clearTimeout(apearanceTimer)

	timer = setTimeout(function(){ showScreenSaver() }, screensaverApearanceTime);

	var screensaver = document.getElementById('screensaver-js');
	screensaver.style.opacity = "0";

	hideTimer = setTimeout(function () {
		var screensaver = document.getElementById('screensaver-js');
		screensaver.style.display = "none";
	}, screensaverAnimationTime)
})

