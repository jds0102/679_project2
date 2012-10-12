var scene, renderer;
var camera, cameraControls;
var Player;
if( !init() )	animate();

function getShader(id) {
      var shaderScript = document.getElementById(id);
      if (!shaderScript) {
          return null;
      }
      var str = "";
      var k = shaderScript.firstChild;
      while (k) {
          if (k.nodeType == 3)
              str += k.textContent;
          k = k.nextSibling;
      }
	  return str;
}

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

	var vertex = getShader("vertex");
	var fragment = getShader("fragment");//document.getElementById("fragment");
	
	
	var shaderMaterial = new THREE.ShaderMaterial({
		//uniform : {map: { type: "t", value: 1, texture: new THREE.Texture(new Image("images/10_5555.JPG")) }},
	  vertexShader : vertex,
	  fragmentShader : fragment
	});
	// create a scene
	scene = new THREE.Scene();

	// put a camera in the scene
	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(50, 50, 50);
	scene.add(camera);

	var ambient = new THREE.AmbientLight( 0xffffff );
		scene.add( ambient );
		
	Player = new ship(0);
	Player.load();
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
	camera.lookAt(Player.getPosition());
	//camera.lookAt(new THREE.Vector3(0,0,0));
	renderer.render( scene, camera );
}