var scene, renderer;
var camera, cameraControls;
var Player, Player2;
var projector;
var clickPlane;


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
	
	//Projector used for RayCasting
	projector = new THREE.Projector();

	
	document.addEventListener( 'mousedown', onMouseDown, false);
	document.addEventListener( 'mouseup', onMouseUp, false);
}

function loadGameObjects() {
	Player = new ship();
	Player.load();
	Player.setDestination(new THREE.Vector3(200,0,0));
	
	Player2 = new asteroid();
	Player2.load();

}

// animation loop
function animate() {
	requestAnimationFrame( animate );
	render();
}

// render the scene
function render() {
	
	Player.update(.016);
	//alert(Player2.getPosition().x);
	camera.lookAt(Player.getPosition());
	renderer.render( scene, camera );
}

function onMouseDown(evt) {
	
}

function onMouseUp(evt) {
	var vector = new THREE.Vector3( ( evt.clientX / window.innerWidth ) * 2 - 1, - ( evt.clientY / window.innerHeight ) * 2 + 1, 0.5 );
	projector.unprojectVector( vector, camera );
	
	var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );
	
	alert (ray.direction.x + "," + ray.direction.y + "," + ray.direction.z);
}


