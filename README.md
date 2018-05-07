<h2 align="center">Social Virtual Reality</h2>
<h2 align="center">CS 4331-002 - Virtual Reality Project 3</h2>
<p align="center"><img src="https://img.shields.io/badge/platform-Mobile-blue.svg" alt="Supported platforms"> </p>
<h2 align="center">Due: Tuesday, May 8, 2018</h2>
<h2 align="center">Video Demonstration :soon:</h2>

***
<p align="center">
  <img width="30%" height="30%" src="https://www.drupal.org/files/project-images/download_6.png">
</p>

- For Project 3 of this course, we proposed that we utilize A-Frame for WebGL based Virtual Reality and AR.js for WebGL based Augmented Reality to provide users with a multiplayer social interaction environment. This multiuser environment would allow users to access and experience data (i.e videos, photos and webpages) with other users at the same time. The AR aspect of our application would be more of a supplement to the online Web Application. Augmented Reality markers generated with AR.js would contain supplementary data (bookmarks/links) for users of our web application. We believed this could be achieved by making API calls using JavaScript. We would mainly like our program to function on mobile devices (i.e. Android, iPhone, Windows Phone). Our team consists of two members; Simon Woldemichael and Xuijia Wu. Links to potential libraries and free API's to be used are linked below.

<p align="center"><strong><u>Note: In the proposal, we stated that we would be using AR.js as a supplement to the assignment, but as advised in previous projects, we should keep the application contained within itself and should not apply the use of external features that only complement the application and are not core aspects of it. We, therefore, did not use AR.js</u></strong></p>

### Tools Used
  - [A-Frame](https://aframe.io/) :a:
  - [Youtube API](https://developers.google.com/youtube/iframe_api_reference) :fast_forward:
  - [Twitter API](https://dev.twitter.com/web/javascript) :baby_chick:
  - [Snowrap (Reddit API Wrapper)](https://github.com/not-an-aardvark/snoowrap) :snowman:
  - [Node.js](https://nodejs.org/en/) :checkered_flag: (used to serve the Web Real Time Connection environment)
  - [Material Design Lite](https://getmdl.io/) :milky_way:

### Contributors
  - [Xujia Wu](https://github.com/carolynwu)
  - [Simon Woldemichael](https://github.com/swoldemi)

### Work Distribution
  - Xujia: Front-end Integration
  - Simon: Back-end Integration

### We learned....
  - The intricacies of real time communication within a virtual reality environment
  - Just how extreme library compability issues can be
  - API calling with JavaScript
  - [Material design concepts](https://material.io/guidelines/)
  - Multi-component event listener registration
	- If you have registered 1 component to the DOM and want to make multiple instances of that component, you cannot add duplicate event listeners to seperate instances of the same component. :question:
  - Don't plan on doing something complicated with an early-stages library using external dependencies and plugins that are basically untested and are not very beginner friendly :grimacing:
  
### Biggest issues
  - HUGE: The following error
	  ```
	  Cross-Origin Request Blocked: 
	  The Same Origin Policy disallows reading the remote resource at %RESOURCE%.
	  This can be fixed by moving the resource to the same domain or enabling CORS.
	  ```
	means we can't update the content of our <a-scene> components with data that doesn't exist on our domain. So, adding images and videos from anywhere outside of the local scope of the application, 100% of the time, is not possible. 
	[WITHOUT this Chrome plugin that enables the Same Origin Policy](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)
  - We expect to have the same device compatibility issues that occurred during the first project that was completed for this course.
  - Compability
  - The 'beta-ness' of A-Frame caused problems when we tried to use custom components that wre only tested using earlier versions of A-Frame (i.e. v0.6.1 & v.7.1.0)
  - Setting up Node to support a WebRTC server
  - YouTube's API prevents dynamic sourcing of videos to inner canvas elements and A-Frame is unable to draw an embed or live video stream into the scene
  - Rendering text to the scene is computationally expensive enough, rendering videos is nearly impossible
  - Attempting to `<i-frame></i-frame>` a YouTube embed instead of sourcing it with <a-video></a-video> is impossible by the limitations of the library
  - The boilerplate practially set us up to run in circles, solving and causing problems until we decided to split all of the scenes up
  - [Deploying to Heroku apparently takes two hours](https://github.com/networked-aframe/networked-aframe/blob/master/docs/hosting-networked-aframe-on-a-server.md)
  
### Limitations
  1. See the first entry under `Biggest issues`
  2. IMPORTANT: YouTube does not allow direct file access to their videos via their API. Because of this, we are unable to dynamically set videos. The logic is simple:

```javascript
function updateVideo(ix){ 
	var selected_source = document.getElementById('urlstore'+ix).getAttribute('value');
	var play_video = document.querySelector('#videoPlayer'); 
	play_video.setAttribute('material.src', selected_source);
}
```

  - Depending on what video the user selected in the interface, depends on what source url is loaded into the video player. But because the URL must be a direct link, and YouTube doesn't give it's API users access to direct links, we cannot update the video player to play videos. Please see [this](https://stackoverflow.com/questions/46010205/a-frame-playing-a-youtube-video-on-a-plane), [this](https://aframe.io/docs/0.6.0/introduction/faq.html#can-i-render-youtube-videos-as-a-texture) and [this](https://stackoverflow.com/questions/36298195/how-to-render-youtube-videos-as-a-texture-in-a-frame) (by a lead A-Frame developer) for more details.

### Planned timeline
  - A Trello Board is being used to track the progress and development of this project:
    - https://trello.com/b/GRBMbBuo/cs-4331-002-virtual-reality-project-3

### External asset sources
  - [A-Frame Material Design Plugin](https://github.com/etiennepinchon/aframe-material)
  - [Networked A-Frame](https://github.com/networked-aframe/networked-aframe)
  - [A-Rounded components](https://github.com/etiennepinchon/aframe-rounded)
  - [A-Environment component](https://github.com/feiss/aframe-environment-component)
  
### References
  - Please visit our [Trello Board](https://trello.com/b/GRBMbBuo/cs-4331-002-virtual-reality-project-3) to see references and sources
  
<h2 align="center">Features</h2>

<h3 align="center">Material Design Aesthetic :milky_way:</h3>
  
  - Images and references here

<h3 align="center">YouTube API Interface :fast_forward:</h3>
 
  - Images and references here	
 
<h3 align="center">Flickr API Interface :baby_chick:</h3>
 
  - Images and references here

<h2 align="center">Concepts Worth Noting :book:</h2>

<h3 align="center">Linear Interpolation :chart_with_upwards_trend:</h3>

> Credit for external components and JavaScript API wrappers go to their respective owners and creators :thumbsup: