function ship() {
	
	var loader = new THREE.JSONLoader();
	this.mesh;
	this.destination;
	this.self = this;
	this.speed = 1.0;
	
	this.load = function() {
		
		onLoadObject = function (geometry) {
			self.mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial());
			scene.add( self.mesh );
		}
		
		loader.load('js/plane.js', 
		onLoadObject,
  		'images');
  		//self.mesh.position = self.position;

	}
	
	this.getPosition = function () {
		return self.mesh.matrix.getPosition().clone();
	}
	
	this.setPosition = function(pos) {
		var movement = pos.subSelf(self.mesh.matrix.getPosition());
		self.mesh.matrix.translate( movement.length() , movement);
	}
	
	this.setDestination = function(dest) {
		self.destination = dest;
	}
	
	this.update = function(elapsedTime) {
		if (self.destination != undefined) {
			var tempDest = self.destination.clone();
			tempDest.subSelf(self.mesh.matrix.getPosition());
			if (tempDest.length() > .1) {
				//self.mesh.matrix.translate(tempDest);
				self.mesh.updateMatrix();
				self.mesh.translate(.1, tempDest);
			}
			//self.mesh.translate(.005);
			//alert(self.mesh.position.x);
		}
	}
	
	this.draw = function() {
		
	}
}
