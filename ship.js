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
		return self.mesh.position;
	}
	
	this.setPosition = function(pos) {
		var movement = pos.subSelf(self.mesh.position);
		self.mesh.translate( movement.length() , movement);
	}
	
	this.setDestination = function(dest) {
		self.destination = dest;
	}
	
	this.update = function(elapsedTime) {
		if (self.destination != undefined) {
			var tempDest = self.destination.clone();
			tempDest.subSelf(self.mesh.position);
			self.mesh.translate( .05, tempDest);
			//alert(tempDest.x);
		}
	}
	
	this.draw = function() {
		
	}
}
