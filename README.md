<h2 align="center">Social Virtual Reality</h2>
<h2 align="center">CS 4331-002 - Virtual Reality Project 3</h2>
<p align="center"><img src="https://img.shields.io/badge/platform-Web-blue.svg" alt="Supported platforms">
<a href="https://aframe.io/"><img src="https://img.shields.io/badge/WebVR-A--Frame-ef2d5e.png"/></a></p>
<h3 align="center">Due: Tuesday, May 8, 2018</h3>
<h3 align="center">Video Demonstration</h3>

<p align="center">
  <a href="https://youtu.be/0L-9mx_iczQ"><img width="70%" height="70%" src="https://i.imgur.com/9g1xs4z.png"></a>
</p>

***

<h3 align="center">
	Try it here: https://socialvr.herokuapp.com
</h3>

<p align="center">
  <img width="30%" height="30%" src="https://www.drupal.org/files/project-images/download_6.png">
</p>

<p align="center">
  <h3>Report</h3>
</p>


- For Project 3 of this course, we proposed that we utilize A-Frame for WebGL based Virtual Reality and AR.js for WebGL based Augmented Reality to provide users with a multiplayer social interaction environment. This multiuser environment would allow users to access and experience data (i.e videos, photos and webpages) with other users at the same time. The AR aspect of our application would be more of a supplement to the online Web Application. Augmented Reality markers generated with AR.js would contain supplementary data (bookmarks/links) for users of our web application. We believed this could be achieved by making API calls using JavaScript. We would mainly like our program to function on mobile devices (i.e. Android, iPhone, Windows Phone). Our team consists of two members; Simon Woldemichael and Xujia Wu. Links to potential libraries and free API's to be used are linked below.

<p align="center"><strong><u>Note: In the proposal, we stated that we would be using AR.js as a supplement to the assignment, but as advised in previous projects, we should keep the application contained within itself and should not apply the use of external features that only complement the application and are not core aspects of it. We, therefore, did not use AR.js</u></strong></p>

