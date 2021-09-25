const { createDatabase } = require('./src/utils/database');

module.exports = async() => {
  await createDatabase();
}
