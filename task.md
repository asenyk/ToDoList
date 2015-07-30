# Environment
1. Install [Node.js + NPM](https://nodejs.org/)
2. Install [Grunt.js](http://gruntjs.com/)
3. Read [Grunt.js - Getting started guide](http://gruntjs.com/getting-started)
4. Setup new project repository on [GitHub](https://github.com/)
5. Prepare project basic (empty) configuration using Grunt.js

# Project configuration
1. Setup and configure [load-grunt-config](https://github.com/firstandthird/load-grunt-config)
2. Configure [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
3. Configure project structure using:
 - [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
 - [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
 - [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
 
 Project structure:
 - /grunt/ - grunt configuration files
 - /src/ - project sources
  - /js/
  - /html/
  - /less/
 - /target/ - generated folder for build results
4. Setup and configure [Bower](http://bower.io/):
 - [Bootstrap](http://getbootstrap.com/)
 - [jQuery](https://jquery.com/)
5. Create dummy index.html in source folder and configure Grunt.js:
 - remove index.html from target folder
 - copy index.html from source folder to target folder
 - setup watcher for index.html changes
6. Attach Bootsrtap to your index.html

# LESS
1. Configure less compiler task
 - compile all *.less files from less directory into application.css
 - attach this file to your index.html
2. Create dummy less file

#TO DO MAIN PAGE
1. Using less and Twitter Boostrap style ToDo application mock
 - input field for adding new ToDo items
 - list of current ToDo items
 - checkboxes near each ToDo items for marking item as done
