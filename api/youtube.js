// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

var search_query = 'aimer';
var responseJSON = '';

// Get API key from config.js
var fc = new FrameConfig();
var API_KEY = fc.key;
var video_base = "https://www.youtube.com/watch?v=zSOJk7ggJts";

var REQUEST_LIMIT = 10; // Only return 10 videos

// Arrays for image metadata
var video_thumb = [];
var video_title = [];
var video_id = [];
var video_description = [];

var DEBUG = true;
// Helper function to display JavaScript value on HTML page.
// This function will be repurposed to return only desired parts of the response
function showResponse(response) {
	// First, stringify the API response
    var responseString = JSON.stringify(response, '', 2);

	// Then, you're allowed to parse the JSON for indexing like a dictionary
	responseJSON = JSON.parse(responseString);
	responseJSON = responseJSON.result.items;
	
	// Parse Videos to display concent for the front-end
	for(var x = 0; x < REQUEST_LIMIT; x++){
		video_thumb.push(responseJSON[x].snippet.thumbnails.medium.url);
		video_title.push(responseJSON[x].snippet.title);
		video_id.push(responseJSON[x].id.videoId);
		video_description.push(responseJSON[x].snippet.description);
	}
	
	if(DEBUG){
		console.log(video_thumb);
		console.log(video_title);
		console.log(video_id);
		console.log(video_description);
		
		for(var x = 0; x < REQUEST_LIMIT; x++){
			window.open(video_thumb[x]); // This opens 10 new tabs, be weary
		}
	}

    document.getElementById('response').innerHTML += JSON.stringify(responseJSON, '', 2); // Append to DOM el
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded
function onYouTubeApiLoad() {
    // See http://goo.gl/PdPA1 to get a key for your own application
    gapi.client.setApiKey(API_KEY);
    search(); // Call search() function
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: search_query,
		maxResults: REQUEST_LIMIT,
		type: "video" // Only show videos
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}