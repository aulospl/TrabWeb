var newPost = angular.module('newPost', []);

newPost.service('postContent', function() {
	this.content = '';
	
	this.changeText = function(newContent) {
		this.content = newContent;
	};

	this.getText = function() {
		return this.content;
	}
});

newPost.controller('newPostControl', function ($scope, postContent) {   
    $scope.changeText = function(){
        postContent.changeText($scope.newposttext);
    };
});

newPost.controller('postContainerControl', function($scope, postContent) {
	$scope.$watch(function () { return postContent.getText(); }, function (value) {
        $scope.posttext = value;
    });
});