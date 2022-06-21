const { MongoClient } = require("mongodb");
const client = new MongoClient('mongodb+srv://IvanAdmin:Mocurorn12_@clusternavi.jttsi.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function(err, db){
      console.log(err)
      console.log(db)
      if (db) {
        _db = db.db("cyclingMain");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
    })
  },
  getDb: function () {
    return _db;
  },
};