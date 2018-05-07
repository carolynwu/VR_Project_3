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
	}
	]
});

// Called by Networked-Aframe when connected to server
function onConnect () {
	console.log("onConnect", new Date());
}
