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
	
	this.getPosition = function () {
		//alert(self.mesh.position.toSource());
		return self.mesh.matrix.getPosition();
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
		//self.mesh.matrix.translate(new THREE.Vector3(10,0,0));
		//self.mesh.updateMatrix();
		self.mesh.position.x += 10;
	}
	
}
