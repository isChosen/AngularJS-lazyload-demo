// 依赖自定义服务模块和懒加载模块
angular.module('myApp', ['getImgsModule', 'me-lazyimg'])
    .controller('mainCtrl', ['$scope', 'getImgsService', function($scope, getImgsService) {
        $scope.insx = {
            title: 'AngulaJS懒加载模块',
            tab: 'me-lazyloadimg模块'
        }
        // 调用服务内的方法，传入成功和失败的函数
        getImgsService.getImgsData(
            function success(data) {
                $scope.items = data;
                // console.log(data)
            },
            function fail(err) {
                console.log(err)
            }
        )
    }])
