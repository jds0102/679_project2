var scene, renderer;
var camera, cameraControls;

if( !init() )	animate();

function init(){

	if( Detector.webgl ){
		renderer = new THREE.WebGLRenderer({
			antialias		: true,	// to get smoother output
			preserveDrawingBuffer	: true	// to allow screenshot
		});
		renderer.setClearColorHex( 0xBBBBBB, 1 );
	 //uncomment if webgl is required
	}else{
		Detector.addGetWebGLMessage();
		return true;
	}// else{
// 				renderer	= new THREE.CanvasRenderer();
// 			}
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('container').appendChild(renderer.domElement);

	// create a scene
	scene = new THREE.Scene();

	// put a camera in the scene
	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(0, 0, 5);
	scene.add(camera);

	var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );
	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
		directionalLight.position.set( 0, -70, 100 ).normalize();
		scene.add( directionalLight );
  
	  new THREE.JSONLoader().load('js/couldron2.js', function(geometry){
	  var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
	 scene.add( mesh );
  }, 'images');

}

function createScene(){
	var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
	scene.add( mesh );
}

// animation loop
function animate() {
	requestAnimationFrame( animate );
	render();
}

// render the scene
function render() {

	// actually render the scene
	renderer.render( scene, camera );
}