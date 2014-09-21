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
      name: 'localPort',
      message: 'Which port would you like your app to run on locally?',
      default: 4000
    }, {
      name: 'livereloadPort',
      message: 'Which port would you like livereload to listen on?',
      default: 35730
    },{
      name: 'contentDir',
      message: 'How would you like to name the content directory?',
      default: 'contents'
    }, {
      name: 'templatesDir',
      message: 'How would you like to name the templates directory?',
      default: 'templates'
    }, {
      name: 'templatesPartialsDir',
      message: 'How would you like to name the templates partials directory?',
      default: 'partials'
    }, {
      name: 'templatesHelpersDir',
      message: 'How would you like to name the templates helpers directory?',
      default: 'helpers'
    }, {
      name: 'buildDir',
      message: 'How would you like to name the build directory?',
      default: 'build'
    }, {
      name: 'sassDir',
      message: 'How would you like to name the sass partials directory?',
      default: 'scss'
    }];

    this.prompt(prompts, function (props) {
      this.contentDir = props.contentDir;
      this.templatesDir = props.templatesDir;
      this.templatesPartialsDir = props.templatesPartialsDir;
      this.templatesHelpersDir = props.templatesHelpersDir;
      this.buildDir = props.buildDir;
      this.sassDir = props.sassDir;
      this.localPort = props.localPort;
      this.livereloadPort = props.livereloadPort;
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
    this.mkdir('contents');
    this.copy('contents/index.json');
  },

  templates: function () {
    this.mkdir('templates');
    this.template('templates/index.hbs');
    this.directory('templates/helpers');
    this.directory('templates/partials');
  },

  styles: function () {
    this.directory('scss');
  },

  scripts: function () {
    this.directory('js');
  }

});

module.exports = TobikoGenerator;
