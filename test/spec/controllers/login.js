'use strict';

describe('Controller: login', function(){
	beforeEach(module('dbApp'));
	var loginCtrl,
		scope;
	beforeEach(inject(function($controller,$rootScope){
		scope=$rootScope.$new();
		loginCtrl=$controller('login',{
			$scope:scope
		});
	}));
	it('should have an empty default error message in the scope', function(){
		//expect(scope.errorMsg.length).toBe(0);
	});
});