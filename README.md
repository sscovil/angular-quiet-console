# Angular Quiet Console

A simple module for hiding unwanted warnings in the browser console, inspired by [Angular Material](https://material.angularjs.org) and [this SO question](http://stackoverflow.com/questions/30666742/how-do-i-disable-ngaria-in-ngmaterial).

## Installation

Download it using your preferred method:

Method | Command
-------|--------
NPM | `npm install angular-quiet-console`
Bower | `bower install angular-quiet-console`
GitHub | `git clone https://github.com/sscovil/angular-quiet-console.git`

Include it in your `index.html` file:

```html
<script type="text/javascript" src="/path/to/angular-quiet-console.js"></script>
```

Add it to your angular module as a dependency:

```javascript
angular.module('myApp', ['angular-quiet-console']);
```

## Usage

Here is an example that gets rid of an actual [Angular Material](https://material.angularjs.org) console warning:

```javascript
angular.module('myApp', ['angular-quiet-console'])
    .config(quietConsoleConfig);
    
function quietConsoleConfig($quietConsoleProvider) {
    $quietConsoleProvider.ignore(/^The placeholder='.*' will be ignored since this md-input-container has a child label element\.$/);
}
```

The `igonre()` function is available at config time via `$quietConsoleProvider` and at runtime via `$quietConsole`, and is chainable. It accepts a __string__ or __regular expression__ that will be compared to each console warning message using [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) to determine if the warning should be suppressed.
