app.controller("myQsCtrl", function ($scope, questionSrv) {


  questionSrv.getActiveUserQuestions().then(function (questions) {
    $scope.items = questions;
    $scope.quest = $scope.items[0];
}, function (err) {
    $log.error(err);
})
  
$scope.updateQuestion = function (item) {
  // console.log("item" + item);
  $scope.quest = item;
  console.log("quest" + $scope.quest.optionsData);
}

  $scope.addQ = function () {
    var options = [{
        "title": $scope.op1title,
        "description": $scope.op1descr,
        "image": $scope.op1image
      },
      {
        "title": $scope.op2title,
        "description": $scope.op2descr,
        "image": $scope.op2image
      },
      {
        "title": $scope.op3title,
        "description": $scope.op3descr,
        "image": $scope.op3image
      }
    ]
    
      questionSrv.createQuestion($scope.title, $scope.description, options).then(function() {
        questionSrv.getActiveUserQuestions().then(function (questions) {
          $scope.items = questions;
          $scope.quest = $scope.items[0];
      }, function (err) {
          $log.error(err);
      })
      }, function(err) {
          $log.error(err);
      })

  };



  // $scope.quest = $scope.items[0];

  $scope.cs1 = "fhvrd1";
  $scope.cs2 = "fhvrd2";
  $scope.cs3 = "fhvrd3";


});