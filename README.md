Angular ES6 Webpack seed

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone the seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/and-valentini/Angular-Es6-Webpack-Seed
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/and-valentini/Angular-Es6-Webpack-Seed <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies
* We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
```

COMMANDS:
ON DEVELOPMENT:
```
npm start
```
then go browse to the app at http://localhost:8080/.

ON PRODUCTION:
```
npm run build
```
