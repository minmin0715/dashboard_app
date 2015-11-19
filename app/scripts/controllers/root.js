var app = angular.module("dbApp");
app.controller('rootController', function(getUser, session, $scope, $http,$state) {
    var overcolor = "orange";
    var workcolor = "black";
    var procolor = "black";
    var concolor = "black";

    $scope.CurrentDate = new Date();
    
    $scope.myStyle = {
                'border-left': '3px solid #FF3300',
                'color': '#FF3300'
            };
    $scope.linkStyle = {
                'color': '#FF3300'
            };

    getUser.getUser().$promise.then(function(response) {
        
         $scope.username = response.name;
    }, function() {
        console.log("SORRY");
    });
    
    $scope.logout = function() {
       session.destroy("user");
       session.destroy("psw");
       $state.go("login");       
    }

    $scope.toggle = function() {
        $scope.myStyle = {
            'color': 'white'
        };
        $scope.myStyle1 = {
            'border-left': 'none'
        };
        $scope.myStyle2 = {
            'border-left': 'none'
        };
        $scope.myStyle3 = {
            'border-left': 'none'
        };
        $scope.linkStyle = {
            'color': 'white'
        };
        $scope.linkStyle1 = {
            'color': 'black'
        };
        $scope.linkStyle2 = {
            'color': 'black'
        };
        $scope.linkStyle3 = {
            'color': 'black'
        };
        overcolor = "orange";
        workcolor = "black";
        procolor = "black";
        concolor = "black";   
    };

    $scope.express = function() {
        $scope.myStyle = {
            'color': 'white'
        };
        $scope.linkStyle = {
            'color': 'white'
        };
    };

    $scope.out = function() {
        if (overcolor == "black") {
            $scope.myStyle = {
                'color': 'black'
            };
            $scope.linkStyle = {
                'color': 'black'
            };
        } else {
            $scope.myStyle = {
                'border-left': '3px solid #FF3300',
                'color': '#FF3300'
            };
            $scope.linkStyle = {
                'color': '#FF3300'
            };
        }

    };

    $scope.toggle1 = function() {
        $scope.myStyle1 = {
            'color': 'white'
        };
        $scope.myStyle = {
            'border-left': 'none'
        };
        $scope.myStyle2 = {
            'border-left': 'none'
        };
        $scope.myStyle3 = {
            'border-left': 'none'
        };
        $scope.linkStyle1 = {
            'color': 'white'
        };
        $scope.linkStyle = {
            'color': 'black'
        };
        $scope.linkStyle2 = {
            'color': 'black'
        };
        $scope.linkStyle3 = {
            'color': 'black'
        };
        overcolor = "black";
        workcolor = "orange";
        procolor = "black";
        concolor = "black";
    }

    $scope.express1 = function() {
        $scope.myStyle1 = {
            'color': 'white'
        };
        $scope.linkStyle1 = {
            'color': 'white'
        };
    };

    $scope.out1 = function() {
        if (workcolor == "black") {
            $scope.myStyle1 = {
                'color': 'black'
            };
            $scope.linkStyle1 = {
                'color': 'black'
            };
        } else {
            $scope.myStyle1 = {
                'border-left': '3px solid #FF3300',
                'color': '#FF3300'
            };
            $scope.linkStyle1 = {
                'color': '#FF3300'
            };
        }

    };
    $scope.toggle2 = function() {
        $scope.myStyle2 = {
            'color': 'white'
        };
        $scope.myStyle = {
            'border-left': 'none'
        };
        $scope.myStyle1 = {
            'border-left': 'none'
        };
        $scope.myStyle3 = {
            'border-left': 'none'
        };
        $scope.linkStyle2 = {
            'color': 'white'
        };
        $scope.linkStyle = {
            'color': 'black'
        };
        $scope.linkStyle1 = {
            'color': 'black'
        };
        $scope.linkStyle3 = {
            'color': 'black'
        };
        overcolor = "black";
        workcolor = "black";
        procolor = "orange";
        concolor = "black";
    }

    $scope.express2 = function() {
        $scope.myStyle2 = {
            'color': 'white'
        };
        $scope.linkStyle2 = {
            'color': 'white'
        };
    };

    $scope.out2 = function() {
        if (procolor == "black") {
            $scope.myStyle2 = {
                'color': 'black'
            };
            $scope.linkStyle2 = {
                'color': 'black'
            };
        } else {
            $scope.myStyle2 = {
                'border-left': '3px solid #FF3300',
                'color': '#FF3300'
            };
            $scope.linkStyle2 = {
                'color': '#FF3300'
            };
        }

    };

    $scope.toggle3 = function() {
        $scope.myStyle3 = {
            'color': 'white'
        };
        $scope.myStyle = {
            'border-left': 'none'
        };
        $scope.myStyle2 = {
            'border-left': 'none'
        };
        $scope.myStyle1 = {
            'border-left': 'none'
        };
        $scope.linkStyle3 = {
            'color': 'white'
        };
        $scope.linkStyle1 = {
            'color': 'black'
        };
        $scope.linkStyle2 = {
            'color': 'black'
        };
        $scope.linkStyle = {
            'color': 'black'
        };
        overcolor = "black";
        workcolor = "black";
        procolor = "black";
        concolor = "orange";
    }

    $scope.express3 = function() {
        $scope.myStyle3 = {
            'color': 'white'
        };
        $scope.linkStyle3 = {
            'color': 'white'
        };
    };

    $scope.out3 = function() {
        if (concolor == "black") {
            $scope.myStyle3 = {
                'color': 'black'
            };
            $scope.linkStyle3 = {
                'color': 'black'
            };
        } else {
            $scope.myStyle3 = {
                'border-left': '3px solid #FF3300',
                'color': '#FF3300'
            };
            $scope.linkStyle3 = {
                'color': '#FF3300'
            };
        }

    };
});
