# Ng5BaseApp

This project can be a good starting point for any angular5 application. It incorporates typical things that should be present in any frontend application. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4. 

## Setup
Install node using nvm
```
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash
nvm install 8.9.0
nvm use 8.9.0
nvm alias default 8.9.0
```
Install global dependencies
```
npm install -g yarn @angular/cli
```

Install local and dev dependencies from project directory using `npm` or `yarn`
```
npm install
```
or
```
yarn install
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### Text editor settings
Please make sure your text editor is configured properly before you start contributing.
Use below settings for sublime text editor.
```
"tab_size": 2,
"translate_tabs_to_spaces": true,
"trim_trailing_white_space_on_save": true,
"ensure_newline_at_eof_on_save": true,
```
Use below settings for visual studio Code
```
"editor.tabSize": 2,
"editor.insertSpaces": true,
"editor.trimAutoWhitespace": true,
"files.insertFinalNewline": true

```
