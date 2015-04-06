angular.module('app', [])

.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.tempData = {message: '', submitted: false, results: false};  //submitted?
	$scope.imageData = {data: []};

	$scope.submit = function() {
		if($scope.mainForm.$valid) {
			$scope.tempData.query = $scope.tempData.tag.trim();
			$scope.tempData.tag = "";
			$scope.message = "Searching Instagram for #" + $scope.tempData.query 
			$scope.tempData.submitted = true;
			$scope.getImages($scope.tempData.query);
		};
	};


}]);