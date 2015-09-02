(function () {
    'use strict';

    angular.module('angular-quiet-console', [])
        .provider('$quietConsole', QuietConsole)
    ;
    
    function QuietConsole() {
        var _ignorePatterns, self;

        _ignorePatterns = [];

        self = this;
        self.ignore = ignore;
        self.$get = Factory;

        if (console && console.warn) {
            console._warn = console.warn;
            console.warn = warn;
        }

        function Factory() {
            var self;

            self = this;
            self.ignore = ignore;
        }

        function ignore(stringOrPattern) {
            _ignorePatterns.push(stringOrPattern);

            return self;
        }

        function warn(message) {
            if (_ignorePatterns.length)
                for (var i = 0; i < _ignorePatterns.length; i++)
                    if (message.match(_ignorePatterns[i]) !== null)
                        return;

            console._warn.apply(console, arguments);
        }
    }

})();
