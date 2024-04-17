#!/usr/bin/env node

import {userName} from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = userName();
console.log('Hello,', name,'!');
