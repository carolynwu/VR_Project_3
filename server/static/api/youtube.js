// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Get API key from config.js
var fc = new FrameConfig();
var API_KEY = fc.key;

function call_youtube_api(make_query){
	if(make_query){
		var search_query = document.querySelector('a-input').value; // Select this from the aframe-materials textbox
		console.log("TESTING TESTING TESTING " + search_query);
		var responseJSON = '';

		var video_base = "https://www.youtube.com/watch?v=";

		var REQUEST_LIMIT = 10; // Only return 10 videos

		// Arrays for image metadata
		var video_thumb = [];
		var video_title = [];
		var video_id = [];
		var video_description = [];

		var DEBUG = true;
		var TEST_TABS = false;
		var VIDEO_DOMS = ["video1", "video2", "video3", "video4", "video5"];
		var IMAGE_CONTAINERS = ["image1", "image2", "image3", "image4", "image5"];
		
		// Called in showResponse() when all of the data needed to show the front-end 
		// has been collected and stored in arrays
		function formatVideoInformation(){
			for(var x = 0; x < REQUEST_LIMIT/2; x++){
				let video_url = video_base + video_id[x];
				console.log(video_url);
				/*document.getElementById(VIDEO_DOMS[x]).innerHTML += "<p>" + video_title[x] +"</p> <br>";
				document.getElementById(VIDEO_DOMS[x]).innerHTML += "<p>" + video_description[x] +"</p> <br>";
				document.getElementById(VIDEO_DOMS[x]).innerHTML += "<a href=" + video_base + video_id[x] + ">" + "URL: " + video_base + video_id[x] + "</a> <br>";
				document.getElementById(VIDEO_DOMS[x]).innerHTML += "<img href=" + video_url + " src=" + video_thumb[x] + "> <br>";*/
				
				document.getElementById(IMAGE_CONTAINERS[x]).src = video_thumb[x];
			}	
		}
		
		// Helper function to display JavaScript value on HTML page.
		// This function will be repurposed to return only desired parts of the response
		function showResponse(response) {
			// First, stringify the API response
			var responseString = JSON.stringify(response, '', 2);

			// Then, you're allowed to parse the JSON for indexing like a dictionary
			responseJSON = JSON.parse(responseString);
			responseJSON = responseJSON.result.items;
			
			// Parse Videos to display content for the front-end - Only parse 5 videos
			for(var x = 0; x < REQUEST_LIMIT/2; x++){
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
				
				if(TEST_TABS){
					for(var x = 0; x < REQUEST_LIMIT; x++){
						window.open(video_thumb[x]); // This opens 10 new tabs, be weary
					}
				}
			}

			//document.getElementById('response').innerHTML += JSON.stringify(responseJSON, '', 2); // Append to DOM el
			
			formatVideoInformation(); // Call function to parse the data from 5 videos
		}

		// Called automatically with the response of the YouTube API request.
		function onSearchResponse(response) {
			showResponse(response);
		}

		
		function search() {
			// Use the JavaScript client library to create a search.list() API call.
			var request = gapi.client.youtube.search.list({
				part: 'snippet',
				q: search_query,
				maxResults: REQUEST_LIMIT, // return 10 videos
				type: "video" // Only show videos
			});
			
			// Send the request to the API server,
			// and invoke onSearchRepsonse() with the response.
			request.execute(onSearchResponse);
		}

		// Called automatically when YouTube API interface is loaded
		function onYouTubeApiLoad() {
			// See http://goo.gl/PdPA1 to get a key for your own application
			gapi.client.setApiKey(API_KEY);
			search(); // Call search() function
		}

		// Begin function calls
		gapi.client.load('youtube', 'v3', onYouTubeApiLoad);

	}
}