var app = angular.module('wumpus', []);

app.controller('wumpusController', function ($scope) {

    $scope.cantidad = null;
    $scope.filas = [];
    
    $scope.crear = function () {
        
        $scope.filas = [];
        for (var i = 0; i < $scope.cantidad; i++) {
            $scope.filas.push({
                columnas: [],
                x : i
            });
            for (var j = 0; j < $scope.cantidad; j++) {
                $scope.filas[i].columnas.push({ y: j });
            }
            
        };
        console.log($scope.filas)
        //if ($scope.cantidad < 5) {
        //    alert("el tablero no puede de menos de 5 x 5");
        //    $scope.tabla = [];
        //};
    };

   

});
