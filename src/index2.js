const { error } = require('console');
const fs = require('fs');
const pdf = require('pdf-parse');


const pdfFile = fs.readFileSync('react-beginners-handbook.pdf');

pdf(pdfFile)
.then((data) => {
    /* console.log(data);
    console.log(data.numpages); */
    console.log(data.text);
})
.catch((error) => {
    console.log(error);
})