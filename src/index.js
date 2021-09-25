const { sequelize } = require('./utils/database');
const User = require('./models/user');

const createUser = async function (){

  const transaction = await sequelize.transaction();

  try{
    const user = await User.create({
      firstName: 'Mark',
      lastName: 'Corrigan'
    });

    throw new Error("TEST");

    await transaction.commit();
  }catch(err){
    await transaction.rollback();
  }
}

module.exports = {
  createUser
}
