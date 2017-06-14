oX is a React boilerplate.
=====================

This is the client side. Server side repository is [here](https://github.com/Hookkid/oXserver "oXserver").

In an effort to create a development environment that can be quickly initiated and at the same time have cutting-edge DOM manipulator, state management and NO-SQL db, I am building this tool.

It is already functioning as intended although there are imminent upgrades coming.

The Stack:

### Client
1. Webpack
	- Lodash
	- Webpack-dev-server 
	- Babel
		1. Babel-loader
		2. Babel-core
		3. Babel-preset-es2015
		4. Babel-preset-react
2. React
	- React-dom
3. Mobx
	- Mobx-react

### Server
1. Python
2. Pymongo
3. Flask
	- Flask-cors
4. MongoDb


### Run the example

```
npm install
npm start
open http://localhost:8080/webpack-dev-server/
```