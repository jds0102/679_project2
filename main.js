var scene, renderer;
var camera, cameraControls;
<<<<<<< HEAD
var player;
=======
var Player;// Player2;
>>>>>>> dfad2764121f6799f9480caf88f223b5595ff9e4

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
<<<<<<< HEAD
	camera.position.set(0, 50, 0);
=======
	camera.position.set(0, 30, 21);
>>>>>>> dfad2764121f6799f9480caf88f223b5595ff9e4
	scene.add(camera);

	var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );
<<<<<<< HEAD
	
	createGameObjects();
	//loadGameObjects(0, onLoadObjects);
	player.load();
	asteroid.load();
	setTimeout(onLoadObjects,1000);
}

function onLoadObjects() {
	asteroid.draw();
	//objects[2].draw();
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
=======

	loadGameObjects();
}

function loadGameObjects() {
	Player = new ship();
	Player.load();
	Player.setDestination(new THREE.Vector3(10,0,0));
	
	//Player2 = new ship();
	//Player2.load();
>>>>>>> dfad2764121f6799f9480caf88f223b5595ff9e4
}

// animation loop
function animate() {
	requestAnimationFrame( animate );
	render();
}

// render the scene
function render() {
<<<<<<< HEAD
	camera.lookAt(player.getPosition());
=======
	
	Player.update(.016);
	camera.lookAt(Player.getPosition());
>>>>>>> dfad2764121f6799f9480caf88f223b5595ff9e4
	renderer.render( scene, camera );

}