### Quick Start!
  - To run our application locally do the following
    1. Clone this repository: `git clone https://www.github.com/carolywu/VR_Project_3.git`
    2. Change directories into the project: `cd VR_Project_3`
    3. Assuming you have Node.js and NPM installed run: `npm install`
    4. Then start the WebRTC server: `node server/easyrtc-server.js`
    5. Navigate to localhost:8081

  - If you would like to change what port the program runs on, set the `PORT` environment variable or change 8081 in [this](https://github.com/carolynwu/VR_Project_3/blob/a4840491589005ee7e0cd095224146313f3e4bfc/server/easyrtc-server.js#L12) line to your preferred port.

### Tools Used
  - [A-Frame](https://aframe.io/) :a:
  - [Youtube API](https://developers.google.com/youtube/iframe_api_reference) :fast_forward:
  - [Twitter API](https://dev.twitter.com/web/javascript) :baby_chick:
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
  - Just how extreme library compatibility issues can be
  - API calling with JavaScript
  - [Material design concepts](https://material.io/guidelines/)
  - Multi-component event listener registration
	- If you have registered 1 component to the DOM and want to make multiple instances of that component, you cannot add duplicate event listeners to separate instances of the same component. :question:
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
  - The 'beta-ness' of A-Frame caused problems when we tried to use custom components that were only tested using earlier versions of A-Frame (i.e. v0.6.1 & v.7.1.0)
  - Setting up Node to support a WebRTC server
  - YouTube's API prevents dynamic sourcing of videos to inner canvas elements and A-Frame is unable to draw an embed or live video stream into the scene
  - Rendering text to the scene is computationally expensive enough, rendering videos is nearly impossible
  - Attempting to `<i-frame></i-frame>` a YouTube embed instead of sourcing it with <a-video></a-video> is impossible by the limitations of the library
  - The boilerplate practically set us up to run in circles, solving and causing problems until we decided to split all of the scenes up

### Limitations
  1. See the first entry under `Biggest issues`
  2. IMPORTANT: YouTube does not allow direct file access to their videos via their API. Because of this, we are unable to dynamically set videos. The function logic is simple:

```javascript
function updateVideo(ix){
	var selected_source = document.getElementById('urlstore'+ix).getAttribute('value');
	var play_video = document.querySelector('#videoPlayer');
	play_video.setAttribute('material.src', selected_source);
}
```

  - Depending on what video the user selected in the interface, depends on what source url is loaded into the video player. But because the URL must be a direct link, and YouTube doesn't give it's API users access to direct links, we cannot update the video player to play videos. Please see [this](https://stackoverflow.com/questions/46010205/a-frame-playing-a-youtube-video-on-a-plane), [this](https://aframe.io/docs/0.6.0/introduction/faq.html#can-i-render-youtube-videos-as-a-texture), and [this](https://stackoverflow.com/questions/36298195/how-to-render-youtube-videos-as-a-texture-in-a-frame) (by a lead A-Frame developer) for more details.

### Planned timeline
  - A Trello Board is being used to track the progress and development of this project:
    - https://trello.com/b/GRBMbBuo/cs-4331-002-virtual-reality-project-3

### External asset sources
  - [A-Frame Material Design Plugin](https://github.com/etiennepinchon/aframe-material)
  - [Networked A-Frame](https://github.com/networked-aframe/networked-aframe)
  - [A-Rounded components](https://github.com/etiennepinchon/aframe-rounded)
  - [A-Environment component](https://github.com/feiss/aframe-environment-component)
  - [A-Room component](https://www.npmjs.com/package/aframe-room-component)
  - [A-Frame fonts](https://github.com/etiennepinchon/aframe-fonts/tree/master/fonts)
  - [TV Model (Google Poly)](https://poly.google.com/view/2flJebZTUrg)
  - [Song 1](https://www.youtube.com/watch?v=96YCJaUFxaM)
  - [Song 2](https://www.youtube.com/watch?v=6FhYXf9vp6w)
  - [Song 3](https://www.youtube.com/watch?v=7ZguAEoNpZw)

### References
  - Please visit our [Trello Board](https://trello.com/b/GRBMbBuo/cs-4331-002-virtual-reality-project-3) to see references and sources

<h2 align="center">Features</h2>
<h3 align="center">Starting Scene</h3>

  - After the user has selected a room and username, they will be loaded into the hub scene where they will be asked to select a portal to be transfered to another, much more interactive, scene.
<p align="center">
  <img width="90%" height="90%" src="https://imgur.com/IesuYy4.gif">
</p>

<h3 align="center">Multiuser Experience (current limited)</h3>

  - Since we made use of the Networked-AFrame plugin, scenes can be used as rooms. Since we also use the dynamic-rooms component, separate rooms can be created on the server that can be joined. Currently, this is only supported on the first level, and a majority of the components need to be synced to the RTC environment. Syncing components, custom or built-in is very tedious and didn't seem very efficient to do manually. (Notice in the screenshot below that the rotation of 2 players is not synced quickly enough, so it looks like the other player is facing the other way)
<p align="center">
  <img width="90%" height="90%" src="https://imgur.com/I6bliQd.gif">
</p>
<h3 align="center">Material Design Aesthetic :milky_way:</h3>

<p align="center">
  <img width="90%" height="90%" src="https://i.imgur.com/2rX3zDV.png">
</p>
<ul>
  <li>In using the Material Design Lite JavaScript library, we were able to make visually appealing front-end components. The MDL library, as many people know, allows users to create Google-esque (Material Design) webpage components. Material design is defined as <a href="https://material.io/design/introduction/">a visual language that synthesizes the classic principles of good design with the innovation of technology and science</a>. Our color schemes, room and username selection page, interface buttons, keyboard, input boxes, and rounded components all follow the "visual language" of Material Design.</li>
<br>
	<li>Here is our Login Screen. The background container uses <a href="https://github.com/VincentGarreau/particles.js/">Particles.js</a>.</li>
</ul>
<p align="center">
  <img width="90%" height="90%" src="https://imgur.com/X1qMogX.gif">
</p>
<ul>
  <li>After clicking 'Let's Go!' on the login page, the user will be taken to the Hub scene where they will be able to view the buttons for the paricular API's.</li>
 </ul>
<h3 align="center">YouTube API Interface :fast_forward:</h3>
<ul>
  <li><mark>Notice: Since it is impossible to directlys stream videos from YouTube into A-Frame without proxying the videos using external frameworks, we are currently only playing 3 test videos that have been pre-downloaded from YouTube.</mark> In the YouTube scene of our project, users are able to search for videos through YouTube's API. The interface shows the 3 most relevant videos returned by the database. We provide an API key in the application, but to get your own API key go <a href="https://developers.google.com/youtube/v3/">here</a>.</li>
</ul>
<p align="center">
  <img width="90%" height="90%" src="https://i.imgur.com/Vpx2lvc.gif">
</p>

<h3 align="center">Chat board (early alpha) :iphone:</h3>

  - In this scene, the user can type and send messages to a board within the scene. This scene was mostly just to see if we could send asynchronous messages through the server, but once again setting up scynced components turned out to be much more complicated than we expected.

<p align="center">
  <img width="90%" height="90%" src="https://i.imgur.com/W7VzYHj.gif">
</p>
<h3 align="center">Flickr API Interface :baby_chick:</h3>
<ul>
 <li>In the Flickr scene, users are able to search for images through Flickr's API. The interface returns 12 images related tot he tag that the user types using the keyboard in the scene. We provide an API key in the application, but to get your own API key (Yahoo account require) go <a href="https://www.flickr.com/services/api/misc.api_keys.html">here</a>.</li>
</ul>
<p align="center">
  <img width="90%" height="90%" src="https://imgur.com/JWRSvbk.gif">
</p>

<h2 align="center">Concepts Worth Noting :book:</h2>

<h3 align="center">Linear Interpolation :chart_with_upwards_trend:</h3>

  - For objects and components to be synced across Real-Time Communication (WebRTC), they need to be interpolated. Linear interpolation is a mathematical concept in which data points, in this case the position, rotation and other attributes of an A-Frame component, are curve fitted using linear polynomials to construct a new accurate and dynamically multivariate. This means, even in a 3D scene, the linear change will be smooth and clear. This is of course favorable to a choppy or laggy VR scene as this could cause motion sickness. <a href="https://en.wikipedia.org/wiki/Linear_interpolation">(Source)</a>

<p align="center">
  <img width="90%" height="90%" src="http://i.giphy.com/26xBP0MH0KHaCrhE4.gif">
</p>


> Credit for external components and JavaScript API wrappers go to their respective owners and creators :thumbsup:
