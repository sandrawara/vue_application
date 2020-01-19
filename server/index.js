const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Link to api/routes
const posts = require('./routes/api/posts');

app.use("/api/posts", posts);

//Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

