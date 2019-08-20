'use strict';

const server = require('./lib/server.js');

const express = require('express');
const app = express();

server.start(3000);

