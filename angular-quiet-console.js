(function () {
    'use strict';
    
    angular.module('angular-quiet-console', [])
        .provider('$quietConsole', QuietConsole)
    ;
    
    function QuietConsole() {
        var _ignorePatterns, provider;

        _ignorePatterns = [];

        provider = this;
        provider.ignore = ignore;
        provider.$get = Factory;

        if (console && console.warn) {
            console._warn = console.warn;
            console.warn = warn;
        }

        function Factory() {
            var factory;

            factory = this;
            factory.ignore = ignore;
        }

        function ignore(stringOrPattern) {
            _ignorePatterns.push(stringOrPattern);
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
