# Angular Quiet Console

A simple module for hiding unwanted warnings in the browser console, inspired by [Angular Material](https://material.angularjs.org) and [this SO question](http://stackoverflow.com/questions/30666742/how-do-i-disable-ngaria-in-ngmaterial).

## Installation

1. Download it using your preferred method:

* NPM: `npm install angular-quiet-console`
* Bower: `bower install angular-quiet-console`
* GitHub: `git clone https://github.com/sscovil/quiet-console.git`

2. Include it in your `index.html` file:

```html
<script type="text/javascript" src="/path/to/quiet-console.js"></script>
```

3. Add it to your angular module as a dependency:

```javascript
angular.module('myApp', ['quiet-console']);
```

## Usage

Here is an example that gets rid of an actual [Angular Material](https://material.angularjs.org) console warning:

```javascript
angular.module('myApp', ['quiet-console'])
    .config(quietConsoleConfig);
    
function quietConsoleConfig($quietConsoleProvider) {
    $quietConsoleProvider.ignore(/The placeholder='.*' will be ignored since this md-input-container has a child label element\./);
}
```

The `igonre()` function, which is available at config time via `$quietConsoleProvider` and at runtime via `$quietConsole`, accepts a __string__ or __regular expression__ that will be compared to each console warning message via [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) to determine if the warning should be suppressed.
