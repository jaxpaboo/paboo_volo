"use strict";
var https = require("https");
var server = require("./server");

// https://en.wikipedia.org/wiki/Node.js
var options = {
  host: "en.wikipedia.org",
  // port: 80,
  path: '/wiki/Node.js',
  method: "GET"
};

var req = https.request(options, function(res) {

  console.log("OPTIONS: " + options);
  console.log("STATUSCODE: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify(res.headers));
  //res.setEncoding('utf8');

  var iChunkCount = 0;
  var allChunks = '';
  res.on("data", function (chunk) {
    ++iChunkCount;
    // console.log(`Chunk#${iChunkCount} ${chunk}`);
    allChunks += chunk;
  });

  console.log(`CHUNKS=${iChunkCount}`)
  console.log(`allChunks=${allChunks}`)
});

req.end('')

// 

server.startServer();