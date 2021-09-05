# grunt_project
This template can be used to develop all static website (pure HTML, CSS, JS approach) 
By using grunt as a task runner and its ecosystem, we can automatically perform frequent tasks such as minification, compilation, unit testing, and linting.
When using this template, all thing you need to do is put files into correctly directory and run the below command for automatically boring tasks.

The structure of this project:
- dest: where .css files which is compiled from scss files in scss folder
- font: where we put necessary fonts for our website
- img: where we put necessary images for our website
- js: where we put our .js file to handle the logic of our website
  - libs: where .js files of which libraries we use
- scss:
  - style.scss: includes all .scss files we have
  - import/
    - core/*.scss: those files like Bootrap
    - pages/*.scss: Each file contains style sheet of each page of our website

All .html file are created when we develop would be putted in the same directory like index.html
All config in grunt.js shouldn't be modified if you are not familar with grunt. 

Usage
```grunt [options] [task [task ...]]```

Availables tasks are configed in grunt.js:

#### Hot reload, automatically maps .scss to .css files, uglify .js files:
```grunt watch```

#### Map scss to css files:
```grunt scss```

#### Minify css files:
```grunt cssmin```

#### Uglify js files:
```grunt uglify```
