![Picture](http://www.cwrc.ca/wp-content/uploads/2010/12/CWRC_Dec-2-10_smaller.png)

# CWRC-BasicDelegator

[![Travis](https://img.shields.io/travis/jchartrand/CWRC-BasicDelegator.svg)](https://travis-ci.org/jchartrand/CWRC-BasicDelegator)
[![Codecov](https://img.shields.io/codecov/c/github/jchartrand/CWRC-BasicDelegator.svg)](https://codecov.io/gh/jchartrand/CWRC-BasicDelegator)
[![version](https://img.shields.io/npm/v/cwrc-basic-delegator.svg)](http://npm.im/cwrc-basic-delegator)
[![downloads](https://img.shields.io/npm/dm/cwrc-basic-delegator.svg)](http://npm-stat.com/charts.html?package=cwrc-basic-delegator&from=2015-08-01)
[![GPL-2.0](https://img.shields.io/npm/l/cwrc-basic-delegator.svg)](http://opensource.org/licenses/GPL-2.0)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


1. [Overview](#overview)
1. [Demo](#demo)
1. [Installation](#installation)
1. [Use](#use)
1. [API](#api)
1. [Development](#development)
1. [Contributing](#contributing)
1. [FAQ](#faq)
1. [License](#license)

### Overview

NPM module to which the CWRC-Writer delegates server side calls for file creation, retrieval, and update; entity lookups; schema retrieval; xml validation; template loading.

### Demo 


### Installation

`npm install cwrc-basic-delegator`   

To simultaneously register as a dependency in your package.json:

`npm install cwrc-basic-delegator --save`   

or in shortcut form:

`npm i -S cwrc-basic-delegator`

### Use

One example:

let DelegatorConstructor = require('cwrc-basic-delegator');
let delegator = new DelegatorConstructor(cwrcWriter);

where cwrcWriter is an instance of the CWRC[CWRC-Writer](https://github.com/cwrc/CWRC-Writer)Writer.

The spec directory contains specifications (tests) that can help better understand the API. Also see [CWRC-GitServer](https://github.com/cwrc/CWRC-GitServer) which fully uses the API.

### API


The API is for the moment defined on a class instantiated from the NPM module import (in other words, require(cwrc-basic-delegator) returns a constructor function with which to create the actual delegator.) The methods defined on the delegator are:


### Development

* Fork or clone (depending on your role in the project) the repo to your local machine.

* `npm install` to install the node.js dependencies 
	
	NOTE:  we use `npm set save-exact true` to save dependencies as exact version numbers so NPM should install exact versions when you run install

* write a test (or two)for your new functionality (in 'spec' directory)

* `npm test` to start mocha and automatically rerun the tests whenever you change a file

* change some stuff to satisfy new test


### Commit to Github / Build in Travis / Release to NPM

If you are working within a cloned copy, do the following to setup automatic semantic release through continuous integration using semantic-release (which in turn uses Travis) and commitizen.  Otherwise, if you are working from a fork, then submit a pull-request.

Make sure you've got NPM configured to publish to the NPM registry:

```
npm set init.author.name "James Chartrand"
npm set init.author.email "jc.chartrand@gmail.com"
npm set init.author.url "http://openskysolutions.ca"
npm login  (answer prompts approriately)
```
and install semantic-release-cli globally:

`npm install -g semantic-release-cli`

If necessary (it should already have been done, but maybe the NPM author information has changed for example) configure semantic release:

`semantic-release-cli setup`

which will ask you a series of questions, which at the time of writing this were:

```
semantic-release-cli setup
? What is your npm registry? https://registry.npmjs.org/
? What is your npm username? jchartrand
? What is your npm password? *******
? What is your GitHub username? jchartrand
? What is your GitHub password? ********
? What CI are you using? Travis CI
```

Semantic-release sets up a Travis build (on the Travis web site in the Travis account associated with the given Github username) and a trigger in GitHub to run the Travis build on the Travis site whenever you push a change to the GitHub repo.  The Travis build will also deploy a new version to the NPM registry if the commited change is either a new feature or a breaking change.

To submit a commit, stage your changes (e.g., git add -A) then instead of using git's commit command, instead use `npm run commit` which uses commitizen to create commits that are structured to adhere to the semantic-release conventions (which are the same as those used by Google: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit )

The NPM `ghooks` package is used to add two pre-commit git hooks that will check that all mocha tests pass and that code coverage is 100% (as caluclated by istanbul) before allowing a commit to proceed.  The hooks are set in package.json:

```
"config": {
    "ghooks": {
      "pre-commit": "npm run test:single && npm run check-coverage"
    }
  }
```

After the commit has succeeded then `git push` it all up to github, which will in turn trigger the Travis build.  The Travis build is also set to confirm that all tests pass and that code coverage is 100%.  This is set in the `.travis.yml` file:

```
script:
  - npm run test:single
  - npm run check-coverage
```

Of course, if the githooks that check tests and code coverage themselves passed, then the Travis check for tests and code coverage should also be fine.

Results of the travis build are here:

`https://travis-ci.org/jchartrand/CWRC-BasicDelegator` 

The Travis build also publishes the code coverage statistics to codecov.io where the coverage can be viewed:

`https://codecov.io/gh/jchartrand/CWRC-BasicDelegator/`

 codecov.io also provides us with the code coverage badge at the top of this README.

Finally the Travis build publishes a new version (if the commit was designated as a new feature or breaking change) to NPM:

https://www.npmjs.com/package/cwrc-basic-delegator

Testing uses mocha and chai.  Tests are in the `spec` directory. 

This module makes http calls to CWRC.  Rather than make those calls for every test, [nock](https://github.com/node-nock/nock) instead mocks the calls (intercepts the calls and instead returns pre-recorded data).


### Contributing

Please contact us if you'd like to contribute.  Standard pull requests, including tests, are expected.

### FAQ

Who would use this?

The CWRC staff wanting to change how the CWRC-Writer saves to the CWRC server, and uses the CWRC server side services.

### License

[GNU GPL V2](LICENSE)