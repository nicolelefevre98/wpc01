// https://nodejs.org/api/https.html - Hjemmeside med koden der hjalp mig med at forstå dette og klare opgaven.
/*
Vi starter med at lave en konstant hvor https, som fortæller at vi skal kræve https
*/


const https = require('https');
var body = ""; // Bruges til indholdet på siden, altså indholdet fra den url vi henter data fra i variablen Options-


/*
Vi lavet en variabel Options, hvor vi skriver informationen omkirng hvor vi vil hente dataen fra.  
*/
let options = {
    host: 'jsonplaceholder.typicode.com',
    path: '/posts/1/comments',
    method: 'GET'
};


/*
 Vi laver en request (funktion ting) hvor vi beder den om at skrive dataen der er i variablen Options. Altså skriver den indholdet ud for os. Her fortæller vi også at body er det samme som d
*/
https.request(options, (response) => {


    response.on('data', (d) => {
        process.stdout.write(d);
        body += d;
    });
}).end();







/*
For at løse del 2 af opgaven skal man først oprette konstant variabler for den host man laver, vi laver local host.
*/


const http = require('http');
 
const hostname = 'localhost';
const port = 3000;
 
/*
Dernæst skal vi oprette serveren, og fortælle den hvad der skal blive vist på den. Her siger vi at den skal opstille tekst indhold, og at indholdet skal være body, altså indholdet fra hjemmesiden vi linkede til for oven.
*/
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
});


/*
Til sidst laver vi en server.listen, som når vi executer koden, vil lytte til hvornår hostname og port bliver aktiveret og derefter consol.log den skrevne sætning samt link til den host server vi har lavet.
 */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
