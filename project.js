import {SparqlEndpointFetcher} from "fetch-sparql-endpoint";
import * as fs from 'fs'


const myFetcher = new SparqlEndpointFetcher();


//vorherige Datei wird gelöscht
fs.unlink('Laenderdaten.json', function (err) {
  //if (err) throw err;
  console.log('File deleted!');
});



//SPARQL Abfrage
const bindingsStream = await myFetcher.fetchBindings('https://dbpedia.org/sparql', 'SELECT * WHERE{ ?Staat a dbo:Country; dbo:capital ?capital; dbo:populationTotal ?population; dbo:language ?language; dbo:area ?area; dbo:currency ?currency; dbo:currencyCode ?currencyCode. }');

//Abgefragte Daten werden als JSON Datei gespeichert
bindingsStream.on('data', (bindings) => fs.appendFile('Laenderdaten.json', JSON.stringify(bindings), function (err) {
    if (err) throw err;
  }));
console.log('Saved!');
