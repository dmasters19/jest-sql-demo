const { createDatabase } = require('./src/utils/database');

module.exports = async() => {
  if(process.env.SQL_DIALECT === 'mysql'){
    await createDatabase();
  }
}
