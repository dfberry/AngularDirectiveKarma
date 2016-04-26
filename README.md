#Testing Angular 1.x Directives with Angular and Karma

##Introduction
This project demonstrates 3 ways to test Angular 1.x directives.

##directiveTemplate
This example tests a static template in the directive file.

##directiveTemplateUrl
This example tests a file-based template in the directive by loading the template file prior to the test.

##directiveTemplateUrl2
This example tests a file-based template by creating a module of the templates in the templateCache. 

##Prerequisites
This project was tested on Ubuntu 14.x, Node 5.x. 

The following are installed via package.json:
Karma is the test runner, Phantom is the headless browser, mocha is the test framework, chai is the expect library. 

##How to use - global management
1) Get the source from github. 

2) Install all subdirectory dependencies by running "npm run-script postinstall" at the root. 

>npm run-script postinstall

3) Build the app.js by running "npm run-script buildappjs" at the root.

>npm run-script buildappjs

4) Run the karma tests by running "npm run-script runalltests" at the root. 

>npm run-script runalltests

##References
[http://paulsalaets.com/pre-caching-angular-templates-with-gulp](http://paulsalaets.com/pre-caching-angular-templates-with-gulp)

[http://stackoverflow.com/questions/15214760/unit-testing-angularjs-directive-with-templateurl](http://stackoverflow.com/questions/15214760/unit-testing-angularjs-directive-with-templateurl)



