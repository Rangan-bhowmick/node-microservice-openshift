let DB_URI = "mongodb://admin:India%402020@172.30.95.79:27017/sampledb";

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};
