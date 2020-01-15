const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const serveStatic = require("serve-static")

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//link to api/routes
const posts = require('./routes/api/posts');

//Port
const port = process.env.PORT || 5000;

//app.use('/api/posts', posts);
app.use(serveStatic((__dirname, 'dist')));

app.listen(port, () => console.log(`Server started on port ${port}`));

