# Angular Quiet Console

A simple module for hiding unwanted warnings in the browser console, inspired by [Angular Material](https://material.angularjs.org) and [this SO question](http://stackoverflow.com/questions/30666742/how-do-i-disable-ngaria-in-ngmaterial).

## Usage

Here is an example that gets rid of an actual [Angular Material](https://material.angularjs.org) console warning:

```javascript
angular.module('myApp', ['quiet-console'])
    .config(quietConsoleConfig);
    
function quietConsoleConfig($quietConsoleProvider) {
    $quietConsoleProvider.ignore(/The placeholder='.*' will be ignored since this md-input-container has a child label element\./);
}
```
