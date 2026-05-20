const fs = require('fs');
const { rooms } = require('./rooms.js');
const { tours } = require('./tours.js');

const data = {
  rooms,
  tours
};

fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
console.log('Successfully wrote data.json');
