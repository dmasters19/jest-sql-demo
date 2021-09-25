const { sequelize } = require('../src/utils/database');
const User = require('../src/models/user');
const { createUser } = require('../src/index');

describe('transaction', () => {

  afterAll(async () => {
    await sequelize.close();
  });

  test('creates a user', async () => {

    await User.sync();
    const countBefore = await User.count();
    expect(countBefore).toEqual(0);
    await createUser();
    const countAfter = await User.count();
    expect(countAfter).toEqual(0);
  });
});
