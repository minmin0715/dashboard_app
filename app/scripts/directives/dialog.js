angular.module('dbApp')
.directive('adddirective',function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/addDialog.html'
	};
})
.directive('editdirective',function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/editDialog.html'
	};
});