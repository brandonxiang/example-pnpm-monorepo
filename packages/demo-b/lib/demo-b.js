'use strict';

const a = require('demo-a');

module.exports = demoB;

function demoB() {
    a()
    console.log('Hello b');
}
