function Asteroid(pos) {
	
	var loader = new THREE.JSONLoader();
	this.position = pos;
	this.mesh;
	this.self = this;
	
	this.load = function() {
		
		onLoadObject = function (geometry) {
			self.mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
			scene.add( self.mesh );
			loading = false;
		}
		loading = true;
		loader.load('js/yellow_aste.js', onLoadObject);
		
	}
	
	this.update = function(elapsedTime) {
		
	}
	
	this.draw = function() {
		self.mesh.translate(10, new THREE.Vector3(1,0,0));
	}
	
}
