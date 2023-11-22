require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5qon2py.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db('bistroDB');
    const menuCollection = database.collection('menu');
    const reviewsCollection = database.collection('reviews');

    app.get('/menu', async(req, res) =>{
        const result = await menuCollection.find().toArray();
        res.send(result);
    });

    app.get('/reviews', async(req, res) => {
        const result = await reviewsCollection.find().toArray();
        res.send(result);
    })

    console.log('mongodb connected')
  } finally {
    
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Bistro boss server is running ");
});

app.listen(port, (req, res) => {
  console.log(`Server is running at http://localhost:${port}`);
});
