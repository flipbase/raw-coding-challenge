// Manually set the enviroment to 'test' (this will disable logging to the console and loggly)
process.env.NODE_ENV = 'test';

global.chai = require('chai');
global.sinon = require('sinon');
global.should = global.chai.should();
global.expect = global.chai.expect;