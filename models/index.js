const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file('keys.json');
mongoose.set('debug', true);

mongoose.Promise = Promise;

// local setup
// const user = nconf.get('mongoUser');
// const pass = nconf.get('mongoPass');
// const host = nconf.get('mongoHost');
// const port = nconf.get('mongoPort');

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;

let uri = `mongodb://${user}:${pass}@${host}:${port}`;
console.log(uri)
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${process.env.MONGO_DB}`;
}


mongoose.connect(uri, (err, res) => {
  if (err) {
    console.log(`ERROR connecting to ${process.env.MONGO_DB} due to ${err}`);
    throw err;
  } else {
    console.log(`Succeeded connected to: ${process.env.MONGO_DB} with ${res}`);
  }
});

module.exports.User = require('./user');
module.exports.Piece = require('./piece');
module.exports.Rating = require('./rating');
