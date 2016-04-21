var newPost = angular.module('newPost', []);
var postcount = 0;

newPost.service('postContent', function() {
	this.content = '';

	this.changeText = function(newContent) {
        postcount++;
        var newid = "mypost".concat(postcount.toString());
        var $newp = $("#mypost").clone().prop('id', newid).attr("style", "display: block").appendTo("#postlist");

        $clone = $newp.clone(true);
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
