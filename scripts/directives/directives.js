nodspot.directive('addToPlaylist', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/partials/addToPlaylist.html'
    };
});


nodspot.directive('releaseItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/partials/releaseItem.html',
        scope: {
            releases: '=',
            playRelease: '=',
            searchFavourites: '='
        }
    }
});


nodspot.directive('playlistItemOptions', [function () {
    return {
        restrict: 'E',
        templateUrl: 'views/partials/playlistItemOptions.html',
        scope: {
            source: '=',
            playlistEditMode: '=',
            deletePlaylist: '=',
            $index: '=index',
            playlist: '=',
            renamePlaylist: '='
        }
    }
}]);


nodspot.directive('suggestions', [function () {
    return {
        restrict: 'E',
        template: "<ul class='dropdown' ng-transclude></ul>",
        transclude: true,

        link: function (scope, element, attrs) {
            element.on('mouseleave click', function (event) {
                scope.collapse();
            });

            scope.collapse = function () {
                scope.suggestionsVisibility = false;
                scope.$apply();
            };

            scope.expand = function () {
                scope.suggestionsVisibility = true;
                scope.$apply();
            };
        },
        scope: {
            suggestionsVisibility: "=",
            suggestions: '='
        }
    };

}]);


nodspot.directive('lookup', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {


            //listen for up/down arrow keys
            element.bind('keydown', function (event) {
                try {
                    if (event.which === 38) {
                        scope.getSelectionIndex('up');
                    } else if (event.which === 40) {
                        scope.getSelectionIndex('down');
                    }
                } catch (e) {
                }
            });


            //returns index of the next item that's going to be highlighted
            scope.getSelectionIndex = function (direction) {
                if (direction == 'down') {
                    scope.$parent.highlightedSuggestion++;
                } else if (direction == 'up') {
                    scope.$parent.highlightedSuggestion--;
                }

                //allow to loop through the list items
                if (scope.$parent.highlightedSuggestion > scope.$parent.suggestions.length - 1) {
                    scope.$parent.highlightedSuggestion = 0;
                } else if (scope.$parent.highlightedSuggestion <= -1) {
                    scope.$parent.highlightedSuggestion = scope.$parent.suggestions.length - 1;
                }

                scope.highlightItem(scope.$parent.highlightedSuggestion);
            };


            //highlight item in the suggestions list
            scope.highlightItem = function (index) {
                scope.$apply(function () {
                    angular.forEach(scope.$parent.suggestions, function (suggestion, i) {
                        suggestion.state = '';
                    });
                    scope.$parent.suggestions[index].state = 'active';
                    scope.$parent.searchTerm = scope.$parent.suggestions[index].searchTerm;
                });
            };
        },

        scope: {
            highlightedSuggestion: '='
        }
    };
}]);