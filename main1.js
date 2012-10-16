var scene, renderer;
var camera, cameraControls;
var Player;// Player2;
var background;
var land;

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
	}
	// }else{
		// renderer	= new THREE.CanvasRenderer();
	// }
	
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('container').appendChild(renderer.domElement);

	// create a scene
	scene = new THREE.Scene();

	// put a camera in the scene
	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(0, 20, 30);
	scene.add(camera);

	var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );
		
	// Create a directional light to show off the object
      var light = new THREE.DirectionalLight( 0xffffff, 1.5);
      light.position.set(0, 0, 1);
      scene.add( light );

	loadGameObjects();
	background = new skybox();
	background.load();
	
	land = new flatrock();
	land.load();
}

function loadGameObjects() {
	Player = new ship();
	Player.load();
	//Player.setDestination(new THREE.Vector3(10,0,0));
	
	//Player2 = new ship();
	//Player2.load();
}

// animation loop
function animate() {
	requestAnimationFrame( animate );
	render();
}

// render the scene
function render() {
	
	Player.update(.016);
	camera.lookAt(Player.getPosition());
	renderer.render( scene, camera );
}