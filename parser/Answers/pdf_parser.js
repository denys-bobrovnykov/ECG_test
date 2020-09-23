const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('answers.pdf');
 
pdf(dataBuffer).then(function(data) {
 
    // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
    // console.log(data.text); 
    writeAnswers(data.text);
        
});
function writeAnswers(text) {
    fs.writeFile('answers.txt', text, (err, ok) => console.log('ok'));
}