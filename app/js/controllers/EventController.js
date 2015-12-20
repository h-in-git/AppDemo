'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.snippet = '<span style="color: yellow !important;">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = { color: 'yellow' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.cbChecked = false;
        $scope.sortorder = 'name';
        eventData.getEvent(function(event){
            $scope.event = event;
        });

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);