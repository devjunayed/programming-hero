require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const cartCollection = database.collection('carts');
    const userCollection = database.collection('users');


    // users related api

    app.get('/users', async(req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    })

    app.post("/users", async(req, res) => {
      const user = req.body;

      // insert email if user doesn't exists:
      // you can do this many ways (1. email unique, 2. upsert, 3. simpoe chekcing)

      const query = {email: user.email};
      const exisitingUser = await userCollection.findOne(query);
      if(exisitingUser){
        return res.send({message: "user already exists", insertedId: null});
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    })
    app.patch("/users/admin/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const updatedDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(query, updatedDoc);
      res.send(result);
    }) 
    app.delete('/users/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })
// menu related api
    app.get('/menu', async(req, res) =>{
        const result = await menuCollection.find().toArray();
        res.send(result);
    });

    app.get('/reviews', async(req, res) => {
        const result = await reviewsCollection.find().toArray();
        res.send(result);
    });

    // carts collection
    app.get('/carts', async(req, res) => {
      const email = req.query.email;
      const query = {email: email};

      const result = await cartCollection.find(query).toArray();
      res.send(result);
    })

    app.post("/carts", async(req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result);
    });

    app.delete("/carts/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await cartCollection.deleteOne(query);
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


/**
 * -----------------------------------------------
 *                NAMING CONVENTION
 * -----------------------------------------------
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.put('/users/:id')
 * app.patch('/users/:id')
 * app.delete('/users/:id')
*/