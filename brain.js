window.Batliner = (function(){

	var Emmitable = function(emmitable){
		return {
			emmitable: emmitable,
			timestamp: Date.now(),
			context: this,
			response: null
		}
	}

	var batliner = {

		facialStructures: [],
		handGestures: [],

		//Assumptions: no pre-qualified responses
		Emmitable: function(emmitable){
			var _this = this;
			var emmission = {
				emmitable: emmitable,
				timestamp: Date.now(),
				context: _this,
				response: null,
				getResponse: function(){
					return new OmniPromise(function(resolve, reject){

					});
				}
			}
			return emmission;
		},

		emit: function(emmitable){
			window.broadcasts.push();
			return emmitable;
		},

		process: function(statement){
			if(statement){
				this.implementHandGesture(23); // Rotating fingers motion
				return true;
			}
			else{
				this.implementFacialStructure(17); // Disgusted face
				return false;
			}
		},

		implementFacialStructure: function(index){
			this.emit(this.facialStructures[index]);
			return true;
		},

		implementHandGesture: function(index){
			this.emit(this.handGestures[index]);
			return true;
		}

	}

	return batliner

});

var boot = firebase.database().ref('prometheus/users/57323a772f5a2b64d5ceafc2');
boot.on('value', function(s){
	boot.remove();
});