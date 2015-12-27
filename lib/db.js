// db setup
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

module.exports = {
  insertDocument: function(db, doc, callback) {
    db.collection('tabMinder').insertOne(doc, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted new record.");
      callback(result);
    });
  },
  retrieveDocument: function(db, id, callback) {
    db.collection('tabMinder').find({"_id": id}, function(err, result) {
      assert.equal(err, null);
      console.log(result);
      callback(result);
    });
  }
}
