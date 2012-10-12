

function ship(pos) {
	
	var loader = new THREE.JSONLoader();
	this.position = pos;
	this.mesh;
	this.self = this;
	
	this.load = function() {
		
		createScene = function (geometry) {
			self.mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
			scene.add( self.mesh );
		}
		
		loader.load('js/plane.js', 
		createScene,
  		'images');

	}
	
	this.getPosition = function () {
		return self.mesh.position;
	}
	
	this.update = function(elapsedTime) {
		
	}
	
	this.draw = function() {
		
	}
}
