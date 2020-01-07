const express = require('express');
const mongodb = require('mongodb'); 

const router = express.Router();

// Get posts
router.get('/', async (rep, res) => {
   const posts = await loadPostCollection();
   res.send(await posts.find({}).toArray());
});

// Add posts
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete posts
router.delete('/:id', async (req,res) =>{
    const posts = await loadPostCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});

//Get post collection to run methods
async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://sandraw:HxrdwJmt12@cluster0-opeaf.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true, useUnifiedTopology: true  //Stop error warnings
    });

    return client.db('Cluster0').collection('posts');
}

//Update posts (later)


module.exports = router;