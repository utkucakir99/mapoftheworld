const {MongoClient} = require('mongodb');
const fs = require('fs');

async function main() {

    //Verbindung zur Datenbank herstellen
    const uri = "mongodb+srv://mielad_hashimi:8xgy9XontChPtyYh@cluster0.imjg1.mongodb.net/sample_new?authSource=admin&retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    const database = client.db("Test");
    const normal = database.collection("new_normal");

    //Datei einlesen
    const doc = fs.readFileSync('query_1.json');  
    const Laenderdaten = JSON.parse(doc);

    try {
        await client.connect();
        //Daten in der MongoDB speichern
        await normal.insertMany(Laenderdaten); 

     
    } catch (e) {
        console.error(e);
    }
    //Verbindung trennen
    finally {
        await client.close();
    }
}
