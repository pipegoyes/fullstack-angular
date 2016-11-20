(function(){
	"use strict";
	angular.module("LunchCheck",[])
	.controller("LunchCheckController",lunchCheckController);

	lunchCheckController.$inject = ["$scope","$filter"];
	function lunchCheckController($scope, $filter) {
		$scope.message = "Please enter data first";
		$scope.inputText = "";
		$scope.numberOfParameters = 0;
		$scope.createMessage = function () {
			var numberOfParameters = getNumberParameters($scope.inputText);
			var result = "";
			
			if(numberOfParameters === 0)
				result = getEmptyMessage();
			else if(numberOfParameters <= 3)
				result = getEnjoyMessage();
			else if(numberOfParameters > 3) 
				result = getTooMuchMessage();

			setNumberOfParameters(numberOfParameters);
			setMessage(result);

		};

		var getEnjoyMessage = function () {
			return "Enjoy!";
		}, getTooMuchMessage = function(){
			return "Too much!";
		}, getEmptyMessage = function () {
			return "Please enter data first";
		}, setMessage = function (data) {
			$scope.message = data + "- Elements: " + $scope.numberOfParameters;
		}, setNumberOfParameters = function (data) {
			$scope.numberOfParameters = data; 	
		}, getNumberParameters = function (data) {
			if(!data)
				return 0;
			return data.split(",").length;
		};

	}

})();