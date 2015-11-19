angular.module('dbApp')
    .controller('work', function($scope, $window, $http, $modal) {
        $http.get('/api/work')
            .success(function(data) {
                $scope.works = data.works;
                for (var i = 0; i <10; i++) {
                    var newstr = "";
                    var n = $scope.works[i].image;
                    for (var j = 0; j < n.length; j += 14) {
                        var tmp = n.substring(j, j + 14);
                        $scope.works[i].image = "assets/images/src/" + tmp;
                    }
                }
            })
            .error(function(data, status, headers, config) {
                console.log("error http call");
            });
        $scope.displaySwitch = true;
        $scope.displayCard = function() {
            $scope.displaySwitch = true;
        };
        $scope.displayList = function() {
            $scope.displaySwitch = false;
        };
        $scope.sorting = "title";
        $scope.reverse = false;
        $scope.sortingBy = function(sorting) {
            $scope.sorting = sorting;
            $scope.reverse = !$scope.reverse;
        };
        $scope.deleteItem = function(removeItem) {
            var items = $scope.works;
            var length = items.length;
            removeIndex = -1;
            for (var i = 0; i < length; i++) {
                if (angular.equals(items[i], removeItem)) {
                    removeIndex = i;
                    break;
                }
            }
            // if (window.confirm("Are you sure to delete this item?")) {
            //     $scope.works.splice(removeIndex, 1);
            //}
        };
        $scope.delsubmit = function() {
            $scope.works.splice(removeIndex, 1);
        };
        // $scope.editItem = function() {
        //     var modalInstance = $modal.open({
        //         templateUrl: 'templates/editDialog.html',
        //         controller: 'editController'
        //     });
        // };
        // $scope.addItem = function() {
        //     var modalInstance = $modal.open({
        //         templateUrl: 'templates/addDialog.html',
        //         controller: 'addController'
        //     });
        // };
        var indexFlag = 0;
        $scope.editItem = function(editItem) {
            // $scope.edialogdisplay = true;
            $scope.edittitle = editItem.title;
            $scope.editauthor = editItem.author;
            $scope.editlike = editItem.like;
            $scope.editcomment = editItem.comment;
            var items = $scope.works;
            var length = items.length;
            indexFlag = -1;

            for (var i = 0; i < length; i++) {
                if (angular.equals(items[i], editItem)) {
                    indexFlag = i;
                    break;
                }
            }
        };
        $scope.addItem = function() {
            // $scope.adialogdisplay = true;
            $scope.edittitle = '';
            $scope.editauthor = '';
            $scope.editlike = '';
            $scope.editcomment = '';
        };
        // $scope.addcancel = function() {
        //     $scope.adialogdisplay = false;
        // };
        // $scope.editcancel = function() {
        //     $scope.edialogdisplay = false;
        // };
        $scope.addsubmit = function() {
            var item = {
                image: '',
                author: $scope.addauthor,
                comment: $scope.addcomment,
                like: $scope.addlike,
                title: $scope.addtitle
            };
            $scope.works.push(item);
            $scope.edittitle = '';
            $scope.editauthor = '';
            $scope.editlike = '';
            $scope.editcomment = '';
            // $scope.adialogdisplay = false;
        };
        $scope.editsubmit = function() {
            $scope.works[indexFlag].title = $scope.edittitle;
            $scope.works[indexFlag].author = $scope.editauthor;
            $scope.works[indexFlag].like = $scope.editlike;
            $scope.works[indexFlag].comment = $scope.editcomment;
            $scope.edittitle = '';
            $scope.editauthor = '';
            $scope.editlike = '';
            $scope.editcomment = '';
            // $scope.edialogdisplay = false;
        };
    });
