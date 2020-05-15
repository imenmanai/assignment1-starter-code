(function () {
'use strict';//protected from mistakes show mistakes in browser

angular.module('myFirstApp', [])
//able to execute angular the first is name of app seceond list  of dependencies
.controller('MyFirstController', function ($scope)// { //first contoller
{$scope.name="";
  $scope.message="";
  $scope.check=function()
  {
    var totalComa1=calculateNumber($scope.name);
    console.log(totalComa1);

    if (totalComa1<4 && totalComa1 >0)
    $scope.message="Enjoy !";
    else if (totalComa1>3) {
      $scope.message="Too much!"
    } else if(totalComa1==0)
    {$scope.message="Please enter data first";}


};
function calculateNumber(string)
{
var totalComma=0;
for(var i=0;i<string.length;i++)
{
  if(string.charAt(i)==',')
  totalComma+=1;
}
  return totalComma;
}


});

})();
