
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


// var btn = document.getElementById('btn');
// btn.addEventListener('click', function (e) {
// 	e.preventDefault();

// 	var card = document.getElementsByClassName('card')[0];
// 	console.log(card)
// 	card.style.display = "block";
// })


function getRandomTime (min, max) {
  return Math.random() * (max - min) + min;
}

function findKeyframesRule(rule) {
    // gather all stylesheets into an array
    var ss = document.styleSheets;

    console.log(ss)
    
    // loop through the stylesheets
    for (var i = 0; i < ss.length; ++i) {
        
        // loop through all the rules
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
            
            // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
            if ((ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE || ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) && ss[i].cssRules[j].name == rule)
                return ss[i].cssRules[j];
        }
    }
    
    // rule not found
    return null;
}

// remove old keyframes and add new ones
function change(anim)
{
    // find our -webkit-keyframe rule
  var keyframes = findKeyframesRule(anim);

  console.log('change')
    
  if (keyframes !== null) {
    // remove the existing 0% and 100% rules
    keyframes.deleteRule("0%");
    keyframes.deleteRule("100%");
    
    // create new 0% and 100% rules with random numbers
    keyframes.appendRule("0% { -moz-transform: rotate("+360+"deg); -webkit-transform: rotate("+360+"deg); }");
    keyframes.appendRule("100% { -moz-transform: rotate("+360+"deg); -webkit-transform: rotate("+360+"deg); }");
    console.log(keyframes);
    // assign the animation to our element (which will cause the animation to run)
    		/*document.getElementById('box').style.WebkitAnimationName = anim;
    document.getElementById('box').style.MozAnimationName = anim;*/
  }
    
}

var data = [
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
		{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
		{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/1.png"
	},
	{
		"title": "Елизавета Залупкина",
		"image": "images/2.png"
	}
]


var imageCellsArray = document.getElementsByClassName('cell__image');

for (var i = 0; i < data.length; i++) {

	var imageCell = imageCellsArray[i];
	// imageCell.style.background = "url('" + data[i].image + "') no-repeat center center";
	imageCell.setAttribute('data-bg', data[i].image);
	imageCell.style.backgroundSize = "cover";
	// console.log(imageCell)

	imageCell.addEventListener('click', function (e) {
		e.preventDefault();

		// var video = document.createElement('video');

		// video.src = 'https://www.youtube.com/watch?v=xl2Xx5YOKcI&ab_channel=JohnHammond';
		// video.autoplay = false;
		// video.addEventListener( "loadedmetadata", function (e) {
		//     var width = this.videoWidth,
		//         height = this.videoHeight;

		//     console.log(width, height);
		// }, false );
		// console.log(video)

		// console.log(this)

		var videoRect = {
			"width": 550,
			"height": 350
		}

		// var cardBoxWrap = document.getElementsByClassName('cardBox-wrap')[0];
		// cardBoxWrap.style.display = "flex";
		// console.log(cardBoxWrap)

		// var cardBox = cardBoxWrap.getElementsByClassName('cardBox')[0];

		// cardBox.style.width  = videoRect.width + "px";
		// cardBox.style.height = videoRect.height + "px";
		// cardBox.style.transition = "all 1s ease-out 0.5s";

		// var card = cardBox.getElementsByClassName('card')[0];

		// cardBox.style.left 	 = "calc(50% - " + videoRect.width / 2 + 'px)';
		// cardBox.style.top 	 = "calc(50% - " + videoRect.height / 2 + 'px)';
		// cardBox.style.position = "absolute";

		var card = document.getElementsByClassName('card')[0];
		var cardBoxWrap = document.getElementsByClassName('cardBox-wrap')[0];

		console.log(card)
		card.style.display = "block";
		cardBoxWrap.style.display = "block";

		var cardFrontSide = cardBoxWrap.getElementsByClassName('card__side')[0];
		// var cardFrontSideHeight = window.getComputedStyle(cardFrontSide).height;
		var cardFrontSideHeight = $('.card__side').outerHeight() // фиксануть
		cardBoxWrap.style.paddingTop = 540 - cardFrontSideHeight / 2 + 'px';
		console.log(cardBoxWrap)

		// console.log(cardBox)
	})
}



// var cardBox = document.getElementsByClassName('cardBox')[0];
// var card = cardBox.getElementsByClassName('card')[0];

// card.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	this.classList.toggle('is-flipped');
// })





var lazyLoadInstance = new LazyLoad({
  callback_loaded: (el)=>{
  	var time = getRandomTime(0, 3)*1000;
  	setTimeout(function (e) {
  		el.classList.add("cell__image-animated")
  	}, time)
  }
});



