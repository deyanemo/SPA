app.controller('deya', function($scope , Store , localStorageService ,$routeParams, $route){
    refresh();
    $scope.deya = function(e) {
        if ($scope.input1 && $scope.input1.length >= 4) {
            // calling the add factory
            Store.add($scope.input1 , $scope.check_genius , $scope.check_rich , $scope.check_spower);
            // reseting the inputs
            $scope.input1  = '';
            $scope.check_genius = false; $scope.check_rich = false; $scope.check_spower = false;
            refresh();
        }else {
            alert("Please Enter a valid 4 Chars");
        }
    }
    $scope.deleteit = function(e) {
        Store.deleteit(e);
        refresh();
    }
    // Refresh the Data
    function refresh() {
        $scope.save = localStorage.getItem('Persons');
        $scope.data = JSON.parse($scope.save);
        if ($scope.data === null) {
            $scope.totalPerson = 0;
            $scope.GeniusCount = 0;
            $scope.RichCount = 0;
            $scope.SpowerCount = 0;
        }else {
            $scope.totalPerson = $scope.data.length;
            $scope.GeniusCount = 0;
            $scope.RichCount = 0;
            $scope.SpowerCount = 0;
            $scope.data.forEach(function(elm) {
                if(elm.genius === true) {
                    $scope.GeniusCount++;
                }
                if(elm.rich === true) {
                    $scope.RichCount++;
                }
                if(elm.spower === true) {
                    $scope.SpowerCount++;
                }
            });
        }
    }
    $scope.clearAll = function() {
        Store.clearAll();
        refresh();
    }
    $scope.updateValue = function($event,e) {
        Store.update($event , e);
        refresh();
    }
// Filter
if ($routeParams.filterName) {
    searchIt($scope);
}

function searchIt($scope) {
    let search = $routeParams.filterName;
    let searchArray = [];
    $scope.data.forEach(function(elm) {
        if (elm[search]) {
            searchArray.push(elm);
        }
    });
    $scope.data =searchArray;

    return console.log($scope.data);
}
});