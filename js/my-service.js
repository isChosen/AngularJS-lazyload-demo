
// 自定义一个getImgsModule模块，用来处理服务
// 工厂模式创建服务，return回一个方法，controller注意服务后可直接调用方法
// angularJS中的$http服务以promise格式处理回调数据
angular.module('getImgsModule', [])
    .factory('getImgsService', ['$http', function($http) {
        return {
            getImgsData: function(successCallback, failCallback) {
                $http({
                        method: 'GET',
                        url: './data/imgmock.json'
                    })
                    .success(function(resp) {
                        // console.log(resp);
                        var arr = [];
                        for (i in resp) {
                            // 此处obj需定义在循环内部
                            var obj = {};
                            obj.id = resp[i].id;
                            obj.title = resp[i].title;
                            obj.imgUrl = resp[i].imgUrl;
                            arr.push(obj);
                        }
                        // 成功时的回调函数
                        successCallback(arr);
                        // console.log(arr);
                    })
                    .error(function(err) {
                        // 失败时的回调函数
                        failCallback(err);
                    })
            }

        }

    }]);
