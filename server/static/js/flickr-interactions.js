/* BEGIN FLICKR UI/UX EVENT LISENTERS */
var flickr_toast = document.getElementById('flickr-toast');
var flickr_input_box = document.getElementById('flickr-input');
var flickr_keyboard = document.getElementById('flickr-keyboard');
var flickr_help_button = document.getElementById('flickr-help-button');

function flickrTrigger(e){
	console.log("Dismiss: ", e);
	flickr_keyboard.dismiss();
	call_flickr_api(true); // Query Flickr's API
	flickr_search_query = ''; // Reset query for the next search
	flickr_input_box.value = '';
}

function call_flickr_api(make_flickr_query){
	var FLICKR_CONTAINER = ["flickrimage1", "flickrimage2", "flickrimage3", "flickrimage4", "flickrimage5", "flickrimage6", "flickrimage7", "flickrimage8", "flickrimage9", "flickrimage10", "flickrimage11", "flickrimage12"];
	if(make_flickr_query){
		var photo_tag = document.getElementById('flickr-input').value;
		console.log(photo_tag);
		var apiKey = new FrameConfig().flickr_key;
		var flickr = new Flickr(apiKey);
		flickr.photos.search({
			tags: photo_tag
		}, function(response) {
			var photos = response.photos.photo;
			console.log(photos);
			for(var x = 0; x <= 12; x++){
				document.querySelector('#'+FLICKR_CONTAINER[x]).setAttribute('src', photos[x].src());
			}
		});
	}
	else{
		console.log("Error, Flickr API call forbidden");
	}

}

// Show toast pop-up when button is clicked, and close when the toast is clicked
flickr_toast.addEventListener('actionevent', ()=>{
	flickr_toast.hide();
});

// Track keyboard input
flickr_keyboard.addEventListener('input', (e)=>{
	flickr_search_query += e.detail;
	//console.log(youtube_search_query);
});

// When the user presses backspace
flickr_keyboard.addEventListener('backspace', (e)=>{
	flickr_input_box.value = flickr_input_box.value.substring(0, flickr_input_box.value.length - 1);
	flickr_search_query = flickr_search_query.substring(0, flickr_search_query.length - 1);
	//console.log(flickr_input_box.value);
	//console.log(flickr_search_query);
});

// Listen for keyboard close
flickr_keyboard.addEventListener('dismiss', (e)=>{
	console.log("FLICKR!!!!!!!!!!");
	flickrTrigger(e);
});
/* END FLICKR UI/UX EVENT LISENTERS */