function Ship(pos) {
	
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
		loader.load('js/plane.js', onLoadObject);
		
	}
	
	this.getPosition = function () {
		alert(self.mesh.position.toSource());
		return self.mesh.position;
	}
	
	this.update = function(elapsedTime) {
		
	}
	
	this.draw = function() {
		
	}
}
