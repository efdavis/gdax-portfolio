/* eslint consistent-return:0 */
/* eslint-disable no-undef */

const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const httpPort = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;

const packageJson = require('../package');
const isHttps = packageJson.config.isHttps;

const fs = require('fs');
const https = require('https');
const http = require('http');

credentials = {};

if (isHttps) {
  const privateKey = fs.readFileSync('static/localhost.key', 'utf8');
  const certificate = fs.readFileSync('static/localhost.crt', 'utf8');
  credentials = { key: privateKey, cert: certificate };
}


const app = express();

// Path for serving static files
app.use('/static', express.static('static'));

const spawn = require('child_process').spawn;
// Authentication endpoint
app.get('/api/auth', (req, res) => {
  // Call Python authentication script
  const process = spawn('python', ['server/auth.py']);

  // Listen for Python data to come back
  process.stdout.on('data', (data) => {
    // Send data back as JSON response
    res.setHeader('Content-type', 'text/html', 'charset=utf-8');
    res.send(data);
  });
});

// Price ticker endpoint
app.get('/api/ticker', (req, res) => {
  const process = spawn('python', ['server/market-data.py']);

  // Listen for Python data to come back
  process.stdout.on('data', (data) => {
    // Send data back as JSON response
    res.setHeader('Content-type', 'text/html', 'charset=utf-8');
    res.send(data);
  });
});


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';


// Start your app - works for both http and https servers
const startApp = function (server, port) {
  server.listen(port, host, (err) => {
    if (err) {
      return logger.error(err.message);
    }

    // Connect to ngrok in dev mode
    if (ngrok) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return logger.error(innerErr);
        }

        logger.appStarted(port, prettyHost, url);
      });
    } else {
      logger.appStarted(port, prettyHost);
    }
  });
};

if (isHttps) {
  const httpsServer = https.createServer(credentials, app);
  startApp(httpsServer, 8443);
} else {
  const httpServer = http.createServer(app);
  startApp(httpServer, httpPort);
}

