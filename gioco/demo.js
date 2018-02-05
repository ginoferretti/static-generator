const ejs = require('ejs');
const fs = require('fs');
const articles = [
  {
    title: 'Scemo chi legge',
    
    text: 'Ancora più scemo chi continua a leggere',
    lastUpdateDate: 'fra 2 ore'
  },
  {
    title: 'Gay chi legge',
    
    text: 'Ancora più gay chi continua a leggere',
    lastUpdateDate: 'fra 2 ore'
  }
];
const html = ejs.render(fs.readFileSync('./index.html', { encoding: 'utf8' }), { articles: articles });
fs.writeFileSync('./index2.html', html, { encoding: 'utf8' });