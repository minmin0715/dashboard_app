'use strict';

describe("Controller: work", function(){
	beforeEach(module('dbApp'));
	var workCtrl,
		scope;
	beforeEach(inject(function($controller,$rootScope){
		scope=$rootScope.$new();
		workCtrl=$controller('work',{
			$scope:scope
		});
	}));
	it('display',function(){
		scope.displaySwitch=true;
		scope.displayCard();
		expect(scope.displaySwitch).toBeTruthy();
		scope.displaySwitch=true;
		scope.displayList();
		expect(scope.displaySwitch).toBeFalsy();
	});
});