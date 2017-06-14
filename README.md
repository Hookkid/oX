oX is a React boilerplate.
=====================

This is the client side. Server side repository is at XXX.

In the effort to create a development environment that can be quickly initiated and at the same time have cutting-edge DOM manipulator, state management and NO-SQL db, I am building this tool.

It is already functioning as intended although there are imminent upgrades coming.

The Stack:

###Client
1. Webpack
	i. Lodash
	ii.	Webpack-dev-server 
	iii. Babel
		1. Babel-loader
		2. Babel-core
		3. Babel-preset-es2015
		4. Babel-preset-react
2. React
	i. React-dom
3. Mobx
	i. Mobx-react

###Server
1. Python
2. Pymongo
3. Flask
	i. Flask-cors
4. MongoDb


### Run the example

```
npm install
npm start
open http://localhost:8080/webpack-dev-server/
```