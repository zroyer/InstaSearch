angular.module('app', [])

.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.tempData = {message: '', submitted: false, gotResults: false};  //submitted?
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

	$scope.getImages = function(query) {
  	var id = "9e51654d8dd64c22aa4933a10dd51194"
      var url = "https://api.instagram.com/v1/tags/" + query + "/media/recent"
      var request = {
      	callback: 'JSON_CALLBACK',
      	client_id: id
      };
      $http({
          method: 'JSONP',
          url: url,
          params: request
      }).success(function(results){
      	if (results.meta.code == 200){
      		if (results.data.length){
      			$scope.gotResults = true
      			$scope.images = results.data
      			$scope.message = 'Now displaying the ' + results.data.length + ' most recent images tagged with #' + $scope.tempData.query 
      		} 
      		else{
      			$scope.message = 'The search for #' + $scope.tempData.query + ' produced no results'
      		}
      	}
      }).error(function(){
          alert('The search for #' + query + ' was unsuccessful. Please make sure the query string has no spaces.');
          $scope.message = "";
      })
  };


}]);