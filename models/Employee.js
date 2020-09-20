const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   Number: {
      type: Number
   },
   
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)