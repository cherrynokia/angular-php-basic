var app = angular.module('app', ['ngResource']);

app.controller('MainCtrl', function($scope, $resource, $window) {
  var Student = $resource('students.php', {id: '@id'});
  $scope.students = Student.query();
  $scope.add = function() {
    Student.save($scope.new_student, function() {
      alert("追加しました。");
      $window.location.reload();
    });
  };
});

app.controller('DetailCtrl', function($scope, $window) {
  $scope.update = function() {
    $scope.student.$save(function() {
      alert("更新しました。");
    });
  };
  $scope.delete = function(index) {
    $scope.student.$delete();
    alert("削除しました。");
    $window.location.reload();
  };
});
