'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color: yellow !important;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = { color: 'yellow' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.cbChecked = false;
        $scope.sortorder = 'name';
        $scope.event = 

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);