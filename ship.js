

function ship(pos) {
	
	this.position = pos;
	var mesh;
	
	this.load = function() {
		
		new THREE.JSONLoader().load('js/plane.js', 
		function(geometry){
	  		mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
	 		scene.add( mesh );
  		}, 
  		'images');

	}
	
	this.update = function(elapsedTime) {
		
	}
	
	this.draw = function() {
		
	}
}
