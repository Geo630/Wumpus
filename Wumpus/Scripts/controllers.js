var app = angular.module('wumpus', []);

app.controller('wumpusController', function ($scope) {

   
    
    var seleccionado = null;

    $scope.cantidad = null;
    $scope.filas = [];
    
    $scope.crear = function () {
        
        $scope.filas = [];
        for (var i = 0; i < $scope.cantidad; i++) {
            $scope.filas.push({
                columnas: [],
                x : i+1
            });
            for (var j = 0; j < $scope.cantidad; j++) {
                $scope.filas[i].columnas.push({ y: j+1 });
            }
            
        };
        console.log($scope.filas)
        if ($scope.cantidad < 5) {
            alert("el tablero no puede ser menor a 5 x 5");
            $scope.tabla = [];
        };
    };
    $scope.seleccionar = function (celda) {

        for (var i = 0; i < $scope.cantidad; i++) {
            for (var j = 0; j < $scope.cantidad; j++) {
                $scope.filas[i].columnas[j].activa = false;
            }

        };

        celda.activa = true;
    };
   
    var algo = function (seleccionado) {
        var x = parseInt( seleccionado.split(",")[0])-1;
        var y = parseInt(seleccionado.split(",")[1])-1;
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                $scope.filas[i].columnas.push({tieneWumpus: true });
            }
        }
    };

    $scope.colocarWumpus = function () {

        var celda = null;
        for (var i = 0; i < $scope.cantidad; i++) {
            for (var j = 0; j < $scope.cantidad; j++) {
                if ($scope.filas[i].columnas[j].activa) {
                    celda = $scope.filas[i].columnas[j];
                }
            }

        };

        if (celda != null) {
            celda.tieneWumpus = true;
        }
    }
   
});
