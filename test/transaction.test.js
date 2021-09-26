const { sequelize } = require('../src/utils/database');
const User = require('../src/models/user');
const { createUser } = require('../src/index');

describe('transaction', () => {

  beforeAll(async() => {
    await User.sync();
  })

  afterAll(async () => {
    await sequelize.close();
  });

  test('does not create a user if an error is thrown', async () => {
    const countBefore = await User.count();
    expect(countBefore).toEqual(0);
    await createUser();
    const countAfter = await User.count();
    expect(countAfter).toEqual(0);
  });
});
