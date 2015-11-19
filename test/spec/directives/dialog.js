// 'use strict';

// describe('unit test for directive', function() {
//   var $compile,
//       $rootScope,
//       template;

//   // Load the myApp module, which contains the directive
//   beforeEach(module('dbApp','templates/addDialog.html','templates/editDialog.html'));

//   // Store references to $rootScope and $compile
//   // so they are available to all tests in this describe block
//   beforeEach(inject(function($templateCache,_$compile_, _$rootScope_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     template=$templateCache.get('templates/work.html');
//     $templateCache.put('templates/addDialog.html',template);
//     template=$templateCache.get('templates/work.html');
//     $templateCache.put('templates/editDialog.html',template);
//     $compile = _$compile_;
//     $rootScope = _$rootScope_;
//   }));

//   it('Replaces the element with the appropriate content', function() {
//     // Compile a piece of HTML containing the directive
//     var element = $compile("<editdirective ></editdirective>")($rootScope);
//     // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
//     $rootScope.$digest();
//     // Check that the compiled element contains the templated content
//     //expect(element.html()).toContain("Edit Item");
//   });
// });