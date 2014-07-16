'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var TobikoGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Tobiko generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
  },

  dirs: function () {
    this.mkdir('contents');
    this.mkdir('js');
    this.mkdir('scss');
    this.mkdir('templates');
  },

  tobiko: function () {
    this.mkdir('tobiko');
    this.template('_tobiko.json', 'tobiko.json');
    this.directory('tobiko/config', 'tobiko/config');
    this.directory('tobiko/tasks', 'tobiko/tasks');
  },

  config: function () {
    this.template('_config.json', 'config.json');
  },

  gruntfile: function () {
    this.copy('Gruntfile.js');
  },

  contents: function () {
    this.copy('contents/index.json');
  },

  templates: function () {
    this.copy('templates/index.hbs');
    this.directory('templates/helpers');
    this.directory('templates/partials');
  }

});

module.exports = TobikoGenerator;
