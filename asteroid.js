
function asteroid(pos) {
	
	var loader = new THREE.JSONLoader();
	this.position = pos;
	this.boundingRadius = 0;
	this.active = true;
	this.mesh;
	this.self = this;
	
	this.load = function() {
		
		onLoadObject = function (geometry) {
			self.mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
			scene.add( self.mesh );
		}
		
		loader.load('js/green_aste.js', 
		onLoadObject);
		
	}
	
	this.getPosition = function() {
		return self.mesh.position.clone;
	}
	
	this.setPosition = function(pos) {
		var movement = pos.subSelf(self.mesh.matrix.getPosition());
		self.mesh.matrix.translate( movement.length() , movement);
	}
	 
	this.update = function(elapsedTime) {
		
	}
	
	this.draw = function() {
		
	}
	
}
