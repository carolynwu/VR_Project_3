/* BEGIN FLICKR UI/UX EVENT LISENTERS */
var flickr_toast = document.getElementById('flickr-toast');
var flickr_input_box = document.getElementById('flickr-input');
var flickr_keyboard = document.getElementById('flickr-keyboard');
var flickr_help_button = document.getElementById('flickr-help-button');

// Show toast pop-up when button is clicked, and close when the toast is clicked
flickr_toast.addEventListener('actionevent', ()=>{
	flickr_toast.hide();
});

// Track keyboard input
flickr_keyboard.addEventListener('input', (e)=>{
	flickr_search_query += e.detail;
	//console.log(youtube_search_query);
});

// When the user presses the enter key
flickr_keyboard.addEventListener('enter', (e)=>{
	console.log("Enter key pressed!");
});

// When the user presses backspace
flickr_keyboard.addEventListener('backspace', (e)=>{
	flickr_input_box.value = flickr_input_box.value.substring(0, flickr_input_box.value.length - 1);
	flickr_search_query = flickr_search_query.substring(0, flickr_search_query.length - 1);
	console.log(flickr_input_box.value);
	console.log(flickr_search_query);
});

// Listen for keyboard close
flickr_keyboard.addEventListener('dismiss', (e)=>{
	console.log("Dismiss: ", e);
	flickr_keyboard.dismiss();
	make_flickr_query = true;
	//call_flickr_api(make_flickr_query); // Query Flickr's API
	flickr_search_query = ''; // Reset query for the next search
});

/* END FLICKR UI/UX EVENT LISENTERS */