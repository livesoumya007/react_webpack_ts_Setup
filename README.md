Here we will learn how to create a setup from scratch

step1: git init ->
Creates a .git directory: This directory is the heart of the Git repository and contains all the necessary metadata and object database for your project.

step2: create a .gitignore file
step3: create 2 folders build and src
step4: put the build file in .gitignore
step5: run npm init -y command
step6: create index.html inside src folder
step7: write the basic html, create a div and give id='root', our react app will be injected to this element
step8: install react, react-dom, add node_modules to the gitignore
step9: install typescript @types/react, @types/react-dom as dev dependencies, cmd: npm i -D typescript @types/react @types/react-dom
step10: configuration for ts
This file is used to configure the TypeScript compiler (tsc) and specify various options for compiling TypeScript code into JavaScript.
step11: create App.tsx and Index.tsx
step12: Install Babel as a dev dependency as it will convert our TS and react code to js
browser won't understand TS and react codes so we need babel to convert our code  
npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime
step13: create `.babelrc` this is babel configuration file .
step14: install webpack related dependencies: command: npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
step15: install babel-loader ->
babel-loader is a Webpack loader that allows you to use Babel as a part of your Webpack build process. It is specifically designed to transpile JavaScript code using Babel when bundling your project. The primary job of babel-loader is to take your modern JavaScript code (which may include ECMAScript 6+ syntax and JSX for React) and transform it into a version that is compatible with a target environment, ensuring broader browser compatibility.

step16: create webpack folder, inside that create a file webpack.config.js
HtmlWebpackPlugin: this plugin helps in injecting the bundle.js file in the index.html file and will place that html file in the build folder.
step17: now write in the script to run the application

> > cmd: webpack serve --config webpack/webpack.config.js --open

=============
Well we are all set for starting the development.
later on we changed the webpack.config.js to webpack.comon.js and we will create diff for diff environment like dev and prod

install another module webpack
npm i -D webpack-merge

=============================

## Integrating eslint

Eslint will apply some best coding practice rules to thr project and it will show error if you don't follw them while writing the code
npm i -D eslint
npm i -D eslint-plugin-react eslint-plugin-react-hooks
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D eslint-plugin-import eslint-plugin-jsx-a11y

then update the script by adding the below
"lint": "eslint --fix \"./src/\*_/_.{js,jsx,ts,tsx,json}\"",
we are asking eslint to fix any possible error it can and if not highlight the error in the source folder which has the extension js,jsx,ts,tsx,json

==========================================

Preetier

---

npm i -D prettier eslint-config-prettier eslint-plugin-prettier
,prettierrc file and add into scripts inside package.json

==================================================

The files that we push into git, to make sure they don't have any linting erros we need to insta;; these packages
npm i -D husky lint-staged

SOURCE: CODEEVOLUTION CHANNEL
