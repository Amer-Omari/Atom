// (function (){
// 'use strict';
//
// angular.module('NameCalculator',[])
//
// .controller('NameCalculatorController',function($scope){
// $scope.name="";
// $scope.totalValue=0;
//
// $scope.displayNumeric=function(){
//   var totalNameValue=calculateNumericForString($scope.name);
//   $scope.totalValue=totalNameValue;
// };
//
// function   calculateNumericForString(string){
// var totalStringValue=0;
// for (var i=0; i < string.length; i++){
//   totalStringValue+=string.charCodeAt(i);
// }
// return totalStringValue;
// }
// });
// })();

(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.message="";
  $scope.state="";
  $scope.state2="";
  $scope.check=function () {

if($scope.input_string===undefined||$scope.input_string===""){
  $scope.message="please Enter Data First";
    $scope.state="red";
      $scope.state2="red";
}
else {
  let commaCal=$scope.input_string.split(",").length;
  if (commaCal>=1 && commaCal<=3) {
    $scope.message="Enjoy";

  }else {
    $scope.message="Too much";
}
  $scope.state="green";
    $scope.state2="green";
}
}
};
})();
