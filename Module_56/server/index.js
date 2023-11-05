const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());


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
    // Connect the client to the server	(optional starting in v4.7)
     client.connect();
   

    const coffeeConnection = client.db('coffeeDB').collection('coffee');
    app.get('/coffee', async(req, res)=>{
      const cursor  = coffeeConnection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post('/coffee', async(req, res)=>{
      const coffee = req.body;
      const result = await coffeeConnection.insertOne(coffee);
      res.send(result);
    })
    
 

     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log(
       "Pinged your deployment. You successfully connected to MongoDB!"
     );

  }catch(error){
    console.log('Err===========', error)
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res)=>{
  res.send('this is from server');
})

app.listen(port, () => {
  console.log(`Coffee server is running at http://localhost:${port}`);
});
