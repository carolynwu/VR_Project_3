console.log("Networking player model schema...");
// Player model schema
NAF.schemas.add({
template: '#avatar-template',
components: [
  'position',
  'rotation',
  {
	selector: '.head',
	component: 'material',
	property: 'color'
  },
  {
	selector: '.nametag',
	component: 'text',
	property: 'value'
  }
]
});

// Called by Networked-Aframe when connected to server
function onConnect () {
	console.log("onConnect", new Date());
}

// Function for back buttons
function goBack() {
   window.open("./hub.html?room=default", "_self");
}

AFRAME.ASSETS_PATH = "./assets";
var youtube_search_query = '';

// Update the keyboard's settings since it allows outline changes
function styleYoutubeKeyboard(){
	var key_styler = document.getElementById('youtube-keyboard');
	key_styler.setAttribute('scale', {x: 3.519, y: 3.519, z: 3.519});
	key_styler.setAttribute('rotation', {x: 0, y: -90, z: 0});
	key_styler.setAttribute('position', {x: 5.180, y: 0.015, z: -2.42});
}

// Select the video player and update the source to play the video
function updateVideo(ix){ 
	var video_name = 'video/'+ix+'.mkv';
	var play_video = document.querySelector('#videoPlayer');
	play_video.setAttribute('src', video_name);
}

// This actually just deletes the video player. There isn't a way to stop the video and stop the sound...
function stopVideo(){
	var video_player = document.querySelector('#videoPlayer');
	var my_scene = document.querySelector('a-scene');
	my_scene.remove(video_player);
}