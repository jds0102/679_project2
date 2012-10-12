var scene, renderer;
var camera, cameraControls;
var player;
var player;// player2;

var objects = new Array();
var loading = false;

var currentLevel = level1;

//if( !init() )	animate();
init();

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

	camera.position.set(0, 50, 0);

	scene.add(camera);

	var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );

	createGameObjects();
	//loadGameObjects(0, onLoadObjects);
	player.load();
	asteroid.load();
	setTimeout(onLoadObjects,2000);
}

function onLoadObjects() {
	asteroid.draw();
	//objects[2].draw();
	alert(player.getPosition().toSource());
	alert(asteroid.getPosition().toSource());
	animate();
}

function createGameObjects() {
	player =  new Ship(new THREE.Vector3(0.0,0.0,0.0));
	asteroid = new Asteroid(new THREE.Vector3(5.0,5.0,0.0));
	//objects[2] = new Asteroid(new THREE.Vector3(10.0,10.0,0.0));
}


function loadGameObjects(i, callback) {	
	if ( i < objects.length ) {	
		if (loading == false) {
			objects[i].load();
			i++;
		}
		setTimeout(loadGameObjects,1000/60,i, callback)	
	}
	else  {
		callback();
	}

	loadGameObjects();
}

function loadGameObjects() {
	player = new ship();
	player.load();
	player.setDestination(new THREE.Vector3(10,0,0));
	
	//player2 = new ship();
	//player2.load();
}

// animation loop
function animate() {
	requestAnimationFrame( animate );
	render();
}

// render the scene
function render() {
	camera.lookAt(player.getPosition());
	renderer.render( scene, camera );

}