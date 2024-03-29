const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Link to api/routes
const posts = require('./routes/api/posts');

app.use("/api/posts", posts);

//Handle production heroku
if(process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Any route
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

