(function () {

    var app = angular.module('app', []);
    
    app.service('calculator', function () {

        return {
            add: add,
            subtract: subtract
        };

        function add(x, y) {
            return x + y;
        }

        function subtract(x, y) {
            return x - y;
        }

    });

    }
)();