### Command used to create Node.js project

> npm init -y

#### Once package.json is created, run the following to add babel packages to allow use modern es6 import export modules

> npm i --save-dev @babel/core @babel/node @babel/preset-env
> <br><br>

#### Create a file called '.babelrc and add the following

> "presets": ["@babel/preset-env"] <br><br>

#### Add script command to package.json so we don't have to run 'npx babel-node my-script.js' everytime

> Under "scripts": <br> <strong>"start": "babel-node my-script.js",</strong> <br><br>

#### Use this to execute the js

> npm run start

### Install Express

> npm install express

### Basic Express setup

> Create a directory and js file under 'src/server.js'
> <br><br>

### Install node daemon to watch the change

> npm install --save-dev nodemon

#### To watch the change

> npx nodemon --exec 'npx babel-node src/server.js'

#### Add script command package.json

> Under "scripts": <br> <strong> "nodestart": "nodemon --exec babel-node src/server.js",</strong> <br><br>
