// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

var search_query = 'aimer';
var responseJSON = '';

// Get API key from config.js
var fc = new FrameConfig();
var API_KEY = fc.key;

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
	// First, stringify the API response
    var responseString = JSON.stringify(response, '', 2);

	// Then, you're allowed to parse the JSON for indexing like a dictionary
	responseJSON = JSON.parse(responseString);
	console.log(responseJSON.items);
	
    document.getElementById('response').innerHTML += responseString; // Append to DOM el
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey(API_KEY);
    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: search_query
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}