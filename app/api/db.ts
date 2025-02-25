
import { MongoClient, Db, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://ramakrishnapondicherry2:<db_password>@cluster0.lozr0.mongodb.net/?appName=Cluster0";

let cachedClient:MongoClient | null  = null
let cachedDb:Db | null = null


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export async function connectToDb() {
    if(cachedClient && cachedDb){
        return {client: cachedClient, db:cachedDb}
    }

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.lozr0.mongodb.net/?appName=Cluster0`;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    await client.connect();

    cachedClient = client;
    cachedDb = client.db('ecommerce-nextjs');

    return {client, db: client.db('ecommerce-nextjs')}

}

