const path = require('path');
const express = require('express');
const app = express ();
const port = process.env.PORT || 3000; // Heroku set automatically a dynamiv environment variable
// create an Express application: import express and then create app as an express function!
// customizing the app: (1) where are the files and (2) on which port will the app run

//(1) determine where the files live:
// tell the app to serve up the public folder plus everything inside
// make use of app.use() - middelware

const publicPath = path.join(__dirname,'..','public');
console.log(publicPath);

app.use(express.static(publicPath));

// dealing with routing issues
// localjost:3000/create doesn't exist
// so instruct to serve up index.html for all files that don't have a match
app.get('*', (req,res) => {
  res.sendFile(path.join(publicPath,"index.html"));
});

// (2) listen to port 3000
// make use of app.listen() - middelware
app.listen(3000, () => {
  console.log("server running");
});