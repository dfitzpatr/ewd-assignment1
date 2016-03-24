var LibraryApp = angular.module('homeLibraryApp', ['ngRoute']);

    LibraryApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            hideMenus: true 
          })
          .when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'registerCtrl',
            hideMenus: true 
          })
          .when('/login/:loginError', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            hideMenus: true 
          })
          .when('/mediaList/:userId', {
            templateUrl: 'partials/media-list.html',
            controller: 'MediaListCtrl'
          })
          .when('/mediaList/:userId/media-review/:mediaId', {
            templateUrl: 'partials/media-review.html',
            controller: 'MediaReviewCtrl'
          })
          .otherwise({
            redirectTo: '/login'
          });
      }]);

    LibraryApp.controller('LoginCtrl', ['$scope','AuthenticationService', '$routeParams', 
          function($scope, AuthenticationService, $routeParams) {


            $scope.login = function(){
                var result = AuthenticationService.login($scope.username, $scope.password);
            }

          $scope.loginError =  $routeParams.loginError

          }])

    LibraryApp.controller('registerCtrl', ['$scope','$location', '$routeParams', 
          function($scope, $location, $routeParams) {


            $scope.register = function(){
                $location.path('/login/' );
            }

          $scope.loginError = ""

          }])
	  
    LibraryApp.controller('MediaListCtrl', ['$scope', 'MediaService', '$routeParams',
          function($scope, MediaService, $routeParams) {


             MediaService.getUserMedia($routeParams.userId).success(function(data) {
                  $scope.mediaList = data

                 })

            $scope.incrementUpvotes = function(media) {
                   media.upvotes += 1;
               }

             $scope.orderProp = 'upvotes';
             $scope.UserId = $routeParams.userId;

          }])

	  LibraryApp.controller('MediaReviewCtrl', ['$scope', '$location', '$routeParams', 'MediaService', 
         function($scope, $location, $routeParams, MediaService) {

//, $routeParams.mediaId

          MediaService.getUserMedia($routeParams.userId).success(function(data) {
                  $scope.mediaList = data

                  angular.forEach($scope.mediaList, function(item){
                      if (item.id == $routeParams.mediaId){
                            $scope.media = item
                      }

                  })
              })

          
          $scope.incrementUpvotes = function(review){
              review.upvotes += 1;
          }
 
          $scope.addReview = function(){
   
            $scope.media.review.push({
              body: $scope.review.body,
              author: $scope.review.author,
              upvotes: 0
            });

            $scope.review = {};
          }

          $scope.UserId = $routeParams.userId;


      }])
	  
	  
    LibraryApp.factory('MediaService', ['$http' , function($http){
        var api = {

            getUserMedia : function(userId) {
             
              if (userId == "0") {
                return $http.get('books/mediaListHomer.json')
              } else {
                return $http.get('books/mediaListMarge.json')
              }
            }
            } 
        return api
    }])

     LibraryApp.factory('AuthenticationService', ['$http', '$location' , 
              function($http, $location){

                    var api = {

                        login : function(username, password) {
                            
                            $http.get('books/library.json').success(function(data){

                                for (var i in data.Users) {
                                    if (data.Users[i].username == username && data.Users[i].password == password ) {
                                        result = data.Users[i];
                                    }
                                }    
                                if (typeof(result) != "undefined"){
                                    $location.path('/mediaList/' + result.id);
                               } else {
                                    $location.path('/login/' + "Invalid Login Details");
                               }
                                      
                              });            
                            }
                      }
        return api
    }])   