// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/seeds_dev'
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/seeds_test'
  },

  production: {
    client: 'postgresql',
    connection:process.env.DATABASE_URL
    },
};
