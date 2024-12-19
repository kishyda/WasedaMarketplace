import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;  // The MongoDB URI you got from Atlas or local setup
const MONGODB_DB = process.env.MONGODB_DB || 'core_database';

let client: MongoClient | null = null;
let db: Db | null = null;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  try {
    if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable")
    client = await MongoClient.connect(MONGODB_URI);
    db = client.db(MONGODB_DB);

    return { client, db };
  } catch (error) {
    throw new Error('Could not connect to MongoDB');
  }
}

export { connectToDatabase };
