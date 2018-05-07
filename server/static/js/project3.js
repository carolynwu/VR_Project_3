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
