/* BEGIN YOUTUBE UI/UX EVENT LISENTERS */
let youtube_toast = document.getElementById('youtube-toast');
let youtube_input_box = document.getElementById('youtube-input');
let youtube_keyboard = document.getElementById('youtube-keyboard');
let youtube_help_button = document.getElementById('youtube-help-button');

/* BEGIN YOUTUBE UI/UX EVENT LISENTERS */
// Show toast pop-up when button is clicked, and close when the toast is clicked
youtube_toast.addEventListener('actionclick', ()=>{
	youtube_toast.hide();
});

// Show a help message after clicking the button
youtube_help_button.addEventListener('click', ()=> {
	youtube_toast.setAttribute('scale', {x:1.5, y:1.5, z:1.5});
	youtube_toast.setAttribute('position', {x:-1.49, y:.368, z:-1.6}); 
	youtube_toast.show();
});

// Track keyboard input
youtube_keyboard.addEventListener('input', (e)=>{
	youtube_search_query += e.detail;
	//console.log(youtube_search_query);
});

// When the user presses the enter key
youtube_keyboard.addEventListener('enter', (e)=>{
	console.log("Enter key pressed!");
});

// When the user presses backspace
youtube_keyboard.addEventListener('backspace', (e)=>{
	youtube_input_box.value = youtube_input_box.value.substring(0, youtube_input_box.value.length - 1);
	youtube_search_query = youtube_search_query.substring(0, youtube_search_query.length - 1);
	console.log(youtube_input_box.value);
	console.log(youtube_search_query);
});

// Listen for keyboard close
youtube_keyboard.addEventListener('dismiss', (e)=>{
	console.log("Dismiss: ", e);
	youtube_keyboard.dismiss();
	make_youtube_query = true;
	call_youtube_api(make_youtube_query); // Query YouTube's API
	youtube_input_box.value = '';
	youtube_search_query = ''; // Reset query for the next search
});
/* END YOUTUBE UI/UX EVENT LISENTERS */