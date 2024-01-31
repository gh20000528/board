const express = require ("express");
const  cors = require('cors')

const bodyParser = require('body-parser')
const CardRoute = require('./routers/card')
const UserRoute = require('./routers/user.js')
const db = require('./db.js');
const CommentRoute = require("./routers/comment.js");

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/card', CardRoute)
app.use('/api/user', UserRoute)
app.use('/api/comment', CommentRoute)



db.authenticate()
  .then(() => {
    console.log('Database connected.');
    return db.sync();
  })
  .then(() => {
    app.listen(8000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